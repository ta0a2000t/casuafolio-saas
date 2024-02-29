const AWS = require("aws-sdk");
const https = require("https");
const UrlParse = require("url").URL;
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

/*
 * Waits using an exponential
 * backoff algorithm.
 */
function waitTimeExp(retryCount) {
  return new Promise((resolve) => {
    if (retryCount === 0) {
      resolve();
    } else {
      let MAX_TIME = 20000;
      let waitTime = Math.pow(2, retryCount) * 500;
      let t = Math.min(waitTime, MAX_TIME);

      setTimeout(function () {
        resolve();
      }, t);
    }
  });
}

/**
 * Fetches an HTTP request.
 * @param {*} httpReq An HTTP request to fetch.
 * @returns The body of the HTTP request, parsed as JSON.
 */
function fetchData(httpReq) {
  return new Promise(async (resolve, reject) => {
    let received = "";
    const httpRequest = https
      .request(httpReq, (result) => {
        result
          .on("data", (data) => {
            received += data;
          })
          .on("end", () => {
            let r = JSON.parse(received.toString());
            if (r.hasOwnProperty("errors")) {
              reject(r.errors[0].message);
            } else {
              resolve(r);
            }
          });
      })
      .on("timeout", function () {
        httpRequest.destroy(new Error("timeout"));
      })
      .on("error", (e) => {
        console.log(e);
        reject(e.message);
      });
    httpRequest.write(httpReq.body);
    httpRequest.end();
  });
}

/**
 * Retrieves the GraphQL endpoint from the environment variables.
 * @returns The endpoint of the GraphQL api.
 */
function getEndpoint() {
  let k = Object.keys(process.env).filter((key) => {
    if (key.indexOf("GRAPHQLAPIENDPOINTOUTPUT") !== -1) {
      return true;
    }
    return false;
  });

  let endpoint;
  if (k.length > 0) {
    endpoint = process.env[k[0]];
  }

  return endpoint;
}

/**
 * Manages GraphQL API requests
 */
class MyGraphQLClient {
  /**
   * Constructs the GraphQLAPI instance with the passed in authorization header
   * from the lambda event and retriving the GraphQL endpoint from env vars.
   * @param {*} authorizationHeader Authorization header of the form Bearer XXX
   */
  constructor(authorizationHeader) {
    this.authorization = authorizationHeader.replace("Bearer ", "");
    this.graphQlEndpoint = getEndpoint();
  }

  /**
   * Builds a GraphQL HTTP request with the authorization configured.
   * @param {*} aQuery A GraphQL query (from graphql/mutations.js, etc.)
   * @param {*} aVariables Input variables to the qu
   * @returns The signed request
   */
  createSignedReq(aQuery, aVariables) {
    const endpoint = new UrlParse(this.graphQlEndpoint).hostname.toString();

    const req = new AWS.HttpRequest(this.graphQlEndpoint, "us-east-2");
    req.method = "POST";
    req.path = "/graphql";
    req.headers.host = endpoint;
    req.headers["Authorization"] = this.authorization;
    req.headers["Content-Type"] = "application/json; charset=UTF-8";

    let queryData = {
      query: print(gql(aQuery)),
    };

    if (aVariables) {
      queryData.variables = aVariables;
    }

    req.body = JSON.stringify(queryData);

    let signedReq = {
      ...req,
      host: endpoint,
      timeout: 30000,
    };
    return signedReq;
  }

  /**
   * Runs a GraphQL query, giving it the proper authorization.
   * @param {*} aQuery The query in GQL.
   * @param {*} aVariables Any variables to pass to the query.
   * @returns The data returned from the GraphQL query.
   */
  async run(aQuery, aVariables) {
    let retries = 0;
    let retry = false;
    let data = null;
    let httpReq = this.createSignedReq(aQuery, aVariables);
    let err = null;
    const MAX_RETRIES = 5;

    do {
      try {
        retry = false;
        await waitTimeExp(retries);
        data = await fetchData(httpReq);
      } catch (error) {
        console.log(error);
        err = error;
        retry = true;
      }
    } while (retry && retries++ < MAX_RETRIES);

    if (retries >= MAX_RETRIES) {
      console.log("Error - max retries");
      throw err;
    }

    return data;
  }

  /**
   * Paginates runs of a GraphQL request, when applicable.
   * @param {*} aQuery The query in GQL.
   * @param {*} aVariables Any variables to pass to the query.
   * @param {*} aQueryName The query name from which to get the items.
   * @param {*} nextToken Next token for the page, if it exists.
   * @param {*} items A running array of all the returned items
   */
  async runWithPaginate(
    aQuery,
    aVariables,
    aQueryName,
    nextToken = null,
    items = []
  ) {
    const { data } = await this.run(aQuery, {
      ...aVariables,
      nextToken: nextToken,
    });
    const page = data[aQueryName];
    items = [...items, ...page.items];
    if (page.nextToken) {
      return this.runWithPaginate(
        aQuery,
        aVariables,
        aQueryName,
        page.nextToken,
        items
      );
    } else {
      return items;
    }
  }
}

module.exports = MyGraphQLClient;
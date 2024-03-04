/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// source: https://www.youtube.com/watch?v=Sk9HMuAaTmQ

const aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    let date = new Date();
    if (event.request.userAttributes.sub) {
        // Assuming event.request.userAttributes.given_name is equivalent to firstName in your schema
        const firstName = event.request.userAttributes.given_name;
        const email = event.request.userAttributes.email;
        const sub = event.request.userAttributes.sub;

        // Construct username as a combination or provide a default format
        const username = "".concat(firstName, sub);

        let params = {
            Item: {
                'id': {S: sub},
                '__typename': {S: 'User'},
                'firstName': {S: firstName}, // Changed from given_name to match GraphQL schema
                'email': {S: email},
                'username': {S: username}, 
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
                'owner': {S: sub}, // include the owner attribute
                //  picture and Folios are optional.
            },
            TableName: process.env.USERTABLE
        };

        try {
            await ddb.putItem(params).promise();
            console.log("Successfully written User to DynamoDB");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        console.log("Error: Nothing was written to DynamoDB because 'sub' was missing");
        context.done(null, event);
    }
};


/*
GraphQL Schema


type User
@model
@auth(rules: [
  { allow: owner, operations: [read, update] }, # Owners can read and update their profile
  { allow: groups, groups: ["AdminGroup"], operations: [create, read, update, delete] }, # Admins can perform all operations
]) {
  id: ID!
  firstName: String!
  email: AWSEmail!
  username: String!
  Folios: [Folio] @hasMany(indexName: "byUser", fields: ["id"])
  picture: AWSURL
}

*/

/*
IAM permissions

{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"dynamodb:PutItem"
			],
			"Resource": [
				"arn:aws:dynamodb:us-east-2:590183983731:table/User-ww4w4ebrczafdljllkynji6tvu-dev"
			]
		}
	]
}
*/










/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    email
    username
    Folios {
      nextToken
      __typename
    }
    picture
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      email
      username
      picture
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getFolio = /* GraphQL */ `query GetFolio($id: ID!) {
  getFolio(id: $id) {
    id
    userID
    User {
      id
      firstName
      email
      username
      picture
      createdAt
      updatedAt
      owner
      __typename
    }
    publishedData {
      id
      customData
      createdAt
      updatedAt
      owner
      __typename
    }
    draftData {
      id
      customData
      createdAt
      updatedAt
      owner
      __typename
    }
    title
    description
    folioType
    folioNumber
    customMetadata
    createdAt
    updatedAt
    folioPublishedDataId
    folioDraftDataId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFolioQueryVariables, APITypes.GetFolioQuery>;
export const listFolios = /* GraphQL */ `query ListFolios(
  $filter: ModelFolioFilterInput
  $limit: Int
  $nextToken: String
) {
  listFolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      title
      description
      folioType
      folioNumber
      customMetadata
      createdAt
      updatedAt
      folioPublishedDataId
      folioDraftDataId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoliosQueryVariables,
  APITypes.ListFoliosQuery
>;
export const foliosByUserID = /* GraphQL */ `query FoliosByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFolioFilterInput
  $limit: Int
  $nextToken: String
) {
  foliosByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      title
      description
      folioType
      folioNumber
      customMetadata
      createdAt
      updatedAt
      folioPublishedDataId
      folioDraftDataId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FoliosByUserIDQueryVariables,
  APITypes.FoliosByUserIDQuery
>;
export const getDraftFolioData = /* GraphQL */ `query GetDraftFolioData($id: ID!) {
  getDraftFolioData(id: $id) {
    id
    SocialLinks {
      id
      SocialPlatformType
      urlPostfix
      __typename
    }
    customData
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDraftFolioDataQueryVariables,
  APITypes.GetDraftFolioDataQuery
>;
export const listDraftFolioData = /* GraphQL */ `query ListDraftFolioData(
  $filter: ModelDraftFolioDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listDraftFolioData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customData
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDraftFolioDataQueryVariables,
  APITypes.ListDraftFolioDataQuery
>;
export const getPublishedFolioData = /* GraphQL */ `query GetPublishedFolioData($id: ID!) {
  getPublishedFolioData(id: $id) {
    id
    SocialLinks {
      id
      SocialPlatformType
      urlPostfix
      __typename
    }
    customData
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPublishedFolioDataQueryVariables,
  APITypes.GetPublishedFolioDataQuery
>;
export const listPublishedFolioData = /* GraphQL */ `query ListPublishedFolioData(
  $filter: ModelPublishedFolioDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listPublishedFolioData(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      customData
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPublishedFolioDataQueryVariables,
  APITypes.ListPublishedFolioDataQuery
>;

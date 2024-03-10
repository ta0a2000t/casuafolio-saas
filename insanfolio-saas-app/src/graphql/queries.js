/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
`;
export const getFolio = /* GraphQL */ `
  query GetFolio($id: ID!) {
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
        createdAt
        updatedAt
        owner
        __typename
      }
      draftData {
        id
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
`;
export const listFolios = /* GraphQL */ `
  query ListFolios(
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
`;
export const foliosByUserID = /* GraphQL */ `
  query FoliosByUserID(
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
`;
export const getDraftFolioData = /* GraphQL */ `
  query GetDraftFolioData($id: ID!) {
    getDraftFolioData(id: $id) {
      id
      tamplate {
        id

        ... on T2 {
          name
          picture
          mainIcon
          tags
          tagsTitle
          resumeUrl
        }
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listDraftFolioData = /* GraphQL */ `
  query ListDraftFolioData(
    $filter: ModelDraftFolioDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDraftFolioData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPublishedFolioData = /* GraphQL */ `
  query GetPublishedFolioData($id: ID!) {
    getPublishedFolioData(id: $id) {
      id
      tamplate {
        id

        ... on T2 {
          name
          picture
          mainIcon
          tags
          tagsTitle
          resumeUrl
        }
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPublishedFolioData = /* GraphQL */ `
  query ListPublishedFolioData(
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
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;

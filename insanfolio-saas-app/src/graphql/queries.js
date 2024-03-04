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
      isPublished
      intro
      photos
      FolioType
      SocialLinks {
        id
        SocialPlatformType
        urlPostfix
        createdAt
        updatedAt
        owner
        __typename
      }
      customDetails
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
      createdAt
      updatedAt
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
        isPublished
        intro
        photos
        FolioType
        customDetails
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
        isPublished
        intro
        photos
        FolioType
        customDetails
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
export const getSocialLink = /* GraphQL */ `
  query GetSocialLink($id: ID!) {
    getSocialLink(id: $id) {
      id
      SocialPlatformType
      urlPostfix
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listSocialLinks = /* GraphQL */ `
  query ListSocialLinks(
    $filter: ModelSocialLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocialLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        SocialPlatformType
        urlPostfix
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

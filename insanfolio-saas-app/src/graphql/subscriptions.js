/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateFolio = /* GraphQL */ `
  subscription OnCreateFolio(
    $filter: ModelSubscriptionFolioFilterInput
    $owner: String
  ) {
    onCreateFolio(filter: $filter, owner: $owner) {
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
export const onUpdateFolio = /* GraphQL */ `
  subscription OnUpdateFolio(
    $filter: ModelSubscriptionFolioFilterInput
    $owner: String
  ) {
    onUpdateFolio(filter: $filter, owner: $owner) {
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
export const onDeleteFolio = /* GraphQL */ `
  subscription OnDeleteFolio(
    $filter: ModelSubscriptionFolioFilterInput
    $owner: String
  ) {
    onDeleteFolio(filter: $filter, owner: $owner) {
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
export const onCreateSocialLink = /* GraphQL */ `
  subscription OnCreateSocialLink(
    $filter: ModelSubscriptionSocialLinkFilterInput
    $owner: String
  ) {
    onCreateSocialLink(filter: $filter, owner: $owner) {
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
export const onUpdateSocialLink = /* GraphQL */ `
  subscription OnUpdateSocialLink(
    $filter: ModelSubscriptionSocialLinkFilterInput
    $owner: String
  ) {
    onUpdateSocialLink(filter: $filter, owner: $owner) {
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
export const onDeleteSocialLink = /* GraphQL */ `
  subscription OnDeleteSocialLink(
    $filter: ModelSubscriptionSocialLinkFilterInput
    $owner: String
  ) {
    onDeleteSocialLink(filter: $filter, owner: $owner) {
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

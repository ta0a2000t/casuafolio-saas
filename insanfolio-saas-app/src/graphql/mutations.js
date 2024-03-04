/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createFolio = /* GraphQL */ `
  mutation CreateFolio(
    $input: CreateFolioInput!
    $condition: ModelFolioConditionInput
  ) {
    createFolio(input: $input, condition: $condition) {
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
export const updateFolio = /* GraphQL */ `
  mutation UpdateFolio(
    $input: UpdateFolioInput!
    $condition: ModelFolioConditionInput
  ) {
    updateFolio(input: $input, condition: $condition) {
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
export const deleteFolio = /* GraphQL */ `
  mutation DeleteFolio(
    $input: DeleteFolioInput!
    $condition: ModelFolioConditionInput
  ) {
    deleteFolio(input: $input, condition: $condition) {
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
export const createSocialLink = /* GraphQL */ `
  mutation CreateSocialLink(
    $input: CreateSocialLinkInput!
    $condition: ModelSocialLinkConditionInput
  ) {
    createSocialLink(input: $input, condition: $condition) {
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
export const updateSocialLink = /* GraphQL */ `
  mutation UpdateSocialLink(
    $input: UpdateSocialLinkInput!
    $condition: ModelSocialLinkConditionInput
  ) {
    updateSocialLink(input: $input, condition: $condition) {
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
export const deleteSocialLink = /* GraphQL */ `
  mutation DeleteSocialLink(
    $input: DeleteSocialLinkInput!
    $condition: ModelSocialLinkConditionInput
  ) {
    deleteSocialLink(input: $input, condition: $condition) {
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

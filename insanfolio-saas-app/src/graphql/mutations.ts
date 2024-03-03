/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createFolio = /* GraphQL */ `mutation CreateFolio(
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
` as GeneratedMutation<
  APITypes.CreateFolioMutationVariables,
  APITypes.CreateFolioMutation
>;
export const updateFolio = /* GraphQL */ `mutation UpdateFolio(
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
` as GeneratedMutation<
  APITypes.UpdateFolioMutationVariables,
  APITypes.UpdateFolioMutation
>;
export const deleteFolio = /* GraphQL */ `mutation DeleteFolio(
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
` as GeneratedMutation<
  APITypes.DeleteFolioMutationVariables,
  APITypes.DeleteFolioMutation
>;
export const createSocialLink = /* GraphQL */ `mutation CreateSocialLink(
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
` as GeneratedMutation<
  APITypes.CreateSocialLinkMutationVariables,
  APITypes.CreateSocialLinkMutation
>;
export const updateSocialLink = /* GraphQL */ `mutation UpdateSocialLink(
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
` as GeneratedMutation<
  APITypes.UpdateSocialLinkMutationVariables,
  APITypes.UpdateSocialLinkMutation
>;
export const deleteSocialLink = /* GraphQL */ `mutation DeleteSocialLink(
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
` as GeneratedMutation<
  APITypes.DeleteSocialLinkMutationVariables,
  APITypes.DeleteSocialLinkMutation
>;

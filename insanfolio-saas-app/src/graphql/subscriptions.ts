/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateFolio = /* GraphQL */ `subscription OnCreateFolio(
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
` as GeneratedSubscription<
  APITypes.OnCreateFolioSubscriptionVariables,
  APITypes.OnCreateFolioSubscription
>;
export const onUpdateFolio = /* GraphQL */ `subscription OnUpdateFolio(
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
` as GeneratedSubscription<
  APITypes.OnUpdateFolioSubscriptionVariables,
  APITypes.OnUpdateFolioSubscription
>;
export const onDeleteFolio = /* GraphQL */ `subscription OnDeleteFolio(
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
` as GeneratedSubscription<
  APITypes.OnDeleteFolioSubscriptionVariables,
  APITypes.OnDeleteFolioSubscription
>;
export const onCreateSocialLink = /* GraphQL */ `subscription OnCreateSocialLink(
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
` as GeneratedSubscription<
  APITypes.OnCreateSocialLinkSubscriptionVariables,
  APITypes.OnCreateSocialLinkSubscription
>;
export const onUpdateSocialLink = /* GraphQL */ `subscription OnUpdateSocialLink(
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
` as GeneratedSubscription<
  APITypes.OnUpdateSocialLinkSubscriptionVariables,
  APITypes.OnUpdateSocialLinkSubscription
>;
export const onDeleteSocialLink = /* GraphQL */ `subscription OnDeleteSocialLink(
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
` as GeneratedSubscription<
  APITypes.OnDeleteSocialLinkSubscriptionVariables,
  APITypes.OnDeleteSocialLinkSubscription
>;

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
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
    draftData {
      id
      customTemplate
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
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
    draftData {
      id
      customTemplate
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
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
    draftData {
      id
      customTemplate
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
` as GeneratedSubscription<
  APITypes.OnDeleteFolioSubscriptionVariables,
  APITypes.OnDeleteFolioSubscription
>;
export const onCreateDraftFolioData = /* GraphQL */ `subscription OnCreateDraftFolioData(
  $filter: ModelSubscriptionDraftFolioDataFilterInput
  $owner: String
) {
  onCreateDraftFolioData(filter: $filter, owner: $owner) {
    id
    customTemplate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDraftFolioDataSubscriptionVariables,
  APITypes.OnCreateDraftFolioDataSubscription
>;
export const onUpdateDraftFolioData = /* GraphQL */ `subscription OnUpdateDraftFolioData(
  $filter: ModelSubscriptionDraftFolioDataFilterInput
  $owner: String
) {
  onUpdateDraftFolioData(filter: $filter, owner: $owner) {
    id
    customTemplate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDraftFolioDataSubscriptionVariables,
  APITypes.OnUpdateDraftFolioDataSubscription
>;
export const onDeleteDraftFolioData = /* GraphQL */ `subscription OnDeleteDraftFolioData(
  $filter: ModelSubscriptionDraftFolioDataFilterInput
  $owner: String
) {
  onDeleteDraftFolioData(filter: $filter, owner: $owner) {
    id
    customTemplate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDraftFolioDataSubscriptionVariables,
  APITypes.OnDeleteDraftFolioDataSubscription
>;
export const onCreatePublishedFolioData = /* GraphQL */ `subscription OnCreatePublishedFolioData(
  $filter: ModelSubscriptionPublishedFolioDataFilterInput
  $owner: String
) {
  onCreatePublishedFolioData(filter: $filter, owner: $owner) {
    id
    customTemplate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePublishedFolioDataSubscriptionVariables,
  APITypes.OnCreatePublishedFolioDataSubscription
>;
export const onUpdatePublishedFolioData = /* GraphQL */ `subscription OnUpdatePublishedFolioData(
  $filter: ModelSubscriptionPublishedFolioDataFilterInput
  $owner: String
) {
  onUpdatePublishedFolioData(filter: $filter, owner: $owner) {
    id
    customTemplate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePublishedFolioDataSubscriptionVariables,
  APITypes.OnUpdatePublishedFolioDataSubscription
>;
export const onDeletePublishedFolioData = /* GraphQL */ `subscription OnDeletePublishedFolioData(
  $filter: ModelSubscriptionPublishedFolioDataFilterInput
  $owner: String
) {
  onDeletePublishedFolioData(filter: $filter, owner: $owner) {
    id
    customTemplate
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePublishedFolioDataSubscriptionVariables,
  APITypes.OnDeletePublishedFolioDataSubscription
>;

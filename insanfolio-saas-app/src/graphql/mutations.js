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
`;
export const updateFolio = /* GraphQL */ `
  mutation UpdateFolio(
    $input: UpdateFolioInput!
    $condition: ModelFolioConditionInput
  ) {
    updateFolio(input: $input, condition: $condition) {
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
`;
export const deleteFolio = /* GraphQL */ `
  mutation DeleteFolio(
    $input: DeleteFolioInput!
    $condition: ModelFolioConditionInput
  ) {
    deleteFolio(input: $input, condition: $condition) {
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
`;
export const createDraftFolioData = /* GraphQL */ `
  mutation CreateDraftFolioData(
    $input: CreateDraftFolioDataInput!
    $condition: ModelDraftFolioDataConditionInput
  ) {
    createDraftFolioData(input: $input, condition: $condition) {
      id
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateDraftFolioData = /* GraphQL */ `
  mutation UpdateDraftFolioData(
    $input: UpdateDraftFolioDataInput!
    $condition: ModelDraftFolioDataConditionInput
  ) {
    updateDraftFolioData(input: $input, condition: $condition) {
      id
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteDraftFolioData = /* GraphQL */ `
  mutation DeleteDraftFolioData(
    $input: DeleteDraftFolioDataInput!
    $condition: ModelDraftFolioDataConditionInput
  ) {
    deleteDraftFolioData(input: $input, condition: $condition) {
      id
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createPublishedFolioData = /* GraphQL */ `
  mutation CreatePublishedFolioData(
    $input: CreatePublishedFolioDataInput!
    $condition: ModelPublishedFolioDataConditionInput
  ) {
    createPublishedFolioData(input: $input, condition: $condition) {
      id
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updatePublishedFolioData = /* GraphQL */ `
  mutation UpdatePublishedFolioData(
    $input: UpdatePublishedFolioDataInput!
    $condition: ModelPublishedFolioDataConditionInput
  ) {
    updatePublishedFolioData(input: $input, condition: $condition) {
      id
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deletePublishedFolioData = /* GraphQL */ `
  mutation DeletePublishedFolioData(
    $input: DeletePublishedFolioDataInput!
    $condition: ModelPublishedFolioDataConditionInput
  ) {
    deletePublishedFolioData(input: $input, condition: $condition) {
      id
      customTemplate
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;

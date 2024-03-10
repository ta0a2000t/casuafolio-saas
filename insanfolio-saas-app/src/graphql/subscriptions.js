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
export const onUpdateFolio = /* GraphQL */ `
  subscription OnUpdateFolio(
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
export const onDeleteFolio = /* GraphQL */ `
  subscription OnDeleteFolio(
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
export const onCreateDraftFolioData = /* GraphQL */ `
  subscription OnCreateDraftFolioData(
    $filter: ModelSubscriptionDraftFolioDataFilterInput
    $owner: String
  ) {
    onCreateDraftFolioData(filter: $filter, owner: $owner) {
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
export const onUpdateDraftFolioData = /* GraphQL */ `
  subscription OnUpdateDraftFolioData(
    $filter: ModelSubscriptionDraftFolioDataFilterInput
    $owner: String
  ) {
    onUpdateDraftFolioData(filter: $filter, owner: $owner) {
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
export const onDeleteDraftFolioData = /* GraphQL */ `
  subscription OnDeleteDraftFolioData(
    $filter: ModelSubscriptionDraftFolioDataFilterInput
    $owner: String
  ) {
    onDeleteDraftFolioData(filter: $filter, owner: $owner) {
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
export const onCreatePublishedFolioData = /* GraphQL */ `
  subscription OnCreatePublishedFolioData(
    $filter: ModelSubscriptionPublishedFolioDataFilterInput
    $owner: String
  ) {
    onCreatePublishedFolioData(filter: $filter, owner: $owner) {
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
export const onUpdatePublishedFolioData = /* GraphQL */ `
  subscription OnUpdatePublishedFolioData(
    $filter: ModelSubscriptionPublishedFolioDataFilterInput
    $owner: String
  ) {
    onUpdatePublishedFolioData(filter: $filter, owner: $owner) {
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
export const onDeletePublishedFolioData = /* GraphQL */ `
  subscription OnDeletePublishedFolioData(
    $filter: ModelSubscriptionPublishedFolioDataFilterInput
    $owner: String
  ) {
    onDeletePublishedFolioData(filter: $filter, owner: $owner) {
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

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  email: string,
  username: string,
  picture?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  email: string,
  username: string,
  Folios?: ModelFolioConnection | null,
  picture?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelFolioConnection = {
  __typename: "ModelFolioConnection",
  items:  Array<Folio | null >,
  nextToken?: string | null,
};

export type Folio = {
  __typename: "Folio",
  id: string,
  userID: string,
  User?: User | null,
  publishedData?: PublishedFolioData | null,
  draftData?: DraftFolioData | null,
  title: string,
  description?: string | null,
  folioType: FolioType,
  folioNumber: FolioNumber,
  customMetadata?: string | null,
  createdAt: string,
  updatedAt: string,
  folioPublishedDataId?: string | null,
  folioDraftDataId?: string | null,
  owner?: string | null,
};

export type PublishedFolioData = {
  __typename: "PublishedFolioData",
  id: string,
  tamplate?: Template | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Template = {
  __typename: "Template",
  id: string,
  SocialLinks?:  Array<SocialLink | null > | null,
};

export type T2 = {
  __typename: "T2",
  id: string,
  SocialLinks?:  Array<SocialLink | null > | null,
  name: string,
  picture?: string | null,
  mainIcon?: string | null,
  tags?: Array< string | null > | null,
  tagsTitle?: string | null,
  resumeUrl?: string | null,
  englishData?: T2En | null,
  arabicData?: T2Ar | null,
};

export type SocialLink = {
  __typename: "SocialLink",
  id: string,
  SocialPlatformType: SocialPlatformType,
  urlPostfix: string,
};

export enum SocialPlatformType {
  YOUTUBE = "YOUTUBE",
  INSTAGRAM = "INSTAGRAM",
  TWITTER = "TWITTER",
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  FACEBOOK = "FACEBOOK",
  TIKTOK = "TIKTOK",
}


export type T2En = {
  __typename: "T2En",
  timeline?:  Array<T2TItem | null > | null,
  gallery1?: T2gallery | null,
  gallery2?: T2gallery | null,
  aboutGreeting?: string | null,
  aboutDescription?: string | null,
};

export type T2TItem = {
  __typename: "T2TItem",
  id: string,
  title: string,
  description: string,
  startDate: string,
  pictures?: Array< string | null > | null,
  url?: string | null,
  tags?: Array< string | null > | null,
  importantTags?: Array< string | null > | null,
  place?: string | null,
  endDate?: string | null,
};

export type T2gallery = {
  __typename: "T2gallery",
  id: string,
  title?: string | null,
  pictures?: Array< string | null > | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  url?: string | null,
  startDate?: string | null,
};

export type T2Ar = {
  __typename: "T2Ar",
  timeline?:  Array<T2TItem | null > | null,
  gallery1?: T2gallery | null,
  gallery2?: T2gallery | null,
  aboutGreeting?: string | null,
  aboutDescription?: string | null,
};

export type DraftFolioData = {
  __typename: "DraftFolioData",
  id: string,
  tamplate?: Template | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum FolioType {
  TIMELINE = "TIMELINE",
  RESEARCH = "RESEARCH",
  RESTAURANT = "RESTAURANT",
  LANDING = "LANDING",
  ORGANIZATION = "ORGANIZATION",
}


export enum FolioNumber {
  ONE = "ONE",
  TWO = "TWO",
}


export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  email?: string | null,
  username?: string | null,
  picture?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateFolioInput = {
  id?: string | null,
  userID: string,
  title: string,
  description?: string | null,
  folioType: FolioType,
  folioNumber: FolioNumber,
  customMetadata?: string | null,
  folioPublishedDataId?: string | null,
  folioDraftDataId?: string | null,
};

export type ModelFolioConditionInput = {
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  folioType?: ModelFolioTypeInput | null,
  folioNumber?: ModelFolioNumberInput | null,
  customMetadata?: ModelStringInput | null,
  and?: Array< ModelFolioConditionInput | null > | null,
  or?: Array< ModelFolioConditionInput | null > | null,
  not?: ModelFolioConditionInput | null,
  folioPublishedDataId?: ModelIDInput | null,
  folioDraftDataId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFolioTypeInput = {
  eq?: FolioType | null,
  ne?: FolioType | null,
};

export type ModelFolioNumberInput = {
  eq?: FolioNumber | null,
  ne?: FolioNumber | null,
};

export type UpdateFolioInput = {
  id: string,
  userID?: string | null,
  title?: string | null,
  description?: string | null,
  folioType?: FolioType | null,
  folioNumber?: FolioNumber | null,
  customMetadata?: string | null,
  folioPublishedDataId?: string | null,
  folioDraftDataId?: string | null,
};

export type DeleteFolioInput = {
  id: string,
};

export type CreateDraftFolioDataInput = {
  id?: string | null,
  tamplate?: TemplateInput | null,
};

export type TemplateInput = {
  id?: string | null,
  SocialLinks?: Array< SocialLinkInput | null > | null,
};

export type SocialLinkInput = {
  id?: string | null,
  SocialPlatformType?: SocialPlatformType | null,
  urlPostfix?: string | null,
};

export type ModelDraftFolioDataConditionInput = {
  and?: Array< ModelDraftFolioDataConditionInput | null > | null,
  or?: Array< ModelDraftFolioDataConditionInput | null > | null,
  not?: ModelDraftFolioDataConditionInput | null,
};

export type UpdateDraftFolioDataInput = {
  id: string,
  tamplate?: TemplateInput | null,
};

export type DeleteDraftFolioDataInput = {
  id: string,
};

export type CreatePublishedFolioDataInput = {
  id?: string | null,
  tamplate?: TemplateInput | null,
};

export type ModelPublishedFolioDataConditionInput = {
  and?: Array< ModelPublishedFolioDataConditionInput | null > | null,
  or?: Array< ModelPublishedFolioDataConditionInput | null > | null,
  not?: ModelPublishedFolioDataConditionInput | null,
};

export type UpdatePublishedFolioDataInput = {
  id: string,
  tamplate?: TemplateInput | null,
};

export type DeletePublishedFolioDataInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelFolioFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  folioType?: ModelFolioTypeInput | null,
  folioNumber?: ModelFolioNumberInput | null,
  customMetadata?: ModelStringInput | null,
  and?: Array< ModelFolioFilterInput | null > | null,
  or?: Array< ModelFolioFilterInput | null > | null,
  not?: ModelFolioFilterInput | null,
  folioPublishedDataId?: ModelIDInput | null,
  folioDraftDataId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDraftFolioDataFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelDraftFolioDataFilterInput | null > | null,
  or?: Array< ModelDraftFolioDataFilterInput | null > | null,
  not?: ModelDraftFolioDataFilterInput | null,
};

export type ModelDraftFolioDataConnection = {
  __typename: "ModelDraftFolioDataConnection",
  items:  Array<DraftFolioData | null >,
  nextToken?: string | null,
};

export type ModelPublishedFolioDataFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelPublishedFolioDataFilterInput | null > | null,
  or?: Array< ModelPublishedFolioDataFilterInput | null > | null,
  not?: ModelPublishedFolioDataFilterInput | null,
};

export type ModelPublishedFolioDataConnection = {
  __typename: "ModelPublishedFolioDataConnection",
  items:  Array<PublishedFolioData | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFolioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  folioType?: ModelSubscriptionStringInput | null,
  folioNumber?: ModelSubscriptionStringInput | null,
  customMetadata?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFolioFilterInput | null > | null,
  or?: Array< ModelSubscriptionFolioFilterInput | null > | null,
};

export type ModelSubscriptionDraftFolioDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDraftFolioDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionDraftFolioDataFilterInput | null > | null,
};

export type ModelSubscriptionPublishedFolioDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPublishedFolioDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionPublishedFolioDataFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFolioMutationVariables = {
  input: CreateFolioInput,
  condition?: ModelFolioConditionInput | null,
};

export type CreateFolioMutation = {
  createFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateFolioMutationVariables = {
  input: UpdateFolioInput,
  condition?: ModelFolioConditionInput | null,
};

export type UpdateFolioMutation = {
  updateFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteFolioMutationVariables = {
  input: DeleteFolioInput,
  condition?: ModelFolioConditionInput | null,
};

export type DeleteFolioMutation = {
  deleteFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateDraftFolioDataMutationVariables = {
  input: CreateDraftFolioDataInput,
  condition?: ModelDraftFolioDataConditionInput | null,
};

export type CreateDraftFolioDataMutation = {
  createDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateDraftFolioDataMutationVariables = {
  input: UpdateDraftFolioDataInput,
  condition?: ModelDraftFolioDataConditionInput | null,
};

export type UpdateDraftFolioDataMutation = {
  updateDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteDraftFolioDataMutationVariables = {
  input: DeleteDraftFolioDataInput,
  condition?: ModelDraftFolioDataConditionInput | null,
};

export type DeleteDraftFolioDataMutation = {
  deleteDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePublishedFolioDataMutationVariables = {
  input: CreatePublishedFolioDataInput,
  condition?: ModelPublishedFolioDataConditionInput | null,
};

export type CreatePublishedFolioDataMutation = {
  createPublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePublishedFolioDataMutationVariables = {
  input: UpdatePublishedFolioDataInput,
  condition?: ModelPublishedFolioDataConditionInput | null,
};

export type UpdatePublishedFolioDataMutation = {
  updatePublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePublishedFolioDataMutationVariables = {
  input: DeletePublishedFolioDataInput,
  condition?: ModelPublishedFolioDataConditionInput | null,
};

export type DeletePublishedFolioDataMutation = {
  deletePublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFolioQueryVariables = {
  id: string,
};

export type GetFolioQuery = {
  getFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListFoliosQueryVariables = {
  filter?: ModelFolioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoliosQuery = {
  listFolios?:  {
    __typename: "ModelFolioConnection",
    items:  Array< {
      __typename: "Folio",
      id: string,
      userID: string,
      title: string,
      description?: string | null,
      folioType: FolioType,
      folioNumber: FolioNumber,
      customMetadata?: string | null,
      createdAt: string,
      updatedAt: string,
      folioPublishedDataId?: string | null,
      folioDraftDataId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FoliosByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFolioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FoliosByUserIDQuery = {
  foliosByUserID?:  {
    __typename: "ModelFolioConnection",
    items:  Array< {
      __typename: "Folio",
      id: string,
      userID: string,
      title: string,
      description?: string | null,
      folioType: FolioType,
      folioNumber: FolioNumber,
      customMetadata?: string | null,
      createdAt: string,
      updatedAt: string,
      folioPublishedDataId?: string | null,
      folioDraftDataId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDraftFolioDataQueryVariables = {
  id: string,
};

export type GetDraftFolioDataQuery = {
  getDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListDraftFolioDataQueryVariables = {
  filter?: ModelDraftFolioDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDraftFolioDataQuery = {
  listDraftFolioData?:  {
    __typename: "ModelDraftFolioDataConnection",
    items:  Array< {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPublishedFolioDataQueryVariables = {
  id: string,
};

export type GetPublishedFolioDataQuery = {
  getPublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPublishedFolioDataQueryVariables = {
  filter?: ModelPublishedFolioDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPublishedFolioDataQuery = {
  listPublishedFolioData?:  {
    __typename: "ModelPublishedFolioDataConnection",
    items:  Array< {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    email: string,
    username: string,
    Folios?:  {
      __typename: "ModelFolioConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFolioSubscriptionVariables = {
  filter?: ModelSubscriptionFolioFilterInput | null,
  owner?: string | null,
};

export type OnCreateFolioSubscription = {
  onCreateFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateFolioSubscriptionVariables = {
  filter?: ModelSubscriptionFolioFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFolioSubscription = {
  onUpdateFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteFolioSubscriptionVariables = {
  filter?: ModelSubscriptionFolioFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFolioSubscription = {
  onDeleteFolio?:  {
    __typename: "Folio",
    id: string,
    userID: string,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      email: string,
      username: string,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    publishedData?:  {
      __typename: "PublishedFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    draftData?:  {
      __typename: "DraftFolioData",
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    title: string,
    description?: string | null,
    folioType: FolioType,
    folioNumber: FolioNumber,
    customMetadata?: string | null,
    createdAt: string,
    updatedAt: string,
    folioPublishedDataId?: string | null,
    folioDraftDataId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateDraftFolioDataSubscriptionVariables = {
  filter?: ModelSubscriptionDraftFolioDataFilterInput | null,
  owner?: string | null,
};

export type OnCreateDraftFolioDataSubscription = {
  onCreateDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateDraftFolioDataSubscriptionVariables = {
  filter?: ModelSubscriptionDraftFolioDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDraftFolioDataSubscription = {
  onUpdateDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteDraftFolioDataSubscriptionVariables = {
  filter?: ModelSubscriptionDraftFolioDataFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDraftFolioDataSubscription = {
  onDeleteDraftFolioData?:  {
    __typename: "DraftFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePublishedFolioDataSubscriptionVariables = {
  filter?: ModelSubscriptionPublishedFolioDataFilterInput | null,
  owner?: string | null,
};

export type OnCreatePublishedFolioDataSubscription = {
  onCreatePublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePublishedFolioDataSubscriptionVariables = {
  filter?: ModelSubscriptionPublishedFolioDataFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePublishedFolioDataSubscription = {
  onUpdatePublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePublishedFolioDataSubscriptionVariables = {
  filter?: ModelSubscriptionPublishedFolioDataFilterInput | null,
  owner?: string | null,
};

export type OnDeletePublishedFolioDataSubscription = {
  onDeletePublishedFolioData?:  {
    __typename: "PublishedFolioData",
    id: string,
    tamplate: ( {
        __typename: "T2",
        id: string,
        name: string,
        picture?: string | null,
        mainIcon?: string | null,
        tags?: Array< string | null > | null,
        tagsTitle?: string | null,
        resumeUrl?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

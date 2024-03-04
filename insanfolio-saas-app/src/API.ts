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
  isPublished: boolean,
  intro?: string | null,
  photos?: Array< string | null > | null,
  FolioType: FolioType,
  SocialLinks?:  Array<SocialLink | null > | null,
  customDetails: string,
  User?: User | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum FolioType {
  TIMELINE = "TIMELINE",
  RESEARCH = "RESEARCH",
  RESTAURANT = "RESTAURANT",
  LANDING = "LANDING",
}


export type SocialLink = {
  __typename: "SocialLink",
  id: string,
  SocialPlatformType: SocialPlatformType,
  urlPostfix: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
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
  isPublished: boolean,
  intro?: string | null,
  photos?: Array< string | null > | null,
  FolioType: FolioType,
  customDetails: string,
};

export type ModelFolioConditionInput = {
  userID?: ModelIDInput | null,
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  FolioType?: ModelFolioTypeInput | null,
  customDetails?: ModelStringInput | null,
  and?: Array< ModelFolioConditionInput | null > | null,
  or?: Array< ModelFolioConditionInput | null > | null,
  not?: ModelFolioConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFolioTypeInput = {
  eq?: FolioType | null,
  ne?: FolioType | null,
};

export type UpdateFolioInput = {
  id: string,
  userID?: string | null,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  FolioType?: FolioType | null,
  customDetails?: string | null,
};

export type DeleteFolioInput = {
  id: string,
};

export type CreateSocialLinkInput = {
  id?: string | null,
  SocialPlatformType: SocialPlatformType,
  urlPostfix: string,
};

export type ModelSocialLinkConditionInput = {
  SocialPlatformType?: ModelSocialPlatformTypeInput | null,
  urlPostfix?: ModelStringInput | null,
  and?: Array< ModelSocialLinkConditionInput | null > | null,
  or?: Array< ModelSocialLinkConditionInput | null > | null,
  not?: ModelSocialLinkConditionInput | null,
};

export type ModelSocialPlatformTypeInput = {
  eq?: SocialPlatformType | null,
  ne?: SocialPlatformType | null,
};

export type UpdateSocialLinkInput = {
  id: string,
  SocialPlatformType?: SocialPlatformType | null,
  urlPostfix?: string | null,
};

export type DeleteSocialLinkInput = {
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
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  FolioType?: ModelFolioTypeInput | null,
  customDetails?: ModelStringInput | null,
  and?: Array< ModelFolioFilterInput | null > | null,
  or?: Array< ModelFolioFilterInput | null > | null,
  not?: ModelFolioFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSocialLinkFilterInput = {
  id?: ModelIDInput | null,
  SocialPlatformType?: ModelSocialPlatformTypeInput | null,
  urlPostfix?: ModelStringInput | null,
  and?: Array< ModelSocialLinkFilterInput | null > | null,
  or?: Array< ModelSocialLinkFilterInput | null > | null,
  not?: ModelSocialLinkFilterInput | null,
};

export type ModelSocialLinkConnection = {
  __typename: "ModelSocialLinkConnection",
  items:  Array<SocialLink | null >,
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
  isPublished?: ModelSubscriptionBooleanInput | null,
  intro?: ModelSubscriptionStringInput | null,
  photos?: ModelSubscriptionStringInput | null,
  FolioType?: ModelSubscriptionStringInput | null,
  customDetails?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFolioFilterInput | null > | null,
  or?: Array< ModelSubscriptionFolioFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionSocialLinkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  SocialPlatformType?: ModelSubscriptionStringInput | null,
  urlPostfix?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSocialLinkFilterInput | null > | null,
  or?: Array< ModelSubscriptionSocialLinkFilterInput | null > | null,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateSocialLinkMutationVariables = {
  input: CreateSocialLinkInput,
  condition?: ModelSocialLinkConditionInput | null,
};

export type CreateSocialLinkMutation = {
  createSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSocialLinkMutationVariables = {
  input: UpdateSocialLinkInput,
  condition?: ModelSocialLinkConditionInput | null,
};

export type UpdateSocialLinkMutation = {
  updateSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSocialLinkMutationVariables = {
  input: DeleteSocialLinkInput,
  condition?: ModelSocialLinkConditionInput | null,
};

export type DeleteSocialLinkMutation = {
  deleteSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
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
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      FolioType: FolioType,
      customDetails: string,
      createdAt: string,
      updatedAt: string,
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
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      FolioType: FolioType,
      customDetails: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSocialLinkQueryVariables = {
  id: string,
};

export type GetSocialLinkQuery = {
  getSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSocialLinksQueryVariables = {
  filter?: ModelSocialLinkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialLinksQuery = {
  listSocialLinks?:  {
    __typename: "ModelSocialLinkConnection",
    items:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
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
    isPublished: boolean,
    intro?: string | null,
    photos?: Array< string | null > | null,
    FolioType: FolioType,
    SocialLinks?:  Array< {
      __typename: "SocialLink",
      id: string,
      SocialPlatformType: SocialPlatformType,
      urlPostfix: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    customDetails: string,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateSocialLinkSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinkFilterInput | null,
  owner?: string | null,
};

export type OnCreateSocialLinkSubscription = {
  onCreateSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSocialLinkSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinkFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSocialLinkSubscription = {
  onUpdateSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSocialLinkSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinkFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSocialLinkSubscription = {
  onDeleteSocialLink?:  {
    __typename: "SocialLink",
    id: string,
    SocialPlatformType: SocialPlatformType,
    urlPostfix: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

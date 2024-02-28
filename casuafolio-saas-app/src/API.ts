/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSocialLinksInput = {
  id?: string | null,
  github?: string | null,
  linkedin?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
  facebook?: string | null,
};

export type ModelSocialLinksConditionInput = {
  github?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  tiktok?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  and?: Array< ModelSocialLinksConditionInput | null > | null,
  or?: Array< ModelSocialLinksConditionInput | null > | null,
  not?: ModelSocialLinksConditionInput | null,
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

export type SocialLinks = {
  __typename: "SocialLinks",
  id: string,
  github?: string | null,
  linkedin?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
  facebook?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSocialLinksInput = {
  id: string,
  github?: string | null,
  linkedin?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
  facebook?: string | null,
};

export type DeleteSocialLinksInput = {
  id: string,
};

export type CreateSectionInput = {
  id?: string | null,
  name?: string | null,
  title?: string | null,
  portfolioID: string,
  portfolioSectionsId?: string | null,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  portfolioID?: ModelIDInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
  portfolioSectionsId?: ModelIDInput | null,
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

export type Section = {
  __typename: "Section",
  id: string,
  name?: string | null,
  title?: string | null,
  events?: ModelEventConnection | null,
  portfolioID: string,
  portfolio?: Portfolio | null,
  createdAt: string,
  updatedAt: string,
  portfolioSectionsId?: string | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name?: string | null,
  logo?: string | null,
  role?: string | null,
  dates?: DateRange | null,
  bullets?: Array< string | null > | null,
  skills?: Array< string | null > | null,
  photos?: Array< string | null > | null,
  link?: string | null,
  sectionID: string,
  section?: Section | null,
  createdAt: string,
  updatedAt: string,
  sectionEventsId?: string | null,
  eventDatesId?: string | null,
};

export type DateRange = {
  __typename: "DateRange",
  id: string,
  start: string,
  end?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type Portfolio = {
  __typename: "Portfolio",
  id: string,
  isPublished: boolean,
  socialLinks?: SocialLinks | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  firstName: string,
  lastName?: string | null,
  resumeLink?: string | null,
  sections?: ModelSectionConnection | null,
  createdAt: string,
  updatedAt: string,
  userPortfolioId?: string | null,
  portfolioSocialLinksId?: string | null,
  owner?: string | null,
};

export type TemplateInterface = {
  __typename: "TemplateInterface",
  id: string,
  isPublished?: boolean | null,
  socialLinks?: SocialLinks | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
};

export type Research = {
  __typename: "Research",
  id: string,
  isPublished?: boolean | null,
  socialLinks?: SocialLinks | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  userResearchId?: string | null,
  researchSocialLinksId?: string | null,
  owner?: string | null,
};

export type Charity = {
  __typename: "Charity",
  id: string,
  isPublished?: boolean | null,
  socialLinks?: SocialLinks | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  userCharityId?: string | null,
  charitySocialLinksId?: string | null,
  owner?: string | null,
};

export type Restaurant = {
  __typename: "Restaurant",
  id: string,
  isPublished?: boolean | null,
  socialLinks?: SocialLinks | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  userRestaurantId?: string | null,
  restaurantSocialLinksId?: string | null,
  owner?: string | null,
};

export type ModelSectionConnection = {
  __typename: "ModelSectionConnection",
  items:  Array<Section | null >,
  nextToken?: string | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  portfolioID?: string | null,
  portfolioSectionsId?: string | null,
};

export type DeleteSectionInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  name?: string | null,
  logo?: string | null,
  role?: string | null,
  bullets?: Array< string | null > | null,
  skills?: Array< string | null > | null,
  photos?: Array< string | null > | null,
  link?: string | null,
  sectionID: string,
  sectionEventsId?: string | null,
  eventDatesId?: string | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  role?: ModelStringInput | null,
  bullets?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  link?: ModelStringInput | null,
  sectionID?: ModelIDInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  sectionEventsId?: ModelIDInput | null,
  eventDatesId?: ModelIDInput | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  logo?: string | null,
  role?: string | null,
  bullets?: Array< string | null > | null,
  skills?: Array< string | null > | null,
  photos?: Array< string | null > | null,
  link?: string | null,
  sectionID?: string | null,
  sectionEventsId?: string | null,
  eventDatesId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateDateRangeInput = {
  id?: string | null,
  start: string,
  end?: string | null,
};

export type ModelDateRangeConditionInput = {
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelDateRangeConditionInput | null > | null,
  or?: Array< ModelDateRangeConditionInput | null > | null,
  not?: ModelDateRangeConditionInput | null,
};

export type UpdateDateRangeInput = {
  id: string,
  start?: string | null,
  end?: string | null,
};

export type DeleteDateRangeInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  username: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  username: string,
  portfolio?: ModelPortfolioConnection | null,
  research?: ModelResearchConnection | null,
  charity?: ModelCharityConnection | null,
  restaurant?: ModelRestaurantConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPortfolioConnection = {
  __typename: "ModelPortfolioConnection",
  items:  Array<Portfolio | null >,
  nextToken?: string | null,
};

export type ModelResearchConnection = {
  __typename: "ModelResearchConnection",
  items:  Array<Research | null >,
  nextToken?: string | null,
};

export type ModelCharityConnection = {
  __typename: "ModelCharityConnection",
  items:  Array<Charity | null >,
  nextToken?: string | null,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items:  Array<Restaurant | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreatePortfolioInput = {
  id?: string | null,
  isPublished: boolean,
  intro?: string | null,
  photos?: Array< string | null > | null,
  firstName: string,
  lastName?: string | null,
  resumeLink?: string | null,
  userPortfolioId?: string | null,
  portfolioSocialLinksId?: string | null,
};

export type ModelPortfolioConditionInput = {
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  resumeLink?: ModelStringInput | null,
  and?: Array< ModelPortfolioConditionInput | null > | null,
  or?: Array< ModelPortfolioConditionInput | null > | null,
  not?: ModelPortfolioConditionInput | null,
  userPortfolioId?: ModelIDInput | null,
  portfolioSocialLinksId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePortfolioInput = {
  id: string,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  firstName?: string | null,
  lastName?: string | null,
  resumeLink?: string | null,
  userPortfolioId?: string | null,
  portfolioSocialLinksId?: string | null,
};

export type DeletePortfolioInput = {
  id: string,
};

export type CreateResearchInput = {
  id?: string | null,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  userResearchId?: string | null,
  researchSocialLinksId?: string | null,
};

export type ModelResearchConditionInput = {
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  and?: Array< ModelResearchConditionInput | null > | null,
  or?: Array< ModelResearchConditionInput | null > | null,
  not?: ModelResearchConditionInput | null,
  userResearchId?: ModelIDInput | null,
  researchSocialLinksId?: ModelIDInput | null,
};

export type UpdateResearchInput = {
  id: string,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  userResearchId?: string | null,
  researchSocialLinksId?: string | null,
};

export type DeleteResearchInput = {
  id: string,
};

export type CreateCharityInput = {
  id?: string | null,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  userCharityId?: string | null,
  charitySocialLinksId?: string | null,
};

export type ModelCharityConditionInput = {
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  and?: Array< ModelCharityConditionInput | null > | null,
  or?: Array< ModelCharityConditionInput | null > | null,
  not?: ModelCharityConditionInput | null,
  userCharityId?: ModelIDInput | null,
  charitySocialLinksId?: ModelIDInput | null,
};

export type UpdateCharityInput = {
  id: string,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  userCharityId?: string | null,
  charitySocialLinksId?: string | null,
};

export type DeleteCharityInput = {
  id: string,
};

export type CreateRestaurantInput = {
  id?: string | null,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  userRestaurantId?: string | null,
  restaurantSocialLinksId?: string | null,
};

export type ModelRestaurantConditionInput = {
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
  userRestaurantId?: ModelIDInput | null,
  restaurantSocialLinksId?: ModelIDInput | null,
};

export type UpdateRestaurantInput = {
  id: string,
  isPublished?: boolean | null,
  intro?: string | null,
  photos?: Array< string | null > | null,
  userRestaurantId?: string | null,
  restaurantSocialLinksId?: string | null,
};

export type DeleteRestaurantInput = {
  id: string,
};

export type ModelSocialLinksFilterInput = {
  id?: ModelIDInput | null,
  github?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  twitter?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  youtube?: ModelStringInput | null,
  tiktok?: ModelStringInput | null,
  facebook?: ModelStringInput | null,
  and?: Array< ModelSocialLinksFilterInput | null > | null,
  or?: Array< ModelSocialLinksFilterInput | null > | null,
  not?: ModelSocialLinksFilterInput | null,
};

export type ModelSocialLinksConnection = {
  __typename: "ModelSocialLinksConnection",
  items:  Array<SocialLinks | null >,
  nextToken?: string | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  portfolioID?: ModelIDInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
  portfolioSectionsId?: ModelIDInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  role?: ModelStringInput | null,
  bullets?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  link?: ModelStringInput | null,
  sectionID?: ModelIDInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  sectionEventsId?: ModelIDInput | null,
  eventDatesId?: ModelIDInput | null,
};

export type ModelDateRangeFilterInput = {
  id?: ModelIDInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  and?: Array< ModelDateRangeFilterInput | null > | null,
  or?: Array< ModelDateRangeFilterInput | null > | null,
  not?: ModelDateRangeFilterInput | null,
};

export type ModelDateRangeConnection = {
  __typename: "ModelDateRangeConnection",
  items:  Array<DateRange | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelPortfolioFilterInput = {
  id?: ModelIDInput | null,
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  resumeLink?: ModelStringInput | null,
  and?: Array< ModelPortfolioFilterInput | null > | null,
  or?: Array< ModelPortfolioFilterInput | null > | null,
  not?: ModelPortfolioFilterInput | null,
  userPortfolioId?: ModelIDInput | null,
  portfolioSocialLinksId?: ModelIDInput | null,
};

export type ModelResearchFilterInput = {
  id?: ModelIDInput | null,
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  and?: Array< ModelResearchFilterInput | null > | null,
  or?: Array< ModelResearchFilterInput | null > | null,
  not?: ModelResearchFilterInput | null,
  userResearchId?: ModelIDInput | null,
  researchSocialLinksId?: ModelIDInput | null,
};

export type ModelCharityFilterInput = {
  id?: ModelIDInput | null,
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  and?: Array< ModelCharityFilterInput | null > | null,
  or?: Array< ModelCharityFilterInput | null > | null,
  not?: ModelCharityFilterInput | null,
  userCharityId?: ModelIDInput | null,
  charitySocialLinksId?: ModelIDInput | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  isPublished?: ModelBooleanInput | null,
  intro?: ModelStringInput | null,
  photos?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
  userRestaurantId?: ModelIDInput | null,
  restaurantSocialLinksId?: ModelIDInput | null,
};

export type ModelSubscriptionSocialLinksFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  github?: ModelSubscriptionStringInput | null,
  linkedin?: ModelSubscriptionStringInput | null,
  twitter?: ModelSubscriptionStringInput | null,
  instagram?: ModelSubscriptionStringInput | null,
  youtube?: ModelSubscriptionStringInput | null,
  tiktok?: ModelSubscriptionStringInput | null,
  facebook?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSocialLinksFilterInput | null > | null,
  or?: Array< ModelSubscriptionSocialLinksFilterInput | null > | null,
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

export type ModelSubscriptionSectionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  portfolioID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSectionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSectionFilterInput | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  bullets?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  photos?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  sectionID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionDateRangeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDateRangeFilterInput | null > | null,
  or?: Array< ModelSubscriptionDateRangeFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionPortfolioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  intro?: ModelSubscriptionStringInput | null,
  photos?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  resumeLink?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPortfolioFilterInput | null > | null,
  or?: Array< ModelSubscriptionPortfolioFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionResearchFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  intro?: ModelSubscriptionStringInput | null,
  photos?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResearchFilterInput | null > | null,
  or?: Array< ModelSubscriptionResearchFilterInput | null > | null,
};

export type ModelSubscriptionCharityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  intro?: ModelSubscriptionStringInput | null,
  photos?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCharityFilterInput | null > | null,
  or?: Array< ModelSubscriptionCharityFilterInput | null > | null,
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isPublished?: ModelSubscriptionBooleanInput | null,
  intro?: ModelSubscriptionStringInput | null,
  photos?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
};

export type CreateSocialLinksMutationVariables = {
  input: CreateSocialLinksInput,
  condition?: ModelSocialLinksConditionInput | null,
};

export type CreateSocialLinksMutation = {
  createSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSocialLinksMutationVariables = {
  input: UpdateSocialLinksInput,
  condition?: ModelSocialLinksConditionInput | null,
};

export type UpdateSocialLinksMutation = {
  updateSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSocialLinksMutationVariables = {
  input: DeleteSocialLinksInput,
  condition?: ModelSocialLinksConditionInput | null,
};

export type DeleteSocialLinksMutation = {
  deleteSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type CreateDateRangeMutationVariables = {
  input: CreateDateRangeInput,
  condition?: ModelDateRangeConditionInput | null,
};

export type CreateDateRangeMutation = {
  createDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDateRangeMutationVariables = {
  input: UpdateDateRangeInput,
  condition?: ModelDateRangeConditionInput | null,
};

export type UpdateDateRangeMutation = {
  updateDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDateRangeMutationVariables = {
  input: DeleteDateRangeInput,
  condition?: ModelDateRangeConditionInput | null,
};

export type DeleteDateRangeMutation = {
  deleteDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePortfolioMutationVariables = {
  input: CreatePortfolioInput,
  condition?: ModelPortfolioConditionInput | null,
};

export type CreatePortfolioMutation = {
  createPortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePortfolioMutationVariables = {
  input: UpdatePortfolioInput,
  condition?: ModelPortfolioConditionInput | null,
};

export type UpdatePortfolioMutation = {
  updatePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePortfolioMutationVariables = {
  input: DeletePortfolioInput,
  condition?: ModelPortfolioConditionInput | null,
};

export type DeletePortfolioMutation = {
  deletePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateResearchMutationVariables = {
  input: CreateResearchInput,
  condition?: ModelResearchConditionInput | null,
};

export type CreateResearchMutation = {
  createResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateResearchMutationVariables = {
  input: UpdateResearchInput,
  condition?: ModelResearchConditionInput | null,
};

export type UpdateResearchMutation = {
  updateResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteResearchMutationVariables = {
  input: DeleteResearchInput,
  condition?: ModelResearchConditionInput | null,
};

export type DeleteResearchMutation = {
  deleteResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCharityMutationVariables = {
  input: CreateCharityInput,
  condition?: ModelCharityConditionInput | null,
};

export type CreateCharityMutation = {
  createCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCharityMutationVariables = {
  input: UpdateCharityInput,
  condition?: ModelCharityConditionInput | null,
};

export type UpdateCharityMutation = {
  updateCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCharityMutationVariables = {
  input: DeleteCharityInput,
  condition?: ModelCharityConditionInput | null,
};

export type DeleteCharityMutation = {
  deleteCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetSocialLinksQueryVariables = {
  id: string,
};

export type GetSocialLinksQuery = {
  getSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSocialLinksQueryVariables = {
  filter?: ModelSocialLinksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocialLinksQuery = {
  listSocialLinks?:  {
    __typename: "ModelSocialLinksConnection",
    items:  Array< {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections?:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name?: string | null,
      logo?: string | null,
      role?: string | null,
      bullets?: Array< string | null > | null,
      skills?: Array< string | null > | null,
      photos?: Array< string | null > | null,
      link?: string | null,
      sectionID: string,
      createdAt: string,
      updatedAt: string,
      sectionEventsId?: string | null,
      eventDatesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDateRangeQueryVariables = {
  id: string,
};

export type GetDateRangeQuery = {
  getDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDateRangesQueryVariables = {
  filter?: ModelDateRangeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDateRangesQuery = {
  listDateRanges?:  {
    __typename: "ModelDateRangeConnection",
    items:  Array< {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
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
      username: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPortfolioQueryVariables = {
  id: string,
};

export type GetPortfolioQuery = {
  getPortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPortfoliosQueryVariables = {
  filter?: ModelPortfolioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPortfoliosQuery = {
  listPortfolios?:  {
    __typename: "ModelPortfolioConnection",
    items:  Array< {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResearchQueryVariables = {
  id: string,
};

export type GetResearchQuery = {
  getResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListResearchQueryVariables = {
  filter?: ModelResearchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResearchQuery = {
  listResearch?:  {
    __typename: "ModelResearchConnection",
    items:  Array< {
      __typename: "Research",
      id: string,
      isPublished?: boolean | null,
      intro?: string | null,
      photos?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userResearchId?: string | null,
      researchSocialLinksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCharityQueryVariables = {
  id: string,
};

export type GetCharityQuery = {
  getCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCharitiesQueryVariables = {
  filter?: ModelCharityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCharitiesQuery = {
  listCharities?:  {
    __typename: "ModelCharityConnection",
    items:  Array< {
      __typename: "Charity",
      id: string,
      isPublished?: boolean | null,
      intro?: string | null,
      photos?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userCharityId?: string | null,
      charitySocialLinksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      isPublished?: boolean | null,
      intro?: string | null,
      photos?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      userRestaurantId?: string | null,
      restaurantSocialLinksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSocialLinksSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinksFilterInput | null,
};

export type OnCreateSocialLinksSubscription = {
  onCreateSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSocialLinksSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinksFilterInput | null,
};

export type OnUpdateSocialLinksSubscription = {
  onUpdateSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSocialLinksSubscriptionVariables = {
  filter?: ModelSubscriptionSocialLinksFilterInput | null,
};

export type OnDeleteSocialLinksSubscription = {
  onDeleteSocialLinks?:  {
    __typename: "SocialLinks",
    id: string,
    github?: string | null,
    linkedin?: string | null,
    twitter?: string | null,
    instagram?: string | null,
    youtube?: string | null,
    tiktok?: string | null,
    facebook?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type OnUpdateSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type OnDeleteSectionSubscriptionVariables = {
  filter?: ModelSubscriptionSectionFilterInput | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection?:  {
    __typename: "Section",
    id: string,
    name?: string | null,
    title?: string | null,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    portfolioID: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      isPublished: boolean,
      intro?: string | null,
      photos?: Array< string | null > | null,
      firstName: string,
      lastName?: string | null,
      resumeLink?: string | null,
      createdAt: string,
      updatedAt: string,
      userPortfolioId?: string | null,
      portfolioSocialLinksId?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    portfolioSectionsId?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name?: string | null,
    logo?: string | null,
    role?: string | null,
    dates?:  {
      __typename: "DateRange",
      id: string,
      start: string,
      end?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    bullets?: Array< string | null > | null,
    skills?: Array< string | null > | null,
    photos?: Array< string | null > | null,
    link?: string | null,
    sectionID: string,
    section?:  {
      __typename: "Section",
      id: string,
      name?: string | null,
      title?: string | null,
      portfolioID: string,
      createdAt: string,
      updatedAt: string,
      portfolioSectionsId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sectionEventsId?: string | null,
    eventDatesId?: string | null,
  } | null,
};

export type OnCreateDateRangeSubscriptionVariables = {
  filter?: ModelSubscriptionDateRangeFilterInput | null,
};

export type OnCreateDateRangeSubscription = {
  onCreateDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDateRangeSubscriptionVariables = {
  filter?: ModelSubscriptionDateRangeFilterInput | null,
};

export type OnUpdateDateRangeSubscription = {
  onUpdateDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDateRangeSubscriptionVariables = {
  filter?: ModelSubscriptionDateRangeFilterInput | null,
};

export type OnDeleteDateRangeSubscription = {
  onDeleteDateRange?:  {
    __typename: "DateRange",
    id: string,
    start: string,
    end?: string | null,
    createdAt: string,
    updatedAt: string,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
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
    username: string,
    portfolio?:  {
      __typename: "ModelPortfolioConnection",
      nextToken?: string | null,
    } | null,
    research?:  {
      __typename: "ModelResearchConnection",
      nextToken?: string | null,
    } | null,
    charity?:  {
      __typename: "ModelCharityConnection",
      nextToken?: string | null,
    } | null,
    restaurant?:  {
      __typename: "ModelRestaurantConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioFilterInput | null,
  owner?: string | null,
};

export type OnCreatePortfolioSubscription = {
  onCreatePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePortfolioSubscription = {
  onUpdatePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioFilterInput | null,
  owner?: string | null,
};

export type OnDeletePortfolioSubscription = {
  onDeletePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    isPublished: boolean,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    firstName: string,
    lastName?: string | null,
    resumeLink?: string | null,
    sections?:  {
      __typename: "ModelSectionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userPortfolioId?: string | null,
    portfolioSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateResearchSubscriptionVariables = {
  filter?: ModelSubscriptionResearchFilterInput | null,
  owner?: string | null,
};

export type OnCreateResearchSubscription = {
  onCreateResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateResearchSubscriptionVariables = {
  filter?: ModelSubscriptionResearchFilterInput | null,
  owner?: string | null,
};

export type OnUpdateResearchSubscription = {
  onUpdateResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteResearchSubscriptionVariables = {
  filter?: ModelSubscriptionResearchFilterInput | null,
  owner?: string | null,
};

export type OnDeleteResearchSubscription = {
  onDeleteResearch?:  {
    __typename: "Research",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userResearchId?: string | null,
    researchSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCharitySubscriptionVariables = {
  filter?: ModelSubscriptionCharityFilterInput | null,
  owner?: string | null,
};

export type OnCreateCharitySubscription = {
  onCreateCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCharitySubscriptionVariables = {
  filter?: ModelSubscriptionCharityFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCharitySubscription = {
  onUpdateCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCharitySubscriptionVariables = {
  filter?: ModelSubscriptionCharityFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCharitySubscription = {
  onDeleteCharity?:  {
    __typename: "Charity",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userCharityId?: string | null,
    charitySocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
  owner?: string | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    isPublished?: boolean | null,
    socialLinks?:  {
      __typename: "SocialLinks",
      id: string,
      github?: string | null,
      linkedin?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
      facebook?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    intro?: string | null,
    photos?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    userRestaurantId?: string | null,
    restaurantSocialLinksId?: string | null,
    owner?: string | null,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    username
    portfolio {
      id
      userID
      isPublished
      intro
      photos
      lastName
      resumeLink
      createdAt
      updatedAt
      portfolioSocialLinksId
      __typename
    }
    research {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      researchSocialLinksId
      __typename
    }
    charity {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      charitySocialLinksId
      __typename
    }
    restaurant {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      restaurantSocialLinksId
      __typename
    }
    createdAt
    updatedAt
    userPortfolioId
    userResearchId
    userCharityId
    userRestaurantId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $id: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      firstName
      username
      createdAt
      updatedAt
      userPortfolioId
      userResearchId
      userCharityId
      userRestaurantId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSocialLinks = /* GraphQL */ `query GetSocialLinks($id: ID!) {
  getSocialLinks(id: $id) {
    id
    github
    linkedin
    twitter
    instagram
    youtube
    tiktok
    facebook
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSocialLinksQueryVariables,
  APITypes.GetSocialLinksQuery
>;
export const listSocialLinks = /* GraphQL */ `query ListSocialLinks(
  $id: ID
  $filter: ModelSocialLinksFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSocialLinks(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      github
      linkedin
      twitter
      instagram
      youtube
      tiktok
      facebook
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSocialLinksQueryVariables,
  APITypes.ListSocialLinksQuery
>;
export const getPortfolio = /* GraphQL */ `query GetPortfolio($id: ID!) {
  getPortfolio(id: $id) {
    id
    userID
    user {
      id
      firstName
      username
      createdAt
      updatedAt
      userPortfolioId
      userResearchId
      userCharityId
      userRestaurantId
      __typename
    }
    isPublished
    socialLinks {
      id
      github
      linkedin
      twitter
      instagram
      youtube
      tiktok
      facebook
      createdAt
      updatedAt
      __typename
    }
    intro
    photos
    lastName
    resumeLink
    sections {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    portfolioSocialLinksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPortfolioQueryVariables,
  APITypes.GetPortfolioQuery
>;
export const listPortfolios = /* GraphQL */ `query ListPortfolios(
  $id: ID
  $filter: ModelPortfolioFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPortfolios(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      lastName
      resumeLink
      createdAt
      updatedAt
      portfolioSocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPortfoliosQueryVariables,
  APITypes.ListPortfoliosQuery
>;
export const getSection = /* GraphQL */ `query GetSection($id: ID!) {
  getSection(id: $id) {
    id
    name
    title
    events {
      nextToken
      __typename
    }
    portfolioID
    portfolio {
      id
      userID
      isPublished
      intro
      photos
      lastName
      resumeLink
      createdAt
      updatedAt
      portfolioSocialLinksId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSectionQueryVariables,
  APITypes.GetSectionQuery
>;
export const listSections = /* GraphQL */ `query ListSections(
  $id: ID
  $filter: ModelSectionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSections(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      title
      portfolioID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSectionsQueryVariables,
  APITypes.ListSectionsQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    name
    logo
    role
    dates {
      id
      start
      end
      eventID
      createdAt
      updatedAt
      __typename
    }
    bullets
    skills
    photos
    link
    sectionID
    section {
      id
      name
      title
      portfolioID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    eventDatesId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $id: ID
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEvents(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      logo
      role
      bullets
      skills
      photos
      link
      sectionID
      createdAt
      updatedAt
      eventDatesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const getDateRange = /* GraphQL */ `query GetDateRange($id: ID!) {
  getDateRange(id: $id) {
    id
    start
    end
    eventID
    event {
      id
      name
      logo
      role
      bullets
      skills
      photos
      link
      sectionID
      createdAt
      updatedAt
      eventDatesId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDateRangeQueryVariables,
  APITypes.GetDateRangeQuery
>;
export const listDateRanges = /* GraphQL */ `query ListDateRanges(
  $id: ID
  $filter: ModelDateRangeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDateRanges(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      start
      end
      eventID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDateRangesQueryVariables,
  APITypes.ListDateRangesQuery
>;
export const getResearch = /* GraphQL */ `query GetResearch($id: ID!) {
  getResearch(id: $id) {
    id
    userID
    user {
      id
      firstName
      username
      createdAt
      updatedAt
      userPortfolioId
      userResearchId
      userCharityId
      userRestaurantId
      __typename
    }
    isPublished
    socialLinks {
      id
      github
      linkedin
      twitter
      instagram
      youtube
      tiktok
      facebook
      createdAt
      updatedAt
      __typename
    }
    intro
    photos
    createdAt
    updatedAt
    researchSocialLinksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResearchQueryVariables,
  APITypes.GetResearchQuery
>;
export const listResearch = /* GraphQL */ `query ListResearch(
  $id: ID
  $filter: ModelResearchFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listResearch(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      researchSocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListResearchQueryVariables,
  APITypes.ListResearchQuery
>;
export const getCharity = /* GraphQL */ `query GetCharity($id: ID!) {
  getCharity(id: $id) {
    id
    userID
    user {
      id
      firstName
      username
      createdAt
      updatedAt
      userPortfolioId
      userResearchId
      userCharityId
      userRestaurantId
      __typename
    }
    isPublished
    socialLinks {
      id
      github
      linkedin
      twitter
      instagram
      youtube
      tiktok
      facebook
      createdAt
      updatedAt
      __typename
    }
    intro
    photos
    createdAt
    updatedAt
    charitySocialLinksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharityQueryVariables,
  APITypes.GetCharityQuery
>;
export const listCharities = /* GraphQL */ `query ListCharities(
  $id: ID
  $filter: ModelCharityFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCharities(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      charitySocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCharitiesQueryVariables,
  APITypes.ListCharitiesQuery
>;
export const getRestaurant = /* GraphQL */ `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
    id
    userID
    user {
      id
      firstName
      username
      createdAt
      updatedAt
      userPortfolioId
      userResearchId
      userCharityId
      userRestaurantId
      __typename
    }
    isPublished
    socialLinks {
      id
      github
      linkedin
      twitter
      instagram
      youtube
      tiktok
      facebook
      createdAt
      updatedAt
      __typename
    }
    intro
    photos
    createdAt
    updatedAt
    restaurantSocialLinksId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRestaurantQueryVariables,
  APITypes.GetRestaurantQuery
>;
export const listRestaurants = /* GraphQL */ `query ListRestaurants(
  $id: ID
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRestaurants(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      restaurantSocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestaurantsQueryVariables,
  APITypes.ListRestaurantsQuery
>;
export const portfoliosByUserID = /* GraphQL */ `query PortfoliosByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPortfolioFilterInput
  $limit: Int
  $nextToken: String
) {
  portfoliosByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      lastName
      resumeLink
      createdAt
      updatedAt
      portfolioSocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PortfoliosByUserIDQueryVariables,
  APITypes.PortfoliosByUserIDQuery
>;
export const sectionsByPortfolioID = /* GraphQL */ `query SectionsByPortfolioID(
  $portfolioID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  sectionsByPortfolioID(
    portfolioID: $portfolioID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      title
      portfolioID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SectionsByPortfolioIDQueryVariables,
  APITypes.SectionsByPortfolioIDQuery
>;
export const eventsBySectionID = /* GraphQL */ `query EventsBySectionID(
  $sectionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  eventsBySectionID(
    sectionID: $sectionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      logo
      role
      bullets
      skills
      photos
      link
      sectionID
      createdAt
      updatedAt
      eventDatesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EventsBySectionIDQueryVariables,
  APITypes.EventsBySectionIDQuery
>;
export const dateRangesByEventID = /* GraphQL */ `query DateRangesByEventID(
  $eventID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDateRangeFilterInput
  $limit: Int
  $nextToken: String
) {
  dateRangesByEventID(
    eventID: $eventID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      start
      end
      eventID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DateRangesByEventIDQueryVariables,
  APITypes.DateRangesByEventIDQuery
>;
export const researchByUserID = /* GraphQL */ `query ResearchByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelResearchFilterInput
  $limit: Int
  $nextToken: String
) {
  researchByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      researchSocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ResearchByUserIDQueryVariables,
  APITypes.ResearchByUserIDQuery
>;
export const charitiesByUserID = /* GraphQL */ `query CharitiesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCharityFilterInput
  $limit: Int
  $nextToken: String
) {
  charitiesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      charitySocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CharitiesByUserIDQueryVariables,
  APITypes.CharitiesByUserIDQuery
>;
export const restaurantsByUserID = /* GraphQL */ `query RestaurantsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  restaurantsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      isPublished
      intro
      photos
      createdAt
      updatedAt
      restaurantSocialLinksId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RestaurantsByUserIDQueryVariables,
  APITypes.RestaurantsByUserIDQuery
>;

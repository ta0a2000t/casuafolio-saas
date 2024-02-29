/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../amplify/backend/function/insanfoliosaasapplayerLambdaGQLInsanFolio/lib/nodejs/src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

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
  $filter: ModelSocialLinksFilterInput
  $limit: Int
  $nextToken: String
) {
  listSocialLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      isPublished
      intro
      photos
      firstName
      lastName
      resumeLink
      createdAt
      updatedAt
      userPortfolioId
      portfolioSocialLinksId
      owner
      __typename
    }
    createdAt
    updatedAt
    portfolioSectionsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSectionQueryVariables,
  APITypes.GetSectionQuery
>;
export const listSections = /* GraphQL */ `query ListSections(
  $filter: ModelSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      title
      portfolioID
      createdAt
      updatedAt
      portfolioSectionsId
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
      portfolioSectionsId
      __typename
    }
    createdAt
    updatedAt
    sectionEventsId
    eventDatesId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      sectionEventsId
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
  $filter: ModelDateRangeFilterInput
  $limit: Int
  $nextToken: String
) {
  listDateRanges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      start
      end
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
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    username
    portfolio {
      nextToken
      __typename
    }
    research {
      nextToken
      __typename
    }
    charity {
      nextToken
      __typename
    }
    restaurant {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      username
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getPortfolio = /* GraphQL */ `query GetPortfolio($id: ID!) {
  getPortfolio(id: $id) {
    id
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
    firstName
    lastName
    resumeLink
    sections {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userPortfolioId
    portfolioSocialLinksId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPortfolioQueryVariables,
  APITypes.GetPortfolioQuery
>;
export const listPortfolios = /* GraphQL */ `query ListPortfolios(
  $filter: ModelPortfolioFilterInput
  $limit: Int
  $nextToken: String
) {
  listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isPublished
      intro
      photos
      firstName
      lastName
      resumeLink
      createdAt
      updatedAt
      userPortfolioId
      portfolioSocialLinksId
      owner
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
export const getResearch = /* GraphQL */ `query GetResearch($id: ID!) {
  getResearch(id: $id) {
    id
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
    userResearchId
    researchSocialLinksId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetResearchQueryVariables,
  APITypes.GetResearchQuery
>;
export const listResearch = /* GraphQL */ `query ListResearch(
  $filter: ModelResearchFilterInput
  $limit: Int
  $nextToken: String
) {
  listResearch(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isPublished
      intro
      photos
      createdAt
      updatedAt
      userResearchId
      researchSocialLinksId
      owner
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
    userCharityId
    charitySocialLinksId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCharityQueryVariables,
  APITypes.GetCharityQuery
>;
export const listCharities = /* GraphQL */ `query ListCharities(
  $filter: ModelCharityFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isPublished
      intro
      photos
      createdAt
      updatedAt
      userCharityId
      charitySocialLinksId
      owner
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
    userRestaurantId
    restaurantSocialLinksId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRestaurantQueryVariables,
  APITypes.GetRestaurantQuery
>;
export const listRestaurants = /* GraphQL */ `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      isPublished
      intro
      photos
      createdAt
      updatedAt
      userRestaurantId
      restaurantSocialLinksId
      owner
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

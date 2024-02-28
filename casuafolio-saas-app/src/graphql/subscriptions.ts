/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSocialLinks = /* GraphQL */ `subscription OnCreateSocialLinks(
  $filter: ModelSubscriptionSocialLinksFilterInput
) {
  onCreateSocialLinks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSocialLinksSubscriptionVariables,
  APITypes.OnCreateSocialLinksSubscription
>;
export const onUpdateSocialLinks = /* GraphQL */ `subscription OnUpdateSocialLinks(
  $filter: ModelSubscriptionSocialLinksFilterInput
) {
  onUpdateSocialLinks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSocialLinksSubscriptionVariables,
  APITypes.OnUpdateSocialLinksSubscription
>;
export const onDeleteSocialLinks = /* GraphQL */ `subscription OnDeleteSocialLinks(
  $filter: ModelSubscriptionSocialLinksFilterInput
) {
  onDeleteSocialLinks(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSocialLinksSubscriptionVariables,
  APITypes.OnDeleteSocialLinksSubscription
>;
export const onCreateSection = /* GraphQL */ `subscription OnCreateSection($filter: ModelSubscriptionSectionFilterInput) {
  onCreateSection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSectionSubscriptionVariables,
  APITypes.OnCreateSectionSubscription
>;
export const onUpdateSection = /* GraphQL */ `subscription OnUpdateSection($filter: ModelSubscriptionSectionFilterInput) {
  onUpdateSection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSectionSubscriptionVariables,
  APITypes.OnUpdateSectionSubscription
>;
export const onDeleteSection = /* GraphQL */ `subscription OnDeleteSection($filter: ModelSubscriptionSectionFilterInput) {
  onDeleteSection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSectionSubscriptionVariables,
  APITypes.OnDeleteSectionSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateDateRange = /* GraphQL */ `subscription OnCreateDateRange($filter: ModelSubscriptionDateRangeFilterInput) {
  onCreateDateRange(filter: $filter) {
    id
    start
    end
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDateRangeSubscriptionVariables,
  APITypes.OnCreateDateRangeSubscription
>;
export const onUpdateDateRange = /* GraphQL */ `subscription OnUpdateDateRange($filter: ModelSubscriptionDateRangeFilterInput) {
  onUpdateDateRange(filter: $filter) {
    id
    start
    end
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDateRangeSubscriptionVariables,
  APITypes.OnUpdateDateRangeSubscription
>;
export const onDeleteDateRange = /* GraphQL */ `subscription OnDeleteDateRange($filter: ModelSubscriptionDateRangeFilterInput) {
  onDeleteDateRange(filter: $filter) {
    id
    start
    end
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDateRangeSubscriptionVariables,
  APITypes.OnDeleteDateRangeSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreatePortfolio = /* GraphQL */ `subscription OnCreatePortfolio(
  $filter: ModelSubscriptionPortfolioFilterInput
  $owner: String
) {
  onCreatePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePortfolioSubscriptionVariables,
  APITypes.OnCreatePortfolioSubscription
>;
export const onUpdatePortfolio = /* GraphQL */ `subscription OnUpdatePortfolio(
  $filter: ModelSubscriptionPortfolioFilterInput
  $owner: String
) {
  onUpdatePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePortfolioSubscriptionVariables,
  APITypes.OnUpdatePortfolioSubscription
>;
export const onDeletePortfolio = /* GraphQL */ `subscription OnDeletePortfolio(
  $filter: ModelSubscriptionPortfolioFilterInput
  $owner: String
) {
  onDeletePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePortfolioSubscriptionVariables,
  APITypes.OnDeletePortfolioSubscription
>;
export const onCreateResearch = /* GraphQL */ `subscription OnCreateResearch(
  $filter: ModelSubscriptionResearchFilterInput
  $owner: String
) {
  onCreateResearch(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResearchSubscriptionVariables,
  APITypes.OnCreateResearchSubscription
>;
export const onUpdateResearch = /* GraphQL */ `subscription OnUpdateResearch(
  $filter: ModelSubscriptionResearchFilterInput
  $owner: String
) {
  onUpdateResearch(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResearchSubscriptionVariables,
  APITypes.OnUpdateResearchSubscription
>;
export const onDeleteResearch = /* GraphQL */ `subscription OnDeleteResearch(
  $filter: ModelSubscriptionResearchFilterInput
  $owner: String
) {
  onDeleteResearch(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResearchSubscriptionVariables,
  APITypes.OnDeleteResearchSubscription
>;
export const onCreateCharity = /* GraphQL */ `subscription OnCreateCharity(
  $filter: ModelSubscriptionCharityFilterInput
  $owner: String
) {
  onCreateCharity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharitySubscriptionVariables,
  APITypes.OnCreateCharitySubscription
>;
export const onUpdateCharity = /* GraphQL */ `subscription OnUpdateCharity(
  $filter: ModelSubscriptionCharityFilterInput
  $owner: String
) {
  onUpdateCharity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharitySubscriptionVariables,
  APITypes.OnUpdateCharitySubscription
>;
export const onDeleteCharity = /* GraphQL */ `subscription OnDeleteCharity(
  $filter: ModelSubscriptionCharityFilterInput
  $owner: String
) {
  onDeleteCharity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharitySubscriptionVariables,
  APITypes.OnDeleteCharitySubscription
>;
export const onCreateRestaurant = /* GraphQL */ `subscription OnCreateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
  $owner: String
) {
  onCreateRestaurant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantSubscriptionVariables,
  APITypes.OnCreateRestaurantSubscription
>;
export const onUpdateRestaurant = /* GraphQL */ `subscription OnUpdateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
  $owner: String
) {
  onUpdateRestaurant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantSubscriptionVariables,
  APITypes.OnUpdateRestaurantSubscription
>;
export const onDeleteRestaurant = /* GraphQL */ `subscription OnDeleteRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
  $owner: String
) {
  onDeleteRestaurant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantSubscriptionVariables,
  APITypes.OnDeleteRestaurantSubscription
>;

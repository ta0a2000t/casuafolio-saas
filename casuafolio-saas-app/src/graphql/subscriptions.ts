/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
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
export const onCreatePortfolio = /* GraphQL */ `subscription OnCreatePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
  onCreatePortfolio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePortfolioSubscriptionVariables,
  APITypes.OnCreatePortfolioSubscription
>;
export const onUpdatePortfolio = /* GraphQL */ `subscription OnUpdatePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
  onUpdatePortfolio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePortfolioSubscriptionVariables,
  APITypes.OnUpdatePortfolioSubscription
>;
export const onDeletePortfolio = /* GraphQL */ `subscription OnDeletePortfolio($filter: ModelSubscriptionPortfolioFilterInput) {
  onDeletePortfolio(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePortfolioSubscriptionVariables,
  APITypes.OnDeletePortfolioSubscription
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateDateRange = /* GraphQL */ `subscription OnCreateDateRange($filter: ModelSubscriptionDateRangeFilterInput) {
  onCreateDateRange(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDateRangeSubscriptionVariables,
  APITypes.OnCreateDateRangeSubscription
>;
export const onUpdateDateRange = /* GraphQL */ `subscription OnUpdateDateRange($filter: ModelSubscriptionDateRangeFilterInput) {
  onUpdateDateRange(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDateRangeSubscriptionVariables,
  APITypes.OnUpdateDateRangeSubscription
>;
export const onDeleteDateRange = /* GraphQL */ `subscription OnDeleteDateRange($filter: ModelSubscriptionDateRangeFilterInput) {
  onDeleteDateRange(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDateRangeSubscriptionVariables,
  APITypes.OnDeleteDateRangeSubscription
>;
export const onCreateResearch = /* GraphQL */ `subscription OnCreateResearch($filter: ModelSubscriptionResearchFilterInput) {
  onCreateResearch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateResearchSubscriptionVariables,
  APITypes.OnCreateResearchSubscription
>;
export const onUpdateResearch = /* GraphQL */ `subscription OnUpdateResearch($filter: ModelSubscriptionResearchFilterInput) {
  onUpdateResearch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateResearchSubscriptionVariables,
  APITypes.OnUpdateResearchSubscription
>;
export const onDeleteResearch = /* GraphQL */ `subscription OnDeleteResearch($filter: ModelSubscriptionResearchFilterInput) {
  onDeleteResearch(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteResearchSubscriptionVariables,
  APITypes.OnDeleteResearchSubscription
>;
export const onCreateCharity = /* GraphQL */ `subscription OnCreateCharity($filter: ModelSubscriptionCharityFilterInput) {
  onCreateCharity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCharitySubscriptionVariables,
  APITypes.OnCreateCharitySubscription
>;
export const onUpdateCharity = /* GraphQL */ `subscription OnUpdateCharity($filter: ModelSubscriptionCharityFilterInput) {
  onUpdateCharity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCharitySubscriptionVariables,
  APITypes.OnUpdateCharitySubscription
>;
export const onDeleteCharity = /* GraphQL */ `subscription OnDeleteCharity($filter: ModelSubscriptionCharityFilterInput) {
  onDeleteCharity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCharitySubscriptionVariables,
  APITypes.OnDeleteCharitySubscription
>;
export const onCreateRestaurant = /* GraphQL */ `subscription OnCreateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onCreateRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantSubscriptionVariables,
  APITypes.OnCreateRestaurantSubscription
>;
export const onUpdateRestaurant = /* GraphQL */ `subscription OnUpdateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onUpdateRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantSubscriptionVariables,
  APITypes.OnUpdateRestaurantSubscription
>;
export const onDeleteRestaurant = /* GraphQL */ `subscription OnDeleteRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onDeleteRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantSubscriptionVariables,
  APITypes.OnDeleteRestaurantSubscription
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const togglePublishPortfolio = /* GraphQL */ `mutation TogglePublishPortfolio($id: ID!, $isPublished: Boolean!) {
  togglePublishPortfolio(id: $id, isPublished: $isPublished) {
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
` as GeneratedMutation<
  APITypes.TogglePublishPortfolioMutationVariables,
  APITypes.TogglePublishPortfolioMutation
>;
export const togglePublishResearch = /* GraphQL */ `mutation TogglePublishResearch($id: ID!, $isPublished: Boolean!) {
  togglePublishResearch(id: $id, isPublished: $isPublished) {
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
` as GeneratedMutation<
  APITypes.TogglePublishResearchMutationVariables,
  APITypes.TogglePublishResearchMutation
>;
export const togglePublishCharity = /* GraphQL */ `mutation TogglePublishCharity($id: ID!, $isPublished: Boolean!) {
  togglePublishCharity(id: $id, isPublished: $isPublished) {
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
` as GeneratedMutation<
  APITypes.TogglePublishCharityMutationVariables,
  APITypes.TogglePublishCharityMutation
>;
export const togglePublishRestaurant = /* GraphQL */ `mutation TogglePublishRestaurant($id: ID!, $isPublished: Boolean!) {
  togglePublishRestaurant(id: $id, isPublished: $isPublished) {
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
` as GeneratedMutation<
  APITypes.TogglePublishRestaurantMutationVariables,
  APITypes.TogglePublishRestaurantMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSocialLinks = /* GraphQL */ `mutation CreateSocialLinks(
  $input: CreateSocialLinksInput!
  $condition: ModelSocialLinksConditionInput
) {
  createSocialLinks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSocialLinksMutationVariables,
  APITypes.CreateSocialLinksMutation
>;
export const updateSocialLinks = /* GraphQL */ `mutation UpdateSocialLinks(
  $input: UpdateSocialLinksInput!
  $condition: ModelSocialLinksConditionInput
) {
  updateSocialLinks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSocialLinksMutationVariables,
  APITypes.UpdateSocialLinksMutation
>;
export const deleteSocialLinks = /* GraphQL */ `mutation DeleteSocialLinks(
  $input: DeleteSocialLinksInput!
  $condition: ModelSocialLinksConditionInput
) {
  deleteSocialLinks(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSocialLinksMutationVariables,
  APITypes.DeleteSocialLinksMutation
>;
export const createPortfolio = /* GraphQL */ `mutation CreatePortfolio(
  $input: CreatePortfolioInput!
  $condition: ModelPortfolioConditionInput
) {
  createPortfolio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePortfolioMutationVariables,
  APITypes.CreatePortfolioMutation
>;
export const updatePortfolio = /* GraphQL */ `mutation UpdatePortfolio(
  $input: UpdatePortfolioInput!
  $condition: ModelPortfolioConditionInput
) {
  updatePortfolio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePortfolioMutationVariables,
  APITypes.UpdatePortfolioMutation
>;
export const deletePortfolio = /* GraphQL */ `mutation DeletePortfolio(
  $input: DeletePortfolioInput!
  $condition: ModelPortfolioConditionInput
) {
  deletePortfolio(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePortfolioMutationVariables,
  APITypes.DeletePortfolioMutation
>;
export const createSection = /* GraphQL */ `mutation CreateSection(
  $input: CreateSectionInput!
  $condition: ModelSectionConditionInput
) {
  createSection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSectionMutationVariables,
  APITypes.CreateSectionMutation
>;
export const updateSection = /* GraphQL */ `mutation UpdateSection(
  $input: UpdateSectionInput!
  $condition: ModelSectionConditionInput
) {
  updateSection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSectionMutationVariables,
  APITypes.UpdateSectionMutation
>;
export const deleteSection = /* GraphQL */ `mutation DeleteSection(
  $input: DeleteSectionInput!
  $condition: ModelSectionConditionInput
) {
  deleteSection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSectionMutationVariables,
  APITypes.DeleteSectionMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createDateRange = /* GraphQL */ `mutation CreateDateRange(
  $input: CreateDateRangeInput!
  $condition: ModelDateRangeConditionInput
) {
  createDateRange(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDateRangeMutationVariables,
  APITypes.CreateDateRangeMutation
>;
export const updateDateRange = /* GraphQL */ `mutation UpdateDateRange(
  $input: UpdateDateRangeInput!
  $condition: ModelDateRangeConditionInput
) {
  updateDateRange(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDateRangeMutationVariables,
  APITypes.UpdateDateRangeMutation
>;
export const deleteDateRange = /* GraphQL */ `mutation DeleteDateRange(
  $input: DeleteDateRangeInput!
  $condition: ModelDateRangeConditionInput
) {
  deleteDateRange(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDateRangeMutationVariables,
  APITypes.DeleteDateRangeMutation
>;
export const createResearch = /* GraphQL */ `mutation CreateResearch(
  $input: CreateResearchInput!
  $condition: ModelResearchConditionInput
) {
  createResearch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateResearchMutationVariables,
  APITypes.CreateResearchMutation
>;
export const updateResearch = /* GraphQL */ `mutation UpdateResearch(
  $input: UpdateResearchInput!
  $condition: ModelResearchConditionInput
) {
  updateResearch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateResearchMutationVariables,
  APITypes.UpdateResearchMutation
>;
export const deleteResearch = /* GraphQL */ `mutation DeleteResearch(
  $input: DeleteResearchInput!
  $condition: ModelResearchConditionInput
) {
  deleteResearch(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteResearchMutationVariables,
  APITypes.DeleteResearchMutation
>;
export const createCharity = /* GraphQL */ `mutation CreateCharity(
  $input: CreateCharityInput!
  $condition: ModelCharityConditionInput
) {
  createCharity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCharityMutationVariables,
  APITypes.CreateCharityMutation
>;
export const updateCharity = /* GraphQL */ `mutation UpdateCharity(
  $input: UpdateCharityInput!
  $condition: ModelCharityConditionInput
) {
  updateCharity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCharityMutationVariables,
  APITypes.UpdateCharityMutation
>;
export const deleteCharity = /* GraphQL */ `mutation DeleteCharity(
  $input: DeleteCharityInput!
  $condition: ModelCharityConditionInput
) {
  deleteCharity(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCharityMutationVariables,
  APITypes.DeleteCharityMutation
>;
export const createRestaurant = /* GraphQL */ `mutation CreateRestaurant(
  $input: CreateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  createRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRestaurantMutationVariables,
  APITypes.CreateRestaurantMutation
>;
export const updateRestaurant = /* GraphQL */ `mutation UpdateRestaurant(
  $input: UpdateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  updateRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRestaurantMutationVariables,
  APITypes.UpdateRestaurantMutation
>;
export const deleteRestaurant = /* GraphQL */ `mutation DeleteRestaurant(
  $input: DeleteRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  deleteRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRestaurantMutationVariables,
  APITypes.DeleteRestaurantMutation
>;

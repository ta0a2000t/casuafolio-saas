the below is removed from the schema:





type T2 implements Template {
  id: ID!
  SocialLinks: [SocialLink]
  name: String!
  picture: AWSURL
  mainIcon: String
  tags: [String]
  tagsTitle: String
  resumeUrl: AWSURL


  englishData: T2En
  arabicData: T2Ar
}

type T2En {
  timeline: [T2TItem]
  gallery1: T2gallery
  gallery2: T2gallery
  aboutGreeting: String
  aboutDescription: String
}

type T2Ar {
  timeline: [T2TItem]
  gallery1: T2gallery
  gallery2: T2gallery
  aboutGreeting: String
  aboutDescription: String
}

type T2gallery{
  id: ID!
  title: String
  pictures: [String]
  description: String
  tags: [String]
  url: AWSURL
  startDate: AWSDate
}

type T2TItem {
  id: ID!
  title: String!
  description: String!
  startDate: AWSDate!
  pictures: [String]
  url: String
  tags: [String]
  importantTags: [String]
  place: String
  endDate: AWSDate
}






type T1 implements Template {
  id: ID!
  SocialLinks: [SocialLink]
  intro: String!
  yourPhotos: [String]
  eventsSections: [T1EventSection]
}

type T1EventSection {
  sectionName: String!
  sectionTitle: String!
  events: [T1Event]
}

type T1Event {
  eventSkills: [String]
  role: String!
  eventName: String!
  eventDates: [AWSDate!]
  eventLink: String
  bullets: [String]
}


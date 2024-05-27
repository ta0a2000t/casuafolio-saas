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
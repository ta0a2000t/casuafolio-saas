// WARNING: DO NOT CHANGE THE NAMES OF THESE VARIABLES.
// In other words: DO NOT MODIFY ANYTHING TO THE LEFT OF THE '=' SIGN.
import info from "./personalizationConstants.json";
console.log(info);
/******************************************
 * 
 *           SECTION 1: VARIABLES
 * 
 ******************************************/

// ---- Sub-Section: Personal Information ----
export const FULL_NAME = info.firstName; // PUT YOUR NAME HERE
export const SITE_TITLE = info.firstName; // displayed on the tab bar of browser.


// ---- Sub-Section: Site Metadata ----
// This tells Google what this website is. Example: Taha Al-Nufaili's Portfolio
export const META_DESCRIPTION = info.firstName + " " + info.lastName; 


// ---- Sub-Section: About Section (aka bio) ----
export const ABOUT_SECTION_GREETING = "about section greet"; //info.ABOUT_SECTION_GREETING;
export const ABOUT_SECTION_TEXT = [info.about.intro];
export const ABOUT_SECTION_GALLERY = info.about.yourPhotos; // DO NOT COUNT "image0.jpg"



// ---- Sub-Section: Social and Resume Links ----
// If you do not want to show any of the below, keep the link empty text, so: ""
export const YOUTUBE_LINK = info["youtube-url"];
export const LINKEDIN_LINK = info["linkedin-url"];
export const GITHUB_LINK = info["github-url"];
export const TWITTER_LINK = info["twitter-url"]; // NOTE, I am not sharing my twitter here, so i set it to: ""
export const INSTAGRAM_LINK = info["instagram-url"];  

export const RESUME_LOCATION = "info.resume";
            // example "./resume.pdf" #NOTE: . means in the "public" folder
            // RESUME_LOCATION could be also a URL to some website that holds you resume.


// ---- Sub-Section: Tab Menu Configuration (Optional) ----
// Purpose: To allow customization of tab names in the navigation menu.
// Note: This section is optional. Modify only if you wish to rename default tab names. 
// Example: Change "About" to alternative names like "Bio" or "Me."
// Another Example: Change "Experience" to "Education", or "Random", or anything.
// WARNING: DO NOT MODIFY ANYTHING TO THE LEFT OF THE '=' SIGN.
export const ABOUT_TAB_NAME = "about tab name";

// tab button names:
export const SECTION1_TAB_NAME = info.eventsSections[0].sectionName;
export const SECTION2_TAB_NAME = info.eventsSections[1].sectionName;
export const SECTION3_TAB_NAME = info.eventsSections[2].sectionName; 

console.log(SECTION1_TAB_NAME, SECTION2_TAB_NAME, SECTION3_TAB_NAME)

 
/******************************************
 * 
 *           SECTION 2: EVENTS
 * 
 *  Purpose: To outline all professional, SECTION3
 *  and SECTION2-based events (SECTION1).
 ******************************************/

// headlines:
export const SECTION1_PAGE_HEADLINE = info.eventsSections[0].sectionTitle;
export const SECTION2_PAGE_HEADLINE = info.eventsSections[1].sectionTitle;
export const SECTION3_PAGE_HEADLINE =info.eventsSections[2].sectionTitle;




// ---- Sub-Section: Experience Events ----
// make sure to sort them; topmost is your most recent
export const SECTION1_EVENTS = info.eventsSections[0].events;



// ---- Sub-Section: Project Events ----
// make sure to sort them; topmost is your most recent
export const SECTION2_EVENTS = info.eventsSections[1].events;

// ---- Sub-Section: Volunteer Events ----
// make sure to sort them; topmost is your most recent
export const SECTION3_EVENTS = info.eventsSections[2].events;
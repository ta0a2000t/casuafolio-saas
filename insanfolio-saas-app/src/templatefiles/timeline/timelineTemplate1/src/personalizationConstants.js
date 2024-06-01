// WARNING: DO NOT CHANGE THE NAMES OF THESE VARIABLES.
// In other words: DO NOT MODIFY ANYTHING TO THE LEFT OF THE '=' SIGN.
//import info from "./personalizationConstants.json";


import dayjs from 'dayjs';

const dateFormat = 'YYYY-MM-DD';
const displayDateFormat = 'MMM YYYY';

export function getConsts(info) {
    
    /******************************************
     * 
     *           SECTION 1: VARIABLES
     * 
     ******************************************/
    
    // ---- Sub-Section: Personal Information ----
    const FULL_NAME = info.firstName; // PUT YOUR NAME HERE
    const SITE_TITLE = info.firstName; // displayed on the tab bar of browser.
    
    
    // ---- Sub-Section: Site Metadata ----
    // This tells Google what this website is. Example: Taha Al-Nufaili's Portfolio
    const META_DESCRIPTION = info.firstName + " " + info.lastName; 
    
    
    // ---- Sub-Section: About Section (aka bio) ----
    const ABOUT_SECTION_GREETING = "about section greet"; //info.ABOUT_SECTION_GREETING;
    const ABOUT_SECTION_TEXT = [info.about.intro];
    const ABOUT_SECTION_GALLERY = info.about.yourPhotos; // DO NOT COUNT "image0.jpg"
    
    
    
    // ---- Sub-Section: Social and Resume Links ----
    // If you do not want to show any of the below, keep the link empty text, so: ""
    const YOUTUBE_LINK = info["youtube-url"];
    const LINKEDIN_LINK = info["linkedin-url"];
    const GITHUB_LINK = info["github-url"];
    const TWITTER_LINK = info["twitter-url"]; // NOTE, I am not sharing my twitter here, so i set it to: ""
    const INSTAGRAM_LINK = info["instagram-url"];  
    
    const RESUME_LOCATION = "info.resume";
                // example "./resume.pdf" #NOTE: . means in the "public" folder
                // RESUME_LOCATION could be also a URL to some website that holds you resume.
    
    
    // ---- Sub-Section: Tab Menu Configuration (Optional) ----
    // Purpose: To allow customization of tab names in the navigation menu.
    // Note: This section is optional. Modify only if you wish to rename default tab names. 
    // Example: Change "About" to alternative names like "Bio" or "Me."
    // Another Example: Change "Experience" to "Education", or "Random", or anything.
    // WARNING: DO NOT MODIFY ANYTHING TO THE LEFT OF THE '=' SIGN.
    const ABOUT_TAB_NAME = "about tab name";
    
    // tab button names:
    const SECTION1_TAB_NAME = info.eventsSections[0]?.sectionName || '';
    const SECTION2_TAB_NAME = info.eventsSections[1]?.sectionName || '';
    const SECTION3_TAB_NAME = info.eventsSections[2]?.sectionName || '';
    
    console.log(SECTION1_TAB_NAME, SECTION2_TAB_NAME, SECTION3_TAB_NAME)
    
     
    /******************************************
     * 
     *           SECTION 2: EVENTS
     * 
     *  Purpose: To outline all professional, SECTION3
     *  and SECTION2-based events (SECTION1).
     ******************************************/
    
    // headlines:
    const SECTION1_PAGE_HEADLINE = info.eventsSections[0]?.sectionTitle || '';
    const SECTION2_PAGE_HEADLINE = info.eventsSections[1]?.sectionTitle || '';
    const SECTION3_PAGE_HEADLINE = info.eventsSections[2]?.sectionTitle || '';
    
    // ---- Sub-Section: Experience Events ----
    // Parse dates using moment
      
      

      const parseAndFormatEventDates = (events) => {
        return events
          .map(event => {
            const startDate = dayjs(event.eventDates[0], dateFormat);
            const endDate = event.eventDates[1] ? dayjs(event.eventDates[1], dateFormat) : dayjs();
            const date = `${startDate.format(displayDateFormat)} - ${endDate.isValid() ? endDate.format(displayDateFormat) : 'Present'}`;
      
            return {
              ...event,
              eventDates: [startDate, endDate],
              date
            };
          })
          .sort((a, b) => a.eventDates[0].isBefore(b.eventDates[0]) ? -1 : 1);
      };
      

     
    const SECTION1_EVENTS = info.eventsSections[0] ? parseAndFormatEventDates(info.eventsSections[0].events) : [];
    const SECTION2_EVENTS = info.eventsSections[1] ? parseAndFormatEventDates(info.eventsSections[1].events) : [];
    const SECTION3_EVENTS = info.eventsSections[2] ? parseAndFormatEventDates(info.eventsSections[2].events) : [];
    


    return ({FULL_NAME
        ,SITE_TITLE
        ,META_DESCRIPTION
        ,ABOUT_SECTION_GREETING
        ,ABOUT_SECTION_TEXT
        ,ABOUT_SECTION_GALLERY
        ,YOUTUBE_LINK
        ,LINKEDIN_LINK
        ,GITHUB_LINK
        ,TWITTER_LINK
        ,INSTAGRAM_LINK
        ,RESUME_LOCATION
        ,ABOUT_TAB_NAME
        ,SECTION1_TAB_NAME
        ,SECTION2_TAB_NAME
        ,SECTION3_TAB_NAME
        ,SECTION1_PAGE_HEADLINE
        ,SECTION2_PAGE_HEADLINE
        ,SECTION3_PAGE_HEADLINE
        ,SECTION1_EVENTS
        ,SECTION2_EVENTS
        ,SECTION3_EVENTS})
}





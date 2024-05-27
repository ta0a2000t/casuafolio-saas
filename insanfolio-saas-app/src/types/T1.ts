// src/types/T1.ts
import {Template} from './Template'

export type T1 = {
    intro: string,
    yourPhotos?: Array< string | null > | null,
    eventsSections?:  Array<T1EventSection | null > | null,
  } & Template; // extending Template interface
  
  export type T1EventSection = {
    sectionName: string,
    sectionTitle: string,
    events?:  Array<T1Event | null > | null,
  };
  
  export type T1Event = {
    eventSkills?: Array< string | null > | null,
    role: string,
    eventName: string,
    eventDates?: Array< string > | null,
    eventLink?: string | null,
    bullets?: Array< string | null > | null,
  };
  
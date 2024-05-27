// src/types/T2.ts
import {Template} from './Template'

export type T2 = {
    name: string,
    picture?: string | null,
    mainIcon?: string | null,
    tags?: Array< string | null > | null,
    tagsTitle?: string | null,
    resumeUrl?: string | null,
    englishData?: T2En | null,
    arabicData?: T2Ar | null,
  } & Template; // extending Template interface
  
  
  export type T2En = {
    timeline?:  Array<T2TItem | null > | null,
    gallery1?: T2gallery | null,
    gallery2?: T2gallery | null,
    aboutGreeting?: string | null,
    aboutDescription?: string | null,
  };
  
  export type T2TItem = {
    id: string,
    title: string,
    description: string,
    startDate: string,
    pictures?: Array< string | null > | null,
    url?: string | null,
    tags?: Array< string | null > | null,
    importantTags?: Array< string | null > | null,
    place?: string | null,
    endDate?: string | null,
  };
  
  export type T2gallery = {
    title?: string | null,
    pictures?: Array< string | null > | null,
    description?: string | null,
    tags?: Array< string | null > | null,
    url?: string | null,
    startDate?: string | null,
  };
  
  export type T2Ar = {
    timeline?:  Array<T2TItem | null > | null,
    gallery1?: T2gallery | null,
    gallery2?: T2gallery | null,
    aboutGreeting?: string | null,
    aboutDescription?: string | null,
  };
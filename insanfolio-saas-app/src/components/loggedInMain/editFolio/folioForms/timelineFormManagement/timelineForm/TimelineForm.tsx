import React, {useState} from 'react';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Space, Switch, TreeSelect, message } from 'antd';
import dayjs from 'dayjs';
import AboutSection from './aboutSection/AboutSection';
import SocialLinksInput from './aboutSection/SocialLinksInput';
import PersonalInfoInput from './aboutSection/PersonalInfoInput';
import GalleryInput from './shared/GalleryInput';
import EventsSections from './eventsSections/EventsSections';
import { DraftFolioData, GetDraftFolioDataQuery, GetFolioQuery, UpdateDraftFolioDataInput } from 'API';
import { updateDraftFolioData } from 'graphql/mutations';
import { fetchDraftFolioDataService, updateDraftFolioDataService } from 'services/draftFolioDataServices';
const dateFormat = 'YYYY/MM/DD';

const urls = ['github-url', 'linkedin-url', 'twitter-url', 'instagram-url', 'youtube-url', 'tiktok-url', 'facebook-url'];
type UrlKey = typeof urls[number];

type PrefixKey = 'github-url' | 'linkedin-url' | 'twitter-url' | 'instagram-url' | 'youtube-url' | 'tiktok-url' | 'facebook-url';
let prefixes: Record<PrefixKey, string> = {
  'github-url': 'https://github.com/',
  'linkedin-url': 'https://www.linkedin.com/in/',
  'twitter-url': 'https://twitter.com/',
  'instagram-url': 'https://www.instagram.com/',
  'youtube-url': 'https://www.youtube.com/',
  'tiktok-url': 'https://www.tiktok.com/@',
  'facebook-url': 'https://www.facebook.com/',

};


interface ResumeItem {
  uid: string;
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  percent: number;
  originFileObj: {
    uid: string;
  };
  error?: {
    status: number;
    method: string;
    url: string;
  };
  response?: string;
  status: string;
}

interface About {
  intro: string;
  yourPhotos: string[];
}

interface Event {
  eventSkills: string[];
  role: string;
  eventName: string;
  eventDates: [string, string];
  eventLink: string;
  bullets: string[];
  photos: string[];
  eventLogo: string[];
}

interface EventsSection {
  events: Event[];
  sectionName: string;
  sectionTitle: string;
}

interface InitialValues {
  size: string;
  firstName: string;
  lastName: string;
  resume: ResumeItem[];
  about: About;
  'linkedin-url': string;
  'youtube-url': string;
  'twitter-url': string;
  'instagram-url': string;
  'tiktok-url': string;
  'facebook-url': string;
  'github-url': string;
  eventsSections: EventsSection[];
}


let initialValues: InitialValues = {
  size: "default",
  firstName: "first name",
  lastName: "last name",
  resume: [{
    "uid": "rc-upload-1708986902924-17",
    "lastModified": 1708631779551,
    "lastModifiedDate": "2024-02-22T19:56:19.551Z",
    "name": "Qimam Fellowship - برنامج قمم.pdf",
    "size": 279863,
    "type": "application/pdf",
    "percent": 0,
    "originFileObj": {
      "uid": "rc-upload-1708986902924-17"
    },
    "error": {
      "status": 404,
      "method": "post",
      "url": "/upload.do"
    },
    "response": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot POST /upload.do</pre>\n</body>\n</html>\n",
    "status": "error"
  }],
  about: {
    intro: "this is an intro",
    yourPhotos: ["https://picsum.photos/200", "https://picsum.photos/200"]
  },

  eventsSections: [
    {
      "events": [
        {
          "eventSkills": ["c#", "python", "js"],
          "role": "event0 role",
          "eventName": "event0 name",
          "eventDates": ["2024-02-13T05:00:00.000Z", "2024-03-20T04:00:00.000Z"],
          "eventLink": "https://www.youtube.com/event2",
          "bullets": ["bullet1 here", "bullet2 here", "bullet3 here"],
          "photos": ["photos1", "photos2", "photos3"],
          "eventLogo": [""]
        },
        {
          "eventSkills": ["communication", "strategy"],
          "role": "event1 role",
          "eventDates": ["2024-02-21T05:00:00.000Z", "2024-03-21T04:00:00.000Z"],
          "eventName": "event1 name",
          "eventLink": "https://www.youtube.com/event1",
          "bullets": [],
          "photos": [],
          "eventLogo": []
        }
      ],
      "sectionName": "sec0 name",
      "sectionTitle": "sec0 title"
    },
    {
      "sectionName": "Section1 name",
      "sectionTitle": "Section1 title",
      "events": []
    }
  ],
  'twitter-url': '',
  'instagram-url': '',
  'tiktok-url': '',
  'facebook-url': '',
  'linkedin-url': "taha-al-nufaili/",
  'youtube-url': "channel/UCcp-0yclr1Zlf1-G_vAoQEA",
  'github-url' : ''
};

// Properly handle moment conversion with optional chaining


//console.log(99999 ,initialValuesWithMoment)

//console.log(JSON.stringify(initialValuesWithMoment))
//console.log(JSON.stringify(JSON.parse(JSON.stringify(initialValuesWithMoment))))
// TypeScript types for your initial values structure



const validateResumeItem = (item: any): item is ResumeItem => {
  return (typeof item.uid === 'string' &&
    typeof item.lastModified === 'number' &&
    typeof item.lastModifiedDate === 'string' &&
    typeof item.name === 'string' &&
    typeof item.size === 'number' &&
    typeof item.type === 'string' &&
    typeof item.percent === 'number' &&
    typeof item.originFileObj === 'object' &&
    typeof item.originFileObj.uid === 'string' &&
    (!item.error || (typeof item.error === 'object' && typeof item.error.status === 'number' && typeof item.error.method === 'string' && typeof item.error.url === 'string')) &&
    (!item.response || typeof item.response === 'string') &&
    typeof item.status === 'string');
};

const validateAbout = (about: any): about is About => {
  return typeof about.intro === 'string' &&
    Array.isArray(about.yourPhotos) && about.yourPhotos.every((photo: any) => typeof photo === 'string');
};

const validateEvent = (event: any): event is Event => {
  if (!event.bullets) {
    event['bullets'] = [];
  }
  if (!event.eventLink) {
    event['eventLink'] = '';
  } 
  if (!event.photos) {
    event['photos'] = [];
  }
  if (!event.eventLogo) {
    event['eventLogo'] = [];
  }
  if (!event.eventSkills) {
    event['eventSkills'] = [];
  }

  const secondCond =     (typeof event.eventLink === 'string' &&
  Array.isArray(event.eventSkills) && event.eventSkills.every((eventSkill: any) => typeof eventSkill === 'string') &&
  Array.isArray(event.bullets) && event.bullets.every((bullet: any) => typeof bullet === 'string') &&
  Array.isArray(event.photos) && event.photos.every((photo: any) => typeof photo === 'string') &&
  Array.isArray(event.eventLogo) && event.eventLogo.every((logo: any) => typeof logo === 'string'));

  const firstCond = (Array.isArray(event.eventSkills) && event.eventSkills.every((skill: any) => typeof skill === 'string') &&
  typeof event.role === 'string' &&
  typeof event.eventName === 'string' &&
  Array.isArray(event.eventDates) && event.eventDates.length === 2);
  console.log(firstCond, secondCond)
  return (firstCond === secondCond) && firstCond; // for some reason, i have to do this
};

const validateEventsSection = (section: any): section is EventsSection => {
  if (!section.events) {
    section['events'] = [];
  }


  return typeof section.sectionName === 'string' &&
    typeof section.sectionTitle === 'string' &&
    (section.events && (Array.isArray(section.events) && section.events.every(validateEvent)));
};



const isInitialValues = (data: any) => {

  for (const url of urls) {
    if (!data[url]) {
      data[url] = '';
    } else {
      data[url] = prefixes[url as PrefixKey] + data[url];
    }
  }




  return typeof data.size === 'string' &&
    typeof data.firstName === 'string' &&
    typeof data.lastName === 'string' &&
    Array.isArray(data.resume) && data.resume.every(validateResumeItem) &&
    validateAbout(data.about) &&
    typeof data['linkedin-url'] === 'string' &&
    typeof data['youtube-url'] === 'string' &&
    typeof data['twitter-url'] === 'string' &&
    typeof data['instagram-url'] === 'string' &&
    typeof data['tiktok-url'] === 'string' &&
    typeof data['facebook-url'] === 'string' &&
    typeof data['github-url'] === 'string' &&
    Array.isArray(data.eventsSections) && data.eventsSections.every(validateEventsSection);
};

// Example usage:
//const isValid = isInitialValues(initialValues);
//console.log(isValid); // true or false

    /* usage:
    if (isInitialValues(initialValues)) {
      console.log('Valid InitialValues:', initialValues);
    } else {
      console.error('Invalid InitialValues');
    } */



type SizeType = Parameters<typeof Form>[0]['size'];

interface TimelineFormProps {
  draftFolioData: DraftFolioData;
}

const TimelineForm: React.FC<TimelineFormProps> = ({draftFolioData}) => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  if (draftFolioData.customTemplate) {
    initialValues = JSON.parse(draftFolioData.customTemplate)

  }

  let initialValuesWithMoment = {
    ...initialValues,
    eventsSections: initialValues.eventsSections?.map(section => ({
      ...section,
      events: section.events?.map(event => ({
        ...event,
        eventDates: [dayjs(event.eventDates[0], dateFormat), dayjs(event.eventDates[1], dateFormat)],
      })),
    })),
  };

  for (const url of urls) {
    const prefix = prefixes[url as PrefixKey];
    if ((initialValuesWithMoment as any)[url].startsWith(prefix)) {
      (initialValuesWithMoment as any)[url] = (initialValuesWithMoment as any)[url].substring(prefix.length);
    }
  }


  const onFinish = (values: any) => {

    try {
    console.log("submitted values: " , JSON.stringify(values));
    if (isInitialValues(values)) {
      console.log('Valid values:', values);
      console.log('Valid values:', JSON.stringify(values));

      const draftFolioDataInput: UpdateDraftFolioDataInput = {
        id: draftFolioData.id,
        customTemplate: JSON.stringify(values)
      }

      updateDraftFolioDataService(draftFolioDataInput).then(() => {
        console.log("Updated draftFolioData successfully!");
        console.log('Success:', values);
        message.success('Submit success!');

      });

    } else {
      console.error('Invalid values');
      message.error('Submit Failed >..<');

    }




      //draftFolioData.customTemplate
      
      /*
      const input = {
        // Extract values and remove prefixes as needed
        github: values['github-url'],
        linkedin: values['linkedin-url'],
        twitter: values['twitter-url'],
        instagram: values['instagram-url'],
        youtube: values['youtube-url'],
        tiktok: values['tiktok-url'],
        facebook: values['facebook-url'],
      };
      const updatedSocialLinksResponse = await API.graphql({
        query: updateSocialLinks,
        variables: { input: input },
        authMode: 'AMAZON_COGNITO_USER_POOLS', // If you're using Cognito User Pools
      });
      console.log(updatedSocialLinksResponse);

      
      Form.Item: firstName
      Form.Item: lastName

      name = 'about';
      Form.Item: {[name, "intro"]}
      Form.Item: {[name, "yourPhotos"]}

      

      Form.List: eventsSections

      number = the section number
      Form.Item: {[name, 'sectionName']}
      Form.Item: {[name, 'sectionTitle']}
      Form.List: {[name, 'events']}


      */

    } catch (error) {
      console.error('Error updating social links:', error);
      // Handle error
    }
  };
    

  return (
    <Form
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ }}
      layout="horizontal"
      initialValues={initialValuesWithMoment}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <PersonalInfoInput/>
      <AboutSection/>
      <SocialLinksInput/>
<EventsSections/>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
    </Form>
  );
};

export default TimelineForm;
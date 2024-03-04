import React, {useState} from 'react';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Space, Switch, TreeSelect, message } from 'antd';
import moment from 'moment'; // Correctly imported
import AboutSection from './aboutSection/AboutSection';
import SocialLinksInput from './aboutSection/SocialLinksInput';
import PersonalInfoInput from './aboutSection/PersonalInfoInput';
import GalleryInput from './shared/GalleryInput';
import EventsSections from './eventsSections/EventsSections';

// Correct TypeScript interfaces
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
  bullets?: string[]; // Corrected type for bullets
}

interface EventsSection {
  events?: Event[]; // Correct optional notation
  sectionName: string;
  sectionTitle: string;
}

interface InitialValues {
  size: string;
  firstName: string;
  lastName: string;
  resume?: ResumeItem[];
  about: About;
  'linkedin-url': string;
  'youtube-url': string;
  eventsSections?: EventsSection[];
}

const initialValues: InitialValues = {
  size: "default",
  firstName: "first name",
  lastName: "last name",
  resume: [     {
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
  } ],
  about: {
    intro: "this is an intro",
    yourPhotos: ["https://picsum.photos/200", "https://picsum.photos/200"]
  },
  'linkedin-url': "taha-al-nufaili/",
  'youtube-url': "channel/UCcp-0yclr1Zlf1-G_vAoQEA",
  eventsSections: [
    {
      "events": [
        {
          "eventSkills": ["c#", "python", "js"],
          "role": "event0 role",
          "eventName": "event0 name",
          "eventDates": ["2024-02-13T05:00:00.000Z", "2024-03-20T04:00:00.000Z"],
          "eventLink": "https://www.youtube.com/event2",
          "bullets": ["bullet1 here", "bullet2 here", "bullet3 here"]
        },
        {
          "eventSkills": ["communication", "strategy"],
          "role": "event1 role",
          "eventDates": ["2024-02-21T05:00:00.000Z", "2024-03-21T04:00:00.000Z"],
          "eventName": "event1 name",
          "eventLink": "https://www.youtube.com/event1",
          "bullets": undefined
        }
      ],
      "sectionName": "sec0 name",
      "sectionTitle": "sec0 title"
    },
    {
      "sectionName": "Section1 name",
      "sectionTitle": "Section1 title"
    }
  ]
};

// Properly handle moment conversion with optional chaining
const initialValuesWithMoment = {
  ...initialValues,
  eventsSections: initialValues.eventsSections?.map(section => ({
    ...section,
    events: section.events?.map(event => ({
      ...event,
      eventDates: event.eventDates ? [moment(event.eventDates[0]), moment(event.eventDates[1])] : [undefined, undefined],
    })) ?? [],
  })),
};




// TypeScript types for your initial values structure










// Your component or application logic here




type SizeType = Parameters<typeof Form>[0]['size'];

const TimelineForm: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };


  const onFinish = (values: any) => {
  console.log('Success:', values);
    try {

      
      console.log(values);
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

      // Handle success
      message.success('Submit success!');
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
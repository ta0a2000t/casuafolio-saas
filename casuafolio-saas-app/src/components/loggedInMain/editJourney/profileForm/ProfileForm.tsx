import React, { useState } from 'react';
import {Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Switch,
  TreeSelect,
  message,
} from 'antd';
import AboutSection from './aboutSection/AboutSection';
import SocialLinksInput from './aboutSection/SocialLinksInput';
import PersonalInfoInput from './aboutSection/PersonalInfoInput';
import GalleryInput from './shared/GalleryInput';
import EventsSections from './eventsSections/EventsSections';


/////////// Form
import { updateSocialLinks } from './../../../../graphql/mutations';



type SizeType = Parameters<typeof Form>[0]['size'];

const ProfileForm: React.FC = () => {
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
      initialValues={{ size: componentSize }}
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

export default ProfileForm;
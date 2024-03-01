import React from 'react';

import {Divider, Form, Input, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import PersonalInfoInput from './PersonalInfoInput';
import SocialLinksInput from './SocialLinksInput';
import GalleryInput from '../shared/GalleryInput';



const AboutSection: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const name = 'about';
  return (
    <div>

    <Divider>About Section</Divider>
    <Form.Item
        name={[name, "intro"]}
        label="Intro"
        rules={[{ required: true }]}>
        <Input.TextArea  autoSize={{ minRows: 2, maxRows: 6 }} showCount maxLength={1000} minLength={20} placeholder='Talk about yourself, your passions, and what makes you tick.'/>
      </Form.Item>

      <Form.Item label="Your Photos"  name={[name, "yourPhotos"]}>

        <GalleryInput galleryLabel={''} maxImages={9} formPath={['about', 'yourPhotos']}/>
      </Form.Item>


    </div>

  );
};

export default AboutSection;
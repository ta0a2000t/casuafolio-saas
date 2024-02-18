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

  return (
    <div>

    <Divider>About Section</Divider>
    <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true }]}>
        <Input.TextArea showCount maxLength={1000} minLength={20} placeholder='Talk about yourself, your passions, and what makes you tick.'/>
      </Form.Item>
      <GalleryInput galleryLabel={'Your Photos'}/>



    </div>

  );
};

export default AboutSection;
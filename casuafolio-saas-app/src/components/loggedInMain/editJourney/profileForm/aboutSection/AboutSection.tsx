import React from 'react';

import {Divider, Form, Input, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import PersonalInfoInput from './PersonalInfoInput';
import SocialLinksInput from './SocialLinksInput';



const AboutSection: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
    <PersonalInfoInput/>

    <Divider>About Section</Divider>
    <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true }]}>
        <Input.TextArea showCount maxLength={1000} minLength={50} placeholder='Talk about yourself, your passions, and what makes you tick.'/>
      </Form.Item>


      <SocialLinksInput/>

    </div>

  );
};

export default AboutSection;
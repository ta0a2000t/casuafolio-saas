import React from 'react';

import {Divider, Form, Input, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { inherits } from 'util';



const PersonalInfoInput: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
    <Divider>Personal Info</Divider>

    <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
    <Input placeholder='Your First Name'         count={{
          show: true,
          max: 12,
        }} />
  </Form.Item>

  <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
      <Input placeholder='Your Last Name'         count={{
          show: true,
          max: 12,
        }}/>
    </Form.Item>


    </div>

  );
};

export default PersonalInfoInput;
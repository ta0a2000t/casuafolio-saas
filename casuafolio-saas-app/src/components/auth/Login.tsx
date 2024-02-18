import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { Button } from 'antd/es/radio';



const Login: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Button> Login Page here </Button>
  );
};

export default Login;
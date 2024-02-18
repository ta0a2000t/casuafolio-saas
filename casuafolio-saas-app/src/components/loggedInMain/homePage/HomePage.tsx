import React from 'react';

import {Button, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';



const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Button>home page</Button>
        
    </div>
  );
};

export default Home;
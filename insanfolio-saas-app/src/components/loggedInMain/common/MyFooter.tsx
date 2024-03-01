import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';



const MyFooter: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Footer style={{ textAlign: 'center' }}>
    InsanFolio ©{new Date().getFullYear()} Made with ❤️ by <Link href='https://twitter.com/ta0a2000t' target='_blank'>@ta0a2000t</Link>
  </Footer>
  );
};

export default MyFooter;
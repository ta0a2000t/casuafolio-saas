import React from 'react';

import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import MyLogo from './MyLogo';
import { inherits } from 'util';





const MyHeader: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  // Apply conditional style based on isDarkMode

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (

    <Header style={{ padding: 10, background: colorBgLayout }}>
      <MyLogo isDarkMode={isDarkMode} />

    </Header>
  );
};

export default MyHeader;
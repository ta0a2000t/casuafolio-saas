import React from 'react';

import {theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import logo from '../../../logo.svg';



const MyHeader: React.FC = () => {
  const {
    token: { colorBgContainer},
  } = theme.useToken();

  return (
    
    <Header style={{ padding: 0, background: colorBgContainer }}>

        <img src={logo} className="App-logo" alt="logo" />

    </Header>
  );
};

export default MyHeader;
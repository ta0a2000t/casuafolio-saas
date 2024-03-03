import React, { useState } from 'react';

import { Layout, Menu, theme, message } from 'antd';
import Sidebar from './common/Sidebar';
import MyFooter from './common/MyFooter';
import MyHeader from './common/MyHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import ProfilePage from './accountPage/AccountPage';
import EditJourney from './editJourney/EditJourney';
import MyWebsites from './myWebsites/MyWebsites';
import ProfileForm from './editJourney/profileForm/ProfileForm';
import EditAccountModal from './common/EditAccountModal';

const { Header, Content, Footer, Sider } = Layout;


interface LoggedInMainProps {
  isDarkMode: boolean;
  children: React.ReactNode; // This prop will be used to pass down the button or any React node
}

const LoggedInMain: React.FC<LoggedInMainProps> = ({ isDarkMode, children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();



  return (
      <Layout hasSider className="layout" style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout style={{ marginLeft: 80 + 20, minHeight: '100vh', marginRight:20}}>
        <MyHeader isDarkMode={isDarkMode} userName={'ta0a2000t'}  />
        <Content style={{ padding: 12, marginTop: 12 }}>
            <Layout
              style={{
                padding: 24,
                minHeight: 220,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Layout>
          </Content>

          <MyFooter />
        </Layout>
      </Layout>
  );

};

export default LoggedInMain;



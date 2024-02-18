import React, { useState } from 'react';

import { Layout, Menu, theme } from 'antd';
import Sidebar from './common/Sidebar';
import MyFooter from './common/MyFooter';
import MyHeader from './common/MyHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import ProfilePage from './accountPage/AccountPage';
import EditJourney from './editJourney/EditJourney';
import MyWebsites from './myWebsites/MyWebsites';
import ProfileForm from './editJourney/profileForm/ProfileForm';

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
      <Layout hasSider>
        <Sidebar />
        <Layout style={{ marginLeft: 100 , minHeight: '100vh'}}>
        <MyHeader isDarkMode={isDarkMode}  />
        <Content style={{ margin: "16px", overflow: "initial" }}>

            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
            >
              {children}
            </div>
          </Content>

          <MyFooter />
        </Layout>
      </Layout>
  );

};

export default LoggedInMain;



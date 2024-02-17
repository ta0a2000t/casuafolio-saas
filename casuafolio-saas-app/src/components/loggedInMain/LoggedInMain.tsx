import React, { useState } from 'react';

import {Layout, Menu, theme } from 'antd';
import Sidebar from './common/Sidebar';
import MyFooter from './common/MyFooter';
import MyHeader from './common/MyHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import ProfilePage from './accountPage/AccountPage';
import EditJourney from './editJourney/EditJourney';
import MyWebsites from './myWebsites/MyWebsites';

const { Header, Content, Footer, Sider } = Layout;


const LoggedInMain: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <BrowserRouter>
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
          <Layout>
      <MyHeader/>
      <Content style={{ margin: '0 16px' }}>

        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {CurrentPage()}
        </div>
      </Content>

      <MyFooter/>
    </Layout>
  </Layout>
  </BrowserRouter>
  );

};

export default LoggedInMain;


function CurrentPage() {
    return (
<div>
    <Routes>
        <Route path='/homePage' element={<HomePage/>}></Route>
        <Route path='/profilePage' element={<ProfilePage/>}></Route>
        <Route path='/editJourney' element={<EditJourney/>}></Route>
        <Route path='/myWebsites' element={<MyWebsites/>}></Route>

        <Route path='signOut' element={<div>Sign Out pressed</div>}></Route>

    </Routes>
</div>
    );
}
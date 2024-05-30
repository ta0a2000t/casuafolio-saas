import React, { useState, useEffect } from 'react';
import { Layout, Spin, theme } from 'antd';
import Sidebar from './common/Sidebar';
import MyFooter from './common/MyFooter';
import MyHeader from './common/MyHeader';
import { DraftFolioData, FolioType } from 'API';

const { Header, Content, Footer, Sider } = Layout;

interface LoggedInMainProps {
  userId: string;
  isDarkMode: boolean;
  children: React.FC<{ userId: string }> | any; // Define children as a ReactElement with userId prop
  draftFolioData?: DraftFolioData ;
  folioType?: FolioType;
}

const LoggedInMain: React.FC<LoggedInMainProps> = ({ userId, isDarkMode, children: Children, draftFolioData , folioType}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log("LoggedInMain page");

    return (
      <Layout hasSider className="layout" style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout style={{ marginLeft: 80 + 5, minHeight: '100vh', marginRight: 5 }}>
          <MyHeader userId={userId} isDarkMode={isDarkMode} />
          <Content style={{ padding: 12, marginTop: 12 }}>
            <Layout
              style={{
                padding: 24,
                minHeight: 220,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {draftFolioData && <Children userId={userId} draftFolioData={draftFolioData} folioType={folioType}/>}
              {!draftFolioData && <Children userId={userId} />}

            </Layout>
          </Content>
          <MyFooter />
        </Layout>
      </Layout>
    );
  

};

export default LoggedInMain;

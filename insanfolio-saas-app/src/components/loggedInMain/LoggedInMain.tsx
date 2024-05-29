import React, { useState, useEffect } from 'react';
import { Layout, Spin, theme } from 'antd';
import Sidebar from './common/Sidebar';
import MyFooter from './common/MyFooter';
import MyHeader from './common/MyHeader';
import { getSession } from '../../services/MainService';

const { Header, Content, Footer, Sider } = Layout;

interface LoggedInMainProps {
  isDarkMode: boolean;
  children: React.FC<{ userId: string }>; // Define children as a ReactElement with userId prop
}

const LoggedInMain: React.FC<LoggedInMainProps> = ({ isDarkMode, children: Children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  console.log("LoggedInMain page");

  useEffect(() => {
    getSession().then((session) => {
      setUserId(session.userSub);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin size="large" />
      </Layout>
    );
  } else if (userId) {
    return (
      <Layout hasSider className="layout" style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout style={{ marginLeft: 80 + 20, minHeight: '100vh', marginRight: 20 }}>
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
              <Children userId={userId} /> {/* Pass userId to children */}
            </Layout>
          </Content>
          <MyFooter />
        </Layout>
      </Layout>
    );
  } else {
    return (<>AN ERROR HAS OCCURRED</>)
  }

};

export default LoggedInMain;

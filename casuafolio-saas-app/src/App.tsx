import { Button, FloatButton, theme } from 'antd';
import { ConfigProvider } from 'antd';
import React, { useState } from 'react';
import './App.css';
import LoggedInMain from './components/loggedInMain/LoggedInMain';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import ValidateUserSite from './templates/ValidateUserSite';
import ProfilePage from './components/loggedInMain/accountPage/AccountPage';
import EditJourney from './components/loggedInMain/editJourney/EditJourney';
import HomePage from './components/loggedInMain/homePage/HomePage';
import MyWebsites from './components/loggedInMain/myWebsites/MyWebsites';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;

  let loggedIn = true;

  function mainAppPage(content: React.ReactNode) {
    return (
      <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' }, algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
        {loggedIn && (<LoggedInMain isDarkMode={isDarkMode}>{content}</LoggedInMain>)}
        {!loggedIn && <Login isDarkMode={isDarkMode} />}

        <FloatButton
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={() => setIsDarkMode(!isDarkMode)}
          tooltip={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} />
      </ConfigProvider>
    );
  }

  return (



    <div className="App">

      <Routes>
        <Route path='/sites/:username' element={<ValidateUserSite />}></Route>


        <Route path='/homePage' element={mainAppPage(<HomePage />)}></Route>
        <Route path='/profilePage' element={mainAppPage(<ProfilePage />)}></Route>
        <Route path='/editJourney' element={mainAppPage(<EditJourney />)}></Route>
        <Route path='/myWebsites' element={mainAppPage(<MyWebsites />)}></Route>

        <Route path='signOut' element={<div>Sign Out pressed</div>}></Route>

        <Route path='/' element={mainAppPage(<HomePage />)}></Route>
        <Route path='/:something' element={mainAppPage(<HomePage />)}></Route>

      </Routes>

    </div>
  );
}

export default App;

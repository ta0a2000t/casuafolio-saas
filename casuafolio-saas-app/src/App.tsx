import { Button, FloatButton, theme } from 'antd';
import { ConfigProvider } from 'antd';
import React, {useState} from 'react';
import './App.css';
import LoggedInMain from './components/loggedInMain/LoggedInMain';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import MyHeader from './components/loggedInMain/common/MyHeader';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' },  algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}

    >

    <div className="App">  
    
 
      
      <LoggedInMain isDarkMode={isDarkMode} />

      <FloatButton
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={() => setIsDarkMode(!isDarkMode)}
          tooltip={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}  />     
    </div>
    </ConfigProvider>

  );
}

export default App;

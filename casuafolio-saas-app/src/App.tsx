import { Button } from 'antd';
import { ConfigProvider } from 'antd';
import React from 'react';
import './App.css';
import LoggedInMain from './components/loggedInMain/LoggedInMain';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' } }}>

    <div className="App">
      <header>

      </header>
      <LoggedInMain></LoggedInMain>
    </div>
    </ConfigProvider>

  );
}

export default App;

import { Button } from 'antd';
import { ConfigProvider } from 'antd';

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' } }}>

    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <Button type="dashed">Button</Button>

    </div>
    </ConfigProvider>

  );
}

export default App;

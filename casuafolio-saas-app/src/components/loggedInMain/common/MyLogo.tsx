import React from 'react';
import logo from '../../../logo.svg';




const MyLogo: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const logoStyle = {
        padding: 5,
        filter: isDarkMode ? 'invert(100%)' : 'none',
      };
  return (
    <img src={logo} className="App-logo" alt="logo" style={logoStyle}/>

  );
};

export default MyLogo;
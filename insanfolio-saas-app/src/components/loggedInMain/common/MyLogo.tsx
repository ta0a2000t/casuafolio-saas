import React from 'react';
import logo from 'logo.svg';




const MyLogo: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const logoStyle = {
        padding: 5,
        filter: isDarkMode ? 'invert(100%)' : 'none',
      };
  return (
    <>
        <img src={logo} alt="InsanFolio logo" style={logoStyle}/>
    </>

  );
};

export default MyLogo;
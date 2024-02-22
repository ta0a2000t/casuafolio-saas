import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ValidateUserSite from './templates/ValidateUserSite';
import ProfilePage from './components/loggedInMain/accountPage/AccountPage';
import EditJourney from './components/loggedInMain/editJourney/EditJourney';
import HomePage from './components/loggedInMain/homePage/HomePage';
import MyWebsites from './components/loggedInMain/myWebsites/MyWebsites';


// auth //////////////////////////////////////////////////////////////////////////////////////////////////
import MainAppPage from './components/MainAppPage';






function App() {



  return (
    
    <Routes>
      <Route path='/sites/:username' element={<ValidateUserSite />}></Route>


      <Route path='/homePage' element={MainAppPage({content:<HomePage />})}></Route>
      
      <Route path='/profilePage' element={MainAppPage({content:<ProfilePage />})}></Route>
      <Route path='/editJourney' element={MainAppPage({content:<EditJourney />})}></Route>
      <Route path='/myWebsites' element={MainAppPage({content:<MyWebsites />})}></Route>

      <Route path='signOut' element={<div>Sign Out pressed</div>}></Route>

      <Route path='/' element={MainAppPage({content:<HomePage />})}></Route>
      <Route path='/:something' element={MainAppPage({content:<HomePage />})}></Route>

    </Routes>
    
  );
}

export default App;

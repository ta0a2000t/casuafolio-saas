import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ValidateUserSite from './templates/ValidateUserSite';
import HomePage from './components/loggedInMain/homePage/HomePage';


// Main Pages //////////////////////////////////////////////////////////////////////////////////////////////////
import MainAppPage from './components/MainAppPage';
import LandingPage from 'components/landing/LandingPage';
import NotFound404Page from 'components/landing/NotFound404Page';
import EditFolio from 'components/loggedInMain/editFolio/EditFolio';




function App() {



  return (
    
    <Routes>
      <Route path='/sites/:username' element={<ValidateUserSite />}></Route>
      <Route path='/editFolio' element={MainAppPage({content:<EditFolio />})}></Route>


      <Route path='/homePage' element={MainAppPage({content:<HomePage />})}></Route>


      

      <Route path='' element={MainAppPage({content:<HomePage />})}></Route>
      <Route path='/:something' element={MainAppPage({content:<HomePage />})}></Route>
      <Route index element={<LandingPage/>}/>
      <Route path='*' element={<NotFound404Page/>} />

    </Routes>
    
  );
}

export default App;

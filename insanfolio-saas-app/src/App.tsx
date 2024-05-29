import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ValidateFolioSite from './templates/ValidateFolioSite';
import HomePage from './components/loggedInMain/homePage/HomePage';

// Main Pages
import MainAppPage from './components/MainAppPage';
import LandingPage from 'components/landing/LandingPage';
import NotFound404Page from 'components/landing/NotFound404Page';
import EditFolio from 'components/loggedInMain/editFolio/EditFolio';
import EditFolioLayout from 'components/loggedInMain/editFolio/EditFolioLayout';

function App() {
  console.log("App Page")

  // Initialize dark mode from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('isDarkMode');
    return saved === 'true' ? true : false;
  });

  // Use useEffect to update localStorage when isDarkMode changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    
    <Routes>
      <Route path='/404' element={<NotFound404Page/>} />

      <Route path='/folioDraft/:folioId' element={<ValidateFolioSite isPublished={false}/>}></Route>
      <Route path='/folio/:folioId' element={<ValidateFolioSite isPublished={true}/>}></Route>  

      <Route path='/editFolio' element={
        <EditFolioLayout mainContent={<MainAppPage content={<EditFolio />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
      }></Route>
      
      <Route path='/homePage' element={ <MainAppPage content={<HomePage />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> }></Route>     
      <Route path='' element={ <MainAppPage content={<HomePage />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> }></Route>
      <Route path='/:something' element={ <MainAppPage content={<HomePage />} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> }></Route>


      <Route index element={<LandingPage/>}/>
      <Route path='*' element={<NotFound404Page/>} />

    </Routes>
    
  );
}

export default App;

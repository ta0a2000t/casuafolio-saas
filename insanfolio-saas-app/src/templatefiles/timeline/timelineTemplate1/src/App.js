

import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TimelineEvent from './components/TimelineEvent';
import './font-awesome/css/font-awesome.min.css';
import About from './components/About'
import SocialIcons from './components/SocialIcons'; // adjust the import path as needed

//import {FULL_NAME , SECTION1_EVENTS, SECTION2_EVENTS, SECTION3_EVENTS} from './personalizationConstants';
//import {ABOUT_TAB_NAME, SECTION3_TAB_NAME, SECTION1_TAB_NAME, SECTION2_TAB_NAME, SECTION1_PAGE_HEADLINE, SECTION2_PAGE_HEADLINE, SECTION3_PAGE_HEADLINE} from './personalizationConstants';
import {HEADER_COLOR} from './stylingConstants';
import { getColor } from './helpers/utils';



import {getConsts} from './personalizationConstants';

function App({values}) {
  const info = getConsts(values);
  console.log(info);
  const FULL_NAME = info.FULL_NAME
  const SITE_TITLE = info.SITE_TITLE
  const META_DESCRIPTION = info.META_DESCRIPTION


  const ABOUT_TAB_NAME = info.ABOUT_TAB_NAME
  const SECTION1_TAB_NAME = info.SECTION1_TAB_NAME
  const SECTION2_TAB_NAME = info.SECTION2_TAB_NAME
  const SECTION3_TAB_NAME = info.SECTION3_TAB_NAME
  const SECTION1_PAGE_HEADLINE = info.SECTION1_PAGE_HEADLINE
  const SECTION2_PAGE_HEADLINE = info.SECTION2_PAGE_HEADLINE
  const SECTION3_PAGE_HEADLINE =info.SECTION3_PAGE_HEADLINE
  const SECTION1_EVENTS = info.SECTION1_EVENTS
  const SECTION2_EVENTS = info.SECTION2_EVENTS
  const SECTION3_EVENTS = info.SECTION3_EVENTS





  const bgColor = 'rgba(0, 0, 0, 1)';
  const theme = '';
  const [timelineEvents, setTimelineEvents] = useState([]);
  const [activeTimeline, setActiveTimeline] = useState('SECTION1'); // 'SECTION2', 'SECTION3', or 'SECTION1'
  const aboutRef = useRef(null); // to scroll to about section
  const [sectionToScroll, setSectionToScroll] = useState(null);
  const headerColor = getColor(HEADER_COLOR, 7);



  useEffect(() => {
    if (sectionToScroll) {
        if (sectionToScroll === 'about') {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionToScroll === 'timeline') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      setSectionToScroll(null);  // Resetting the state
    }
  }, [sectionToScroll]); 

  useEffect(() => {
    // Define timeline events
    const SECTION2Events = SECTION2_EVENTS;
    const SECTION3Events = SECTION3_EVENTS;
    const SECTION1Events = SECTION1_EVENTS;
    
    // Set timelineEvents based on activeTimeline
    if (activeTimeline === 'SECTION2') {
      setTimelineEvents(SECTION2Events);
    } else if (activeTimeline === 'SECTION3') {
      setTimelineEvents(SECTION3Events);
    } else if (activeTimeline === 'SECTION1') {
      setTimelineEvents(SECTION1Events);
    }
  }, [activeTimeline]);


  
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, [bgColor]);

  return (
    <div className={`App ${theme}`} style={{ backgroundColor: bgColor }}>
    
    <header className="App-header" style={{ backgroundColor: headerColor }}>
      <div className="top-left">
        <div className="Fullname">{FULL_NAME}</div>
      </div>


      <div className="center">
      <div className="TabMenu">
        
        <button 
        className={`${activeTimeline === 'SECTION1' ? 'active' : ''}`} 
          onClick={() => {
            setActiveTimeline('SECTION1');
            setSectionToScroll('timeline');
          }}
        >
          {SECTION1_TAB_NAME}
        </button>
        

        {SECTION2_TAB_NAME && (
          <button 
        className={`${activeTimeline === 'SECTION2' ? 'active' : ''}`} 
            onClick={() => {
              setActiveTimeline('SECTION2');
              setSectionToScroll('timeline');
            }}
          >
            {SECTION2_TAB_NAME}
          </button>
        )}

        {SECTION3_TAB_NAME && (
          <button 
        className={`${activeTimeline === 'SECTION3' ? 'active' : ''}`} 
            onClick={() => {
              setActiveTimeline('SECTION3');
              setSectionToScroll('timeline');
            }}
          >
            {SECTION3_TAB_NAME}
          </button>
        )}

        
        <button onClick={() => setSectionToScroll('about')}>
          {ABOUT_TAB_NAME}
        </button>
        
      </div>
    </div>


      <div className="top-right">
      <SocialIcons info={info}/>
      </div>

    </header>
      <section className="Timeline">
        <h2>{activeTimeline === 'SECTION2' ? SECTION2_PAGE_HEADLINE : activeTimeline === 'SECTION3' ? SECTION3_PAGE_HEADLINE : SECTION1_PAGE_HEADLINE}</h2>
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))}
      </section>

      <section id="about" ref={aboutRef}>
        <About info={info}/>
      </section>
    </div>


  );
}

export default App;

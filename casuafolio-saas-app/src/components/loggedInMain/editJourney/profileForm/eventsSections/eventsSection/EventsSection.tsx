import React from 'react';

import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { inherits } from 'util';
import DynamicTagInput from './DynamicTagInput';





const EventsSection: React.FC = () => {
  // Apply conditional style based on isDarkMode

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <>
    
    <DynamicTagInput tagName={'Skill'} />
    </>
  );
};

export default EventsSection;
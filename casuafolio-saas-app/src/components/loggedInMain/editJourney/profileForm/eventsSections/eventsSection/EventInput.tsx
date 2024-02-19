import React from 'react';

import { theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { inherits } from 'util';
import DynamicTagInput from './DynamicTagInput';
import GalleryInput from '../../shared/GalleryInput';





const EventInput: React.FC = () => {
  // Apply conditional style based on isDarkMode

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <>
    
    <GalleryInput galleryLabel={'Event Logo'} maxImages={1} />
        
    <DynamicTagInput tagName={'Skill'} />
    </>
  );
};

export default EventInput;
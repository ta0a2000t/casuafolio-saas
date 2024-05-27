import React from 'react';

import {Layout, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import TimelineForm from './timelineForm/TimelineForm';
import App from 'templates/timeline/timelineTemplate1/src/App'
import { GetFolioQuery } from 'API';

interface TimelineFormProps {
    folioData: GetFolioQuery;
}


const TimelineFormManagement: React.FC<TimelineFormProps> = ({folioData}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <TimelineForm formData={folioData}/>
  );
};

export default TimelineFormManagement;
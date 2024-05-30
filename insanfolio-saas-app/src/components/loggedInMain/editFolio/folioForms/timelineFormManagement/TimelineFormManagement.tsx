import React from 'react';

import {Layout, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import TimelineForm from './timelineForm/TimelineForm';
import App from 'templatefiles/timeline/timelineTemplate1/src/App'
import { DraftFolioData, GetFolioQuery } from 'API';

interface TimelineFormManagementProps {
  draftFolioData: DraftFolioData;
}


const TimelineFormManagement: React.FC<TimelineFormManagementProps> = ({draftFolioData}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <TimelineForm draftFolioData={draftFolioData}/>
  );
};

export default TimelineFormManagement;
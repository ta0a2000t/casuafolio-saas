import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';


interface TimelineFormProps {
    folioId: string;
}

const TimelineForm: React.FC<TimelineFormProps> = ({folioId}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>Timeline edit</>
  );
};

export default TimelineForm;
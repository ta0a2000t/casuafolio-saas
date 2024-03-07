import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { GetFolioQuery } from 'API';

interface ResearchFormProps {
    folioData: GetFolioQuery;
}

const ResearchForm: React.FC<ResearchFormProps> = ({folioData}) => {
    const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <></>
  );
};

export default ResearchForm;
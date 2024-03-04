import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';

interface ResearchFormProps {
    folioId: string;
}

const ResearchForm: React.FC<ResearchFormProps> = ({folioId}) => {
    const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <></>
  );
};

export default ResearchForm;
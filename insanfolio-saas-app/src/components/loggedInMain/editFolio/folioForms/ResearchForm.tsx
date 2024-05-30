import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { DraftFolioData } from 'API';

interface ResearchFormProps {
  draftFolioData: DraftFolioData;
}

const ResearchForm: React.FC<ResearchFormProps> = ({draftFolioData}) => {
    const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>reserach form should be here</>
  );
};

export default ResearchForm;
import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { DraftFolioData } from 'API';


interface MenuFormProps {
  draftFolioData: DraftFolioData;
}
const MenuForm: React.FC<MenuFormProps> = ({draftFolioData}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>menu form should be here</>
  );
};

export default MenuForm;
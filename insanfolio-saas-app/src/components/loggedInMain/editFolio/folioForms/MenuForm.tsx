import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { GetFolioQuery } from 'API';


interface MenuFormProps {
  folioData: GetFolioQuery;
}
const MenuForm: React.FC<MenuFormProps> = ({folioData}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>menu form should be here</>
  );
};

export default MenuForm;
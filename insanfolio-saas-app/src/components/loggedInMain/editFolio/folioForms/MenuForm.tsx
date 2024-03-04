import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';


interface MenuFormProps {
    folioId: string;
}
const MenuForm: React.FC<MenuFormProps> = ({folioId}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <></>
  );
};

export default MenuForm;
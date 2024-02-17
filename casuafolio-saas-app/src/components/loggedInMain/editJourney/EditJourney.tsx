// has a big button introducing to filling out the form. this then hides the sidebar and navigates to the form

import React from 'react';

import {theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';



const EditJourney: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
        EditJourney page
    </div>
  );
};

export default EditJourney;
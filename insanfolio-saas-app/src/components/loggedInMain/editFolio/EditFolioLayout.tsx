import React from 'react';
import { Row, Col } from 'antd';
import EditFolio from './EditFolio';
import LoggedInMain from '../LoggedInMain';

interface EditFolioLayoutProps {
  userId: string;
  isDarkMode: boolean;
  children: React.FC<{ userId: string }>; // Define children as a ReactElement with userId prop
}

const EditFolioLayout: React.FC<EditFolioLayoutProps> = ({ userId, isDarkMode, children: Children }) => {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col xs={24} md={12}>
        <LoggedInMain userId={userId} isDarkMode={isDarkMode} children={Children}/>
      </Col>
      <Col xs={0} md={12} style={{ position: 'fixed', right: 0, top: 0, width: '50%', height: '100vh' }}>
        <iframe 
          src="http://localhost:3000/folioDraft"
          title="Folio Draft"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        ></iframe>
      </Col>
    </Row>
  );
};

export default EditFolioLayout;

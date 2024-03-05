import React, { ReactNode } from 'react';
import { Row, Col } from 'antd'; // Assuming you're using Ant Design for layout

interface EditFolioLayoutProps {
  mainContent: ReactNode;
}

const EditFolioLayout: React.FC<EditFolioLayoutProps> = ({ mainContent }) => {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col xs={24} md={12} style={{ }}>
        {mainContent}
      </Col>
      <Col xs={0} md={12} style={{ position: 'fixed', right: 0, top: 0, width: '50%', height: '100vh' }}>
        <iframe 
          src="http://localhost:3000/folioDraft/weji"
          title="Folio Draft"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        ></iframe>
      </Col>
    </Row>
  );
};

export default EditFolioLayout;

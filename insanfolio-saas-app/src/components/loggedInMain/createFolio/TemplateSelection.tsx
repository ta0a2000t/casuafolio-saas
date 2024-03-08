// TemplateSelection.tsx

import React from 'react';
import { Card, Col, Row , theme} from 'antd';
import { FolioType } from 'API'; // Adjust the import path according to where FolioType is defined

interface TemplateSelectionProps {
  highlightedFolioType: FolioType | null;
  setHighlightedFolioType: (folioType: FolioType | null) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({ highlightedFolioType, setHighlightedFolioType }) => {
  const highlight = (folioType: FolioType) => {
    setHighlightedFolioType(folioType);
  };

  const {
    token: {colorPrimary },
  } = theme.useToken();

  const cardBorderWidth = 3;

  return (
    <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
      <Col span={8}>
        <Card 
          hoverable 
          style={{ borderWidth:cardBorderWidth, borderColor: highlightedFolioType === FolioType.TIMELINE ? colorPrimary : undefined }} 
          cover={<img alt="template" src="https://picsum.photos/200" style={{padding:cardBorderWidth, pointerEvents:'none'}} />} 
          onClick={() => highlight(FolioType.TIMELINE)}
        >
          <Card.Meta title="Timeline" description="Show your personal growth and journey." />
        </Card>
      </Col>
      <Col span={8}>
        <Card 
          hoverable 
          style={{ borderWidth:cardBorderWidth, borderColor: highlightedFolioType === FolioType.RESEARCH ? colorPrimary : undefined }} 
          cover={<img alt="template" src="https://picsum.photos/200" style={{padding:cardBorderWidth, pointerEvents:'none'}}/>} 
          onClick={() => highlight(FolioType.RESEARCH)}
        >
          <Card.Meta title="Research" description="Share details about your research, lab, students, publications, and more." />
        </Card>
      </Col>
    </Row>
  );
};

export default TemplateSelection;

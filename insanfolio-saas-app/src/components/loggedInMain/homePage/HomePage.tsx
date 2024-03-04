import React, { useState } from 'react';
import { Button, Card, Modal, Row, Col, Tooltip, Input, Select, DatePicker } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined, PlusOutlined, VideoCameraOutlined } from '@ant-design/icons';
import MyWebsites from './MyWebsites';


const { Option } = Select;

const Home: React.FC = () => {
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);


  const showProjectModal = () => {
    setIsProjectModalVisible(true);
  };

  const handleProjectOk = () => {
    // Example: Add new project to projects array
    // You should include form for project creation and handle form submission here
    setIsProjectModalVisible(false);
  };

  const handleProjectCancel = () => {
    setIsProjectModalVisible(false);
  };



  return (
    <div style={{ padding: '24px' }}>
      <Tooltip title="Watch introduction video">
        <Button shape="circle" icon={<VideoCameraOutlined />} href='https://www.youtube.com/watch?v=MFQRombmdxw' target='_blank' />
      </Tooltip>


      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <Button type="primary" size="large" onClick={showProjectModal}>
          Create New Project
        </Button>
      </div>

      <Modal title="Create New Project" open={isProjectModalVisible} onOk={handleProjectOk} onCancel={handleProjectCancel}>
        {/* Implement your form for creating a new project here */}
        <p>Select a template and add a project name.</p>
        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {/* Example template categories */}
        <Col span={8}>
          <Card hoverable cover={<img alt="example" src="https://fastly.picsum.photos/id/281/200/300.jpg?hmac=KCN8F5QTgxHdeQxLpZ5BOuUEVQEp8jAedlLSRERW7CY" />}>
            <Card.Meta title="Personal Portfolio" description="A brief description of this category." />
          </Card>
        </Col>
        {/* Repeat for other categories */}
      </Row>
      </Modal>

      <MyWebsites/>


    </div>
  );
};

export default Home;

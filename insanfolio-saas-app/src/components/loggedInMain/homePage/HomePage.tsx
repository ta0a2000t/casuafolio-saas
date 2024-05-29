import React, { useState } from 'react';
import { Button, Card, Modal, Row, Col, Tooltip, Input, Select, DatePicker, Layout, Space } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined, PlusOutlined, VideoCameraOutlined } from '@ant-design/icons';
import MyWebsites from './MyWebsites';
import CreateFolioModal from '../createFolio/CreateFolioModal';


const { Option } = Select;

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log("Home page ")

  const showProjectModal = () => {
    setIsModalVisible(true);
  };



  return (
    <div style={{ padding: '24px' }}>

      <Space >

      <Tooltip title="Watch introduction video">
        <Button shape="circle" icon={<VideoCameraOutlined />} href='https://www.youtube.com/watch?v=MFQRombmdxw' target='_blank' />
      </Tooltip>


      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <Button type="primary" size="large" onClick={showProjectModal}>
          Create New Project
        </Button>
      </div>

      <CreateFolioModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />

      </Space>

      <MyWebsites/>


    </div>
  );
};

export default Home;

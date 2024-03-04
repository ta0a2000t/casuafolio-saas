import React, { useState } from 'react';
import {
    HomeOutlined,
  CloudOutlined,
  UserOutlined,
  EditOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd/es';
import { Layout, Menu, Modal } from 'antd/es';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'aws-amplify/auth';
import SignOutConfirmationModal from './SignOutConfirmationModal';


const { Sider } = Layout;

const sidebarTabs = ["Home", "Account",  "Edit Journey", "My Websites", "Sign Out"]
const sidebarKeys = ["/homePage", "/accountPage", "/editJourney", "/myWebsites", "signOut"]
const items: MenuProps['items'] = [
    HomeOutlined,
    UserOutlined,
    EditOutlined,
    CloudOutlined,
    PoweroffOutlined
  ].map((icon, index) => ({
    key: sidebarKeys[index],
    icon: React.createElement(icon),
    label: sidebarTabs[index],
    danger: index === sidebarKeys.length - 1
  }));









  const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Hook to access the current location
  
    // Find the key that matches the current pathname
    const currentKey = sidebarKeys.find(key => location.pathname.includes(key)) || sidebarKeys[0];
  

    const showSignOutModal = () => setIsModalVisible(true);
    const handleCancel = () => setIsModalVisible(false);
    const handleConfirm = () => {
      setIsModalVisible(false);
      navigate('/'); // Adjust navigation as needed
    };




    return (
      <>
      <Sider theme="light" collapsed={true}

      style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>


        <Menu
          theme="light"
          onClick={({ key }) => {
            if (key === "signOut") {
              showSignOutModal();
            } else {
              navigate(key);
            }
          }}
          defaultSelectedKeys={[currentKey]} // Set the defaultSelectedKeys based on the current location
          mode="inline"
          items={items}

        />
      </Sider>
            <SignOutConfirmationModal
            isVisible={isModalVisible}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
    </>
    );
  };
  
  export default Sidebar;
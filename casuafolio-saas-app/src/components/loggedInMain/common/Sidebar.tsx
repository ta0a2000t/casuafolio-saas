import React, { useState } from 'react';
import {
    HomeOutlined,
  CloudOutlined,
  UserOutlined,
  EditOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd/es';
import { Layout, Menu } from 'antd/es';
import { useNavigate } from 'react-router-dom';


const { Sider } = Layout;

const sidebarTabs = ["Home", "Profile",  "Edit Journey", "My Websites", "Sign Out"]
const sidebarKeys = ["/homePage", "/profilePage", "/editJourney", "/myWebsites", "signOut"]
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
    const navigate =  useNavigate();
  return (
    <Sider theme='dark' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
    >
    

    <Menu theme='dark' onClick={({key}) =>{
      if(key === "signOut") {
        console.log("pressed sign out")
        navigate(key)
      } else {
        navigate(key);
      }
    }}
     defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>


  );
};

export default Sidebar;
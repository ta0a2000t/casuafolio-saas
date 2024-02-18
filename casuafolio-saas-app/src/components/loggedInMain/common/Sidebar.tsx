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
import { useLocation, useNavigate } from 'react-router-dom';


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
    const navigate = useNavigate();
    const location = useLocation(); // Hook to access the current location
  
    // Find the key that matches the current pathname
    const currentKey = sidebarKeys.find(key => location.pathname.includes(key)) || sidebarKeys[0];
  
    return (
      <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu
          theme="dark"
          onClick={({ key }) => {
            if (key === "signOut") {
              console.log("pressed sign out");
              // handle sign out logic here
            } else {
              navigate(key);
            }
          }}
          defaultSelectedKeys={[currentKey]} // Set the defaultSelectedKeys based on the current location
          mode="inline"
          items={items}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
        />
      </Sider>
    );
  };
  
  export default Sidebar;
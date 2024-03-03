import React, {useState} from 'react';
import { Layout, Avatar, Typography, Menu, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MyLogo from './MyLogo';
import EditAccountModal from './EditAccountModal';

const { Header } = Layout;
const { Text } = Typography;

interface MyHeaderProps {
  isDarkMode: boolean;
  userName: string;
  avatarUrl?: string;

}

const MyHeader: React.FC<MyHeaderProps> = ({
  isDarkMode,
  userName,
  avatarUrl,
}) => {




  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };

  return (
    <div style={{paddingTop: 50,}}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  background: 'none' }}>
        <div style={{ width: '33.333%' }}>
        <EditAccountModal userName={userName} avatarUrl={avatarUrl} isDarkMode={false} />

        </div>
        
        <div style={{ textAlign: 'center', width: '33.333%' }}>
          <MyLogo isDarkMode={isDarkMode} />
        </div>

        <div style={{ width: '33.333%', textAlign: 'right' }}>
          {/* Placeholder if you need right-aligned content in the header, like a menu or actions */}
        </div>
      </Header>
      </div>
  );
};

export default MyHeader;

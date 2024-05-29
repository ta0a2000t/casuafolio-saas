import React, {useState, useEffect} from 'react';
import { Layout, Avatar, Typography, Menu, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MyLogo from './MyLogo';
import EditAccountModal from './EditAccountModal';
import {getSession} from '../../../services/MainService';
import { fetchUserService } from 'services/userServices';

const { Header } = Layout;
const { Text } = Typography;


interface MyHeaderProps {
  isDarkMode: boolean;
  avatarUrl?: string;

}

const MyHeader: React.FC<MyHeaderProps> = ({
  isDarkMode,
  avatarUrl,
}) => {



  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const EMPTYSTRING = "EMPTYSTRING";
  const showModal = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    getSession().then((session) => {
      setUserId(session.userSub);
    });
  }, []);
  
  useEffect(() => {
    fetchUserService(userId || EMPTYSTRING).then((session) => {
      setUserName(session?.username);
      setFirstName(session?.firstName);
      //session?.picture  TODO: add picture of user in the header
    });
  }, []);

  return (
    <div style={{paddingTop: 50,}}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  background: 'none' }}>
        <div style={{ width: '33.333%' }}>
        <EditAccountModal firstName={firstName || EMPTYSTRING} avatarUrl={avatarUrl} isDarkMode={false} userId={userId || EMPTYSTRING} />

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

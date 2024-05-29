import React, {useState, useEffect} from 'react';
import { Layout,Spin, Avatar, Typography, Menu, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MyLogo from './MyLogo';
import EditAccountModal from './EditAccountModal';
import { fetchUserService, subscribeToUserUpdate } from 'services/userServices';
import {useNavigate} from 'react-router-dom';

const { Header } = Layout;
const { Text } = Typography;


interface MyHeaderProps {
  userId: string;
  isDarkMode: boolean;
  avatarUrl?: string;

}

const MyHeader: React.FC<MyHeaderProps> = ({
  userId,
  isDarkMode,
  avatarUrl,
}) => {



  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const showModal = () => {
    setOpenModal(true);
  };
  const navigate = useNavigate();



  
  useEffect(() => {
    fetchUserService(userId).then((session) => {
      setUserName(session?.username);
      setFirstName(session?.firstName);
      //session?.picture  TODO: add picture of user in the header
    });
  }, [userId]);



  useEffect(() => {
    const updateSub = subscribeToUserUpdate(userId, (updatedUser) => {
      setUserName(updatedUser.username);
      setFirstName(updatedUser.firstName);
    });

    return () => {
      updateSub.unsubscribe();
    };
  }, [navigate, userId]);
  


  return (
    <div style={{paddingTop: 50,}}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',  background: 'none' }}>
        <div style={{ width: '33.333%' }}>
          {!firstName && (<Spin />)}
          {firstName && (<EditAccountModal firstName={firstName} avatarUrl={avatarUrl} isDarkMode={false} userId={userId} />)}
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

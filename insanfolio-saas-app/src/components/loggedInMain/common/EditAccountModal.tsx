import { ExclamationCircleFilled } from '@ant-design/icons';
import { Avatar, Button,Typography, Modal, Space, message} from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;





interface MyEditAccoumtModalProps {
    isDarkMode: boolean;
    userName: string;
    avatarUrl?: string;
  
  }

const EditAccoumtModal: React.FC<MyEditAccoumtModalProps> = ({isDarkMode, userName, avatarUrl}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [messageApi, contextHolder] = message.useMessage();

  const showSucceedMessage = () => {
    messageApi.success('Updated Successfully');
  };
    const showFailMessage = (err: string) => {
    messageApi.error(err);
    };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setModalText('Saving...');

    new Promise((resolve) => {
        setTimeout(() => resolve(null), 3000);
      })
     .then(() => {
          setOpen(false);
          setConfirmLoading(false);
          showSucceedMessage();
          console.log('Saved successfully');

        }).catch((err) => showFailMessage(err));
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setModalText('Content of the modal');

    setOpen(false);
  };


  return (
    <>
    {contextHolder}
        <>
          <Avatar src={avatarUrl} icon={!avatarUrl ? <UserOutlined /> : undefined} onClick={showModal} style={{ cursor: 'pointer' }} />
          <Text strong style={{ marginLeft: 12, cursor: 'pointer' }}  onClick={showModal} >{userName}</Text>
        </>

      <Modal
        title="Edit Account"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default EditAccoumtModal;
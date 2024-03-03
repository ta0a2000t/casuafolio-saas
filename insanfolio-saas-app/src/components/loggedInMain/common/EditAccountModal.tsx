import React, { useState } from 'react';
import { Avatar, Button, Typography, Modal, message, Form, Input, Upload, UploadProps } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import GalleryInput from '../editJourney/profileForm/shared/GalleryInput';


const { Text } = Typography;

// Define the types for the form values
interface FormValues {
  firstName: string;
  email: string;
  username: string;
  picture?: File[];
}

interface MyEditAccountModalProps {
  isDarkMode: boolean;
  userName: string;
  avatarUrl?: string;
}

const EditAccountModal: React.FC<MyEditAccountModalProps> = ({ isDarkMode, userName, avatarUrl }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

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
    form
      .validateFields()
      .then((values) => {
        setConfirmLoading(true);
        // Simulate a server request
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
          showSucceedMessage();
          console.log('Saved successfully', values);
          // Here you would actually handle the form submission,
          // for example sending the data to a server
        }, 3000);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
        setConfirmLoading(false);
      });
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


  return (
    <>
      {contextHolder}
      <>
        <Avatar src={avatarUrl} icon={!avatarUrl ? <UserOutlined /> : undefined} onClick={showModal} style={{ cursor: 'pointer' }} />
        <Text strong style={{ marginLeft: 12, cursor: 'pointer' }} onClick={showModal}>{userName}</Text>
      </>

      <Modal
        title="Edit Account"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        
      >
        <Form
          form={form}
          name="edit_profile"
          onFinish={handleOk} // Changed to handleOk to trigger form validation on modal OK
          layout="vertical"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="avatar"
            label="Avatar"
            valuePropName="value"
            getValueFromEvent={(e) => e}
          >
            <GalleryInput galleryLabel={''} maxImages={1} formPath={["avatar"]} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditAccountModal;

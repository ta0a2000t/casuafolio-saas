import React, { useState } from 'react';
import { Avatar, Button, Typography, Modal, message, Form, Input, Upload, UploadProps, Spin } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import GalleryInput from '../editFolio/folioForms/timelineFormManagement/timelineForm/shared/GalleryInput';
import { fetchUserService, updateUserService } from 'services/userServices';
import { LoadingOutlined } from '@ant-design/icons';


const { Text } = Typography;

// Define the types for the form values
interface FormValues {
  firstName: string;
  username: string;
  picture?: File[];
}

interface MyEditAccountModalProps {
  isDarkMode: boolean;
  firstName: string;
  avatarUrl?: string;
  userId: string;
}
//const userId = 'c78755bb-82a9-4cba-8888-b1cbaaf9df42'; // Use the actual user ID

const EditAccountModal: React.FC<MyEditAccountModalProps> = ({ isDarkMode,firstName, avatarUrl, userId }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const showSucceedMessage = () => {
    messageApi.success('Updated Successfully');
  };

  const showFailMessage = (err: string) => {
    messageApi.error(err);
  };

  const showModal = async () => {
    setOpen(true);
    try {
      const userData = await fetchUserService(userId);
  
      if (userData) {
        const formValues = {
          firstName: userData.firstName,
          email: userData.email,
          username: userData.username,
          // Adjust this part based on how your GalleryInput expects the picture value
          picture: userData.picture ? userData.picture : undefined,
        } as FormValues;
  
        form.setFieldsValue(formValues);
        setConfirmLoading(false);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  


  const handleOk = () => {
    form.validateFields().then(async (values) => {
      setConfirmLoading(true);
      try {
        // Assuming values includes all fields from the form, exclude id and email from update
        const { firstName, username, picture } = values as FormValues;
        await updateUserService({
          id: userId, 
          firstName,
          username,
          //picture,
        });
        showSucceedMessage();
      } catch (error) {
        console.error('Error updating user:', error);
        showFailMessage('Failed to update user.');
      } finally {
        setOpen(false);
        setConfirmLoading(false);
      }
    }).catch((info) => {
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
        <Text strong style={{ marginLeft: 12, cursor: 'pointer' }} onClick={showModal}>{firstName}</Text>
      </>

      <Modal
        title="Edit Account"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        
      >
        {confirmLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
          </div>
        ) : (
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
            <Input placeholder="Email" disabled={true}/>
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" disabled={true} />
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
        )}
  



      </Modal>
    </>
  );
};

export default EditAccountModal;

// has a big button introducing to filling out the form. this then hides the sidebar and navigates to the form
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProfileForm from './profileForm/ProfileForm';
import ProfilePage from '../accountPage/AccountPage';
import HomePage from '../homePage/HomePage';
import MyWebsites from '../myWebsites/MyWebsites';


const EditJourney: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activateForm, setActivateForm] = useState<boolean>(false); // Added this line
  const navigate = useNavigate();

  const enterLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setActivateForm(true); // Update the state to show ProfileForm
    }, 1000);
  };

  return (
    <div>
      {!activateForm && ( // Show button only if activateForm is false
        <Button
          type="primary"
          icon={<EditOutlined />}
          loading={loading}
          onClick={enterLoading}
        >
          Start Editing
        </Button>
      )}

      {activateForm && <ProfileForm />} 
    </div> //  Show ProfileForm if activateForm is true
  );
};

export default EditJourney;
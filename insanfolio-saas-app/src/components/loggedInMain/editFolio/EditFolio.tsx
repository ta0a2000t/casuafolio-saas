// has a big button introducing to filling out the form. this then hides the sidebar and navigates to the form
import React, { useState } from 'react';
import { Button, Space, Spin } from 'antd';
import { EditOutlined, LoadingOutlined } from '@ant-design/icons';

import {useLocation} from 'react-router-dom';
import MenuForm from './folioForms/MenuForm';
import ResearchForm from './folioForms/ResearchForm';
import TimelineForm from './folioForms/timelineFormManagement/TimelineFormManagement';


const EditFolio: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activateForm, setActivateForm] = useState<boolean>(true); // Added this line
  const location = useLocation();

  const folioType = location.state.type;
  const folioId = location.state.folioId;

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
      <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
      )}

      {activateForm && folioType === "Timeline" && <TimelineForm folioId={folioId} />} 
      {activateForm && folioType === "Menu" && <MenuForm folioId={folioId} />} 
      {activateForm && folioType === "Research" && <ResearchForm folioId={folioId} />} 

    </div> 
  );
};

export default EditFolio;
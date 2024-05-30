import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useLocation } from 'react-router-dom';
import MenuForm from './folioForms/MenuForm';
import ResearchForm from './folioForms/ResearchForm';
import TimelineFormManagement from './folioForms/timelineFormManagement/TimelineFormManagement';
import { fetchFolioService } from 'services/folioServices';
import { DraftFolioData, FolioType, GetDraftFolioDataQuery, GetFolioQuery } from 'API';
import { useNavigate } from 'react-router-dom';
import { fetchDraftFolioDataService } from 'services/draftFolioDataServices';

const EditFolio: React.FC<{userId: string, draftFolioData:DraftFolioData, folioType:FolioType}> = ({userId, draftFolioData, folioType}) => {

  const location = useLocation();
  const navigate = useNavigate();
  console.log({userId, draftFolioData, folioType})


  return (
    <div>

      {draftFolioData && folioType === FolioType.TIMELINE && (
        <TimelineFormManagement draftFolioData={draftFolioData} />
      )}
      {draftFolioData && folioType === FolioType.RESTAURANT && (
        <MenuForm draftFolioData={draftFolioData} />
      )}
      {draftFolioData && folioType === FolioType.RESEARCH && (
        <ResearchForm draftFolioData={draftFolioData} />
      )}
    </div>
  );
};

export default EditFolio;

import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import MenuForm from './folioForms/MenuForm';
import ResearchForm from './folioForms/ResearchForm';
import TimelineFormManagement from './folioForms/timelineFormManagement/TimelineFormManagement';
import { fetchFolioService } from 'services/folioServices';
import { FolioType, GetFolioQuery } from 'API';
import { useNavigate } from 'react-router-dom';

const EditFolio: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activateForm, setActivateForm] = useState<boolean>(false);
  const [folioData, setFolioData] = useState<GetFolioQuery | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract folioType and folioId from the location state
  const folioType = location.state?.type as FolioType;
  const folioId = location.state?.folioId as string;

  // Check for undefined folioType or folioId and navigate if necessary
  useEffect(() => {
    if (folioType === undefined || folioId === undefined) {
      navigate("/404");
    }
  }, [folioType, folioId, navigate]); // Depend only on folioType and folioId to control navigation

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchFolioService(folioId);
        setFolioData(data);
        setActivateForm(true);
        console.log(!loading, activateForm, folioData , folioType === FolioType.TIMELINE)
        console.log("THIS SHOULD RUN ONCE", folioType)
      } catch (error) {
        console.error('Failed to fetch folio data:', error);
        navigate("/404")
      } finally {
        setLoading(false);
      }
    };

    // Ensure loadData is called only when folioId is defined
    if (folioId) {
      loadData();
    }
  }, [folioId]); // Remove navigate from the dependencies to prevent re-triggering due to navigation


  return (
    <div>
      {loading && <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />}

      {!loading && activateForm && folioData && folioType === FolioType.TIMELINE && (
        <TimelineFormManagement folioData={folioData} />
      )}
      {!loading && activateForm && folioData && folioType === FolioType.RESTAURANT && (
        <MenuForm folioData={folioData} />
      )}
      {!loading && activateForm && folioData && folioType === FolioType.RESEARCH && (
        <ResearchForm folioData={folioData} />
      )}
    </div>
  );
};

export default EditFolio;

import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import MenuForm from './folioForms/MenuForm';
import ResearchForm from './folioForms/ResearchForm';
import TimelineFormManagement from './folioForms/timelineFormManagement/TimelineFormManagement';
import { fetchFolioService } from 'services/folioServices';
import { FolioType, GetFolioQuery } from 'API';

const EditFolio: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activateForm, setActivateForm] = useState<boolean>(false);
  const [folioData, setFolioData] = useState<GetFolioQuery | null>(null);
  const location = useLocation();

  // Extract folioType and folioId outside of useEffect to make them accessible throughout the component
  const folioType = location.state?.type as FolioType;
  const folioId = location.state?.folioId as string;

  useEffect(() => {
    // No need to extract folioType and folioId here again since they're already available in the component scope

    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchFolioService(folioId);
        setFolioData(data);
        setActivateForm(true);
      } catch (error) {
        console.error('Failed to fetch folio data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (folioId) {
      loadData();
    }
  }, [folioId]); // Depend on folioId to re-fetch if it changes

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

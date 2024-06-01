import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FolioSite from './FolioSite';
import { FolioNumber, FolioType } from 'API';
import { fetchDraftFolioDataService } from 'services/draftFolioDataServices';
import { fetchPublishedFolioDataService } from 'services/publishedFolioDataServices';
import { ConfigProvider, Layout, Spin, theme } from 'antd';

interface ValidateFolioSiteProps {
  isPublished: boolean;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const ValidateFolioSite: React.FC<ValidateFolioSiteProps> = ({ isPublished, isDarkMode, setIsDarkMode }) => {
  const [customTemplate, setCustomTemplate] = useState<string | undefined | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const folioDataId = searchParams.get('folioDataId') as string;
  const folioType = searchParams.get('folioType') as FolioType;
  const folioNumber = searchParams.get('folioNumber') as FolioNumber;
  const isDraft = searchParams.get('isDraft') === "true";

  useEffect(() => {
    if (searchParams.get('isDraft') !== "true" && searchParams.get('isDraft') !== "false") {
      console.error('Invalid folioData: isDraft', isDraft);
      navigate("/404");
    }

    if (!folioDataId || !folioType || !folioNumber || isDraft === undefined) {
      console.error('Invalid folioData');
      navigate("/404");
    }
  }, [folioDataId, folioNumber, folioType, isDraft, navigate, searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isDraft) {
          const draftData = await fetchDraftFolioDataService(folioDataId);
          if (!draftData || !draftData.getDraftFolioData) {
            navigate("/404");
            return;
          }
          setCustomTemplate(draftData.getDraftFolioData.customTemplate);
        } else {
          const publishedData = await fetchPublishedFolioDataService(folioDataId);
          if (!publishedData || !publishedData.getPublishedFolioData) {
            navigate("/404");
            return;
          }
          setCustomTemplate(publishedData.getPublishedFolioData.customTemplate);
        }
      } catch (error) {
        console.error('Error fetching folio data:', error);
        navigate("/404");
      }
    };

    fetchData();
  }, [folioDataId, isDraft, navigate]);

  const { defaultAlgorithm, darkAlgorithm } = theme;


  if (typeof customTemplate === 'string') {
    return (

      <FolioSite values={JSON.parse(customTemplate)} folioType={folioType} folioNumber={folioNumber} />
    );
  } else {
    return (        
      <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' }, algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
        <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin size="large" />
        </Layout>
      </ConfigProvider>
    );
  }
};

export default ValidateFolioSite;

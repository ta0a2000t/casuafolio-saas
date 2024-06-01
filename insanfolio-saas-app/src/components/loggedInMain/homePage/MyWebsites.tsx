import React, { useState, useEffect } from 'react';
import { List, Popconfirm, Space, Tooltip, message } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined, EditOutlined, BarChartOutlined, CloudUploadOutlined, CloudDownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import { deleteFolioService, fetchFoliosService, subscribeToFolioCreation, subscribeToFolioDeletion, subscribeToFolioUpdate, updateFolioService } from 'services/folioServices';
import { CreatePublishedFolioDataInput, Folio, FolioNumber, FolioType, ListFoliosQuery, UpdateFolioInput } from 'API';
import FolioCard from '../editFolio/FolioCard';
import { createPublishedFolioDataService, deletePublishedFolioDataService } from 'services/publishedFolioDataServices';
import { deleteDraftFolioDataService, fetchDraftFolioDataService } from 'services/draftFolioDataServices';


const MyWebsites: React.FC<{userId: string;}> = ({userId}) => {

  const [folios, setFolios] = useState<Folio[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();


  useEffect(() => {
    const initFolios = async () => {
      try {
        setLoading(true);
        const response: ListFoliosQuery = await fetchFoliosService();
        if (response.listFolios?.items) {
          const fetchedFolios: Folio[] = response.listFolios.items.filter((item): item is Folio => item !== null);
          setFolios(fetchedFolios);
        }
      } catch (error) {
        console.error('Failed to fetch folios', error);
      } finally {
        setLoading(false);
      }
    };

    initFolios();

  }, [navigate, userId]);


  
  // Implement the functions for actions
  const handleEdit = (folioId: string, folioType: FolioType, folioNumber: FolioNumber) => {/* Implementation */
    navigate('/editFolio',{state:{id:folioId, folioType: folioType, folioId: folioId, folioNumber: folioNumber}});
    };
  const handleDelete = (folioId: string) => {
    deleteFolioService(folioId).then((folio) => {
      if (folio.deleteFolio.folioDraftDataId) {
        deleteDraftFolioDataService(folio.deleteFolio.folioDraftDataId);
      }

      if (folio.deleteFolio.folioPublishedDataId) {
        deletePublishedFolioDataService(folio.deleteFolio.folioPublishedDataId);
      }

      setFolios(prevfolios => prevfolios.filter(folio => folio.id !== folioId));
    })
  };

  const handleViewAnalytics = (folioId: string) => {/* Implementation */};

  
  

  return (
    <>
    {contextHolder}
    <List
    loading={loading}
  itemLayout="vertical"
  size="large"
  pagination={{ pageSize: 3 }}
  dataSource={folios}
  renderItem={folio => (
    <FolioCard
      folio={folio}
      handleEdit={(theIdOfFolio) => handleEdit(theIdOfFolio, folio.folioType, folio.folioNumber)}
      handleViewAnalytics={handleViewAnalytics}
      handleDelete={handleDelete} />
  )}
/>
</>

  );
};

export default MyWebsites;
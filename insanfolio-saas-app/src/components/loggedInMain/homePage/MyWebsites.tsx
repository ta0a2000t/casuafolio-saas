import React, { useState, useEffect } from 'react';
import { List, Popconfirm, Space, Tooltip } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined, EditOutlined, BarChartOutlined, CloudUploadOutlined, CloudDownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';
import { deleteFolioService, fetchFoliosService, subscribeToFolioCreation, subscribeToFolioDeletion, subscribeToFolioUpdate, updateFolioService } from 'services/folioServices';
import { CreatePublishedFolioDataInput, Folio, FolioType, ListFoliosQuery, UpdateFolioInput } from 'API';
import FolioCard from '../editFolio/FolioCard';
import { createPublishedFolioDataService, deletePublishedFolioDataService } from 'services/publishedFolioDataServices';


const MyWebsites: React.FC = () => {
  const [folios, setFolios] = useState<Folio[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const owner = "c78755bb-82a9-4cba-8888-b1cbaaf9df42"; // Owner/user identifier

    const initFolios = async () => {
      try {
        setLoading(true);
        // Fetch folios without filters for simplicity; adjust as needed
        const response: ListFoliosQuery = await fetchFoliosService(); // Assuming fetchFoliosService correctly handles fetching
        if (response.listFolios?.items) {
          // Now we're properly filtering Folio items, not confusing it with FolioType
          const fetchedFolios: Folio[] = response.listFolios.items.filter((item): item is Folio => item !== null);
          setFolios(fetchedFolios);
        }
      } catch (error) {
        console.error("Failed to fetch folios", error);
      } finally {
        setLoading(false);
      }
    };

    initFolios();

  const createSub = subscribeToFolioCreation(owner, (newFolio) => {
    setFolios(prevFolios => [...prevFolios, newFolio]);
  });
  
  const updateSub = subscribeToFolioUpdate(owner, (updatedFolio) => {
    setFolios(prevFolios => prevFolios.map(folio => folio.id === updatedFolio.id ? updatedFolio : folio));
  });

  const deleteSub = subscribeToFolioDeletion(owner, (deletedFolioId) => {
    setFolios(prevFolios => prevFolios.filter(folio => folio.id !== deletedFolioId));
  });


    // Cleanup subscriptions when component unmounts
    return () => {
      createSub.unsubscribe();
      updateSub.unsubscribe();
      deleteSub.unsubscribe();
    };
  }, [navigate]);


  
  // Implement the functions for actions
  const handleEdit = (folioId: string) => {/* Implementation */
    navigate('/editFolio',{state:{id:1,type: 'Timeline', folioId: folioId}});
    };
  const handleDelete = (folioId: string) => {
    deleteFolioService(folioId).then(() => {
      setFolios(prevfolios => prevfolios.filter(folio => folio.id !== folioId));
    })
  };

  const handleViewAnalytics = (folioId: string) => {/* Implementation */};
  const togglePublishStatus = async (folioId: string) => {
    const folioToUpdate = folios.find(folio => folio.id === folioId);
    if (!folioToUpdate) return; // Early exit if the folio is not found
  
    try {
      setLoading(true);
  
      if (folioToUpdate.folioPublishedDataId) {
        // The folio is currently published, prepare to unpublish it
        await deletePublishedFolioDataService(folioToUpdate.folioPublishedDataId);
        // Update the folio to remove the reference to the deleted published data ID
        const updateInput = {
          id: folioId,
          folioPublishedDataId: null, // Clearing the publishedDataId to unpublish
        };
        await updateFolioService(updateInput);
      } else {
        // The folio is not currently published, prepare to publish it
        // Create new published data from draft data (assuming backend handles actual data copy)
        const publishedData = await createPublishedFolioDataService({
          // Populate with necessary data from folioToUpdate.draftData
          customData: folioToUpdate.draftData?.customData,
          // Add other necessary fields
        }as CreatePublishedFolioDataInput);
        // Update the folio to reference the new published data ID
        const updateInput = {
          id: folioId,
          folioPublishedDataId: publishedData.createPublishedFolioData.id, // Use the new published data ID
        };
        await updateFolioService(updateInput);
      }
  
      // Refresh or update local folio data to reflect changes
      // This may involve re-fetching folios or updating the state directly if possible
    } catch (error) {
      console.error("Failed to toggle folio publish status:", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };
  
  

  return (

    <List
    loading={loading}
  itemLayout="vertical"
  size="large"
  pagination={{ pageSize: 3 }}
  dataSource={folios}
  renderItem={folio => (
    <FolioCard
      folio={folio}
      handleEdit={handleEdit}
      handleViewAnalytics={handleViewAnalytics}
      togglePublishStatus={togglePublishStatus}
      handleDelete={handleDelete}
    />
  )}
/>


  );
};

export default MyWebsites;

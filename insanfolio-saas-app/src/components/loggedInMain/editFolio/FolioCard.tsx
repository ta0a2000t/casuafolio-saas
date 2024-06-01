import React, { useState } from 'react';
import { List, Tooltip, Button, message, Spin, Layout } from 'antd';
import { EditOutlined, BarChartOutlined, CloudDownloadOutlined, CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Folio, FolioType } from 'API'; // Adjust the import path as necessary
import IconText from 'components/loggedInMain/editFolio/IconText';
import { createPublishedFolioDataService, deletePublishedFolioDataService } from 'services/publishedFolioDataServices';
import { fetchDraftFolioDataService } from 'services/draftFolioDataServices';
import { updateFolioService } from 'services/folioServices';


interface FolioCardProps {
  folio: Folio;
  handleEdit: (id: string) => void;
  handleViewAnalytics: (id: string) => void;
  handleDelete: (id: string) => void;
}

const imageUrl = 'https://picsum.photos/200';

const FolioCard: React.FC<FolioCardProps> = ({
  folio,
  handleEdit,
  handleViewAnalytics,
  handleDelete,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();



  const togglePublishStatus = async (folioId: string) => {
  
    try {
      setLoading(true);
  
      if (folio.folioPublishedDataId) {
        // The folio is currently published, prepare to unpublish it
        await deletePublishedFolioDataService(folio.folioPublishedDataId);
        // Update the folio to remove the reference to the deleted published data ID
        const updateInput = {
          id: folioId,
          folioPublishedDataId: null, // Clearing the publishedDataId to unpublish
        };
        await updateFolioService(updateInput)
        folio.folioPublishedDataId = null;
        setIsPublished(false);
      } else {
        // The folio is not currently published, prepare to publish it
        // Create new published data from draft data (assuming backend handles actual data copy)
        if (folio.folioDraftDataId == null) {
          messageApi.error("You have to start editing first!")
          console.error('No draft data found for folio', folio.id);

          return;
        } else {
          
          const draftFolioData = await fetchDraftFolioDataService(folio.folioDraftDataId);

          const publishedData = await createPublishedFolioDataService(
            {
            customTemplate: draftFolioData.getDraftFolioData?.customTemplate
            }
          );


          // Update the folio to reference the new published data ID
          const updateInput = {
            id: folioId,
            folioPublishedDataId: publishedData.createPublishedFolioData.id, // Use the new published data ID
          };
          await updateFolioService(updateInput);
          setIsPublished(true);

          folio.folioPublishedDataId = publishedData.createPublishedFolioData.id;
        }

      }
  
      // Refresh or update local folio data to reflect changes
      // This may involve re-fetching folios or updating the state directly if possible
    } catch (error) {
      console.error("Failed to toggle folio publish status:", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
      console.log(isPublished)
    }
  };






  return (
    <>
        {contextHolder}
    {loading && <List.Item>

        <div style={{ minHeight: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin size="default" />
        </div>
      
      </List.Item>}
    {! loading && (
      <List.Item
      
      key={folio.id}
      actions={[
        <IconText icon={EditOutlined} text="Edit" key="list-edit" onClick={() => handleEdit(folio.id)} />,
        <IconText icon={BarChartOutlined} text="Analytics" key="list-analytics" onClick={() => handleViewAnalytics(folio.id)} />,
        isPublished ? (
          <IconText
            icon={CloudDownloadOutlined}
            text="Unpublish"
            key="list-unpublish"
            onClick={() => togglePublishStatus(folio.id)}
            color="orange"
          />
        ) : (
          <IconText
            icon={CloudUploadOutlined}
            text="Publish"
            key="list-publish"
            onClick={() => togglePublishStatus(folio.id)}
            color="blue"
          />
        ),
        <IconText
          icon={DeleteOutlined}
          text="Delete"
          key="list-delete"
          onClick={() => handleDelete(folio.id)}
          color="red"
          confirmMessage="Are you sure you want to delete this folio?"
        />,
      ]}
      extra={
        imageUrl ? (
          <img
            style={{ height: 140, width: 300, objectFit: 'cover' }}
            alt={folio.title}
            src={imageUrl} // Assuming the image URL comes from the publishedData
          />
        ) : undefined
      }
    >
      <List.Item.Meta
        title={<a href="#">{folio.title}</a>}
        description={`Type: ${folio.folioType} - Last Edited: ${folio.updatedAt} - Status: ${folio.folioPublishedDataId ? 'Online' : 'Offline'}`}
      />
      {folio.description}
      {/* You can add more detailed information here, such as createdAt, folioNumber, etc. */}
      <div>Created At: {folio.createdAt}</div>
      {folio.folioNumber && <div>Folio Number: {folio.folioNumber}</div>}
    </List.Item>


    )}

    </>

  );
};

export default FolioCard;

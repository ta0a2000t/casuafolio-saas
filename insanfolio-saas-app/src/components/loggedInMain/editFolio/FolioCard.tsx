import React from 'react';
import { List, Tooltip, Button } from 'antd';
import { EditOutlined, BarChartOutlined, CloudDownloadOutlined, CloudUploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Folio, FolioType } from 'API'; // Adjust the import path as necessary
import IconText from 'components/loggedInMain/editFolio/IconText';

interface FolioCardProps {
  folio: Folio;
  handleEdit: (id: string) => void;
  handleViewAnalytics: (id: string) => void;
  togglePublishStatus: (id: string) => void;
  handleDelete: (id: string) => void;
}

const imageUrl = 'https://picsum.photos/200';

const FolioCard: React.FC<FolioCardProps> = ({
  folio,
  handleEdit,
  handleViewAnalytics,
  togglePublishStatus,
  handleDelete,
}) => {
  return (
    <List.Item
      key={folio.id}
      actions={[
        <IconText icon={EditOutlined} text="Edit" key="list-edit" onClick={() => handleEdit(folio.id)} />,
        <IconText icon={BarChartOutlined} text="Analytics" key="list-analytics" onClick={() => handleViewAnalytics(folio.id)} />,
        folio.folioPublishedDataId ? (
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
  );
};

export default FolioCard;

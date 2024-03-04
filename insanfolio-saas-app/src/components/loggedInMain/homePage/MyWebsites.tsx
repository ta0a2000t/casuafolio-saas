import React, { useState } from 'react';
import { List, Popconfirm, Space, Tooltip } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined, EditOutlined, BarChartOutlined, CloudUploadOutlined, CloudDownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

// Assuming initial projects array contains the relevant data
const initialProjects = [
  // Example project data
  {
    id: 1,
    name: 'Project Name',
    type: 'Personal Portfolio',
    lastEdited: '2023-03-03',
    status: 'Online',
    imageUrl: 'https://fastly.picsum.photos/id/281/200/300.jpg?hmac=KCN8F5QTgxHdeQxLpZ5BOuUEVQEp8jAedlLSRERW7CY',
    description: 'A detailed description about the project here.',
    content: 'Additional content about the project can be placed here.',
  },
  // Add more projects as needed
];



interface IconTextProps {
  icon: React.ElementType;
  text: string;
  onClick?: () => void;
  color?: string; // Optional color prop for dynamic styling
  confirmMessage?: string; // Optional prop for delete confirmation
}

// Helper component for icons with conditional styling and animations
const IconText: React.FC<IconTextProps> = ({ icon, text, onClick, color, confirmMessage }) => {
  const IconComponent = React.createElement(icon, {
    style: {
      marginRight: 8, // Add some space between the icon and text
    },
  });

  const content = (
    <Space
      style={{
        cursor: onClick ? 'pointer' : 'default',
        color: color || 'inherit', // Apply color if provided
        transition: 'transform 0.2s', // Animation effect
        
      }}
      className="icon-text"
      onClick={(onClick)} 
    >
      {IconComponent}
      {text}
    </Space>
  );

  if (confirmMessage && onClick) {
    // Wrap the content with Popconfirm only if confirmMessage is provided
    return (
      <Popconfirm title={confirmMessage} onConfirm={onClick}>
          <div style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
            {content}
          </div>
      </Popconfirm>
    );
  }

  // If no confirmMessage is provided, just show the content with tooltip
  return content;
};

const MyWebsites: React.FC = () => {
  const [projects, setProjects] = useState(initialProjects); // Convert projects array into state variable
  const navigate = useNavigate();

  // Implement the functions for actions
  const handleEdit = (projectId: number) => {/* Implementation */
    navigate('/editFolio',{state:{id:1,type: 'Timeline', folioId: '09233-09r0jff-niweunew'}});
    };
  const handleDelete = (projectId: number) => {
    setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
  };
  const handleViewAnalytics = (projectId: number) => {/* Implementation */};
  const togglePublishStatus = (projectId: number) => {
    setProjects(prevProjects => prevProjects.map(project => {
      if (project.id === projectId) {
        return { ...project, status: project.status === 'Online' ? 'Offline' : 'Online' };
      }
      console.log(project);
      return project;
    }));
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 3,
      }}
      dataSource={projects}
      renderItem={project => (
        <List.Item
          key={project.id}
          actions={[
            <IconText icon={EditOutlined} text="Edit" key="list-edit" onClick={() => handleEdit(project.id)} />,
            <IconText icon={BarChartOutlined} text="Analytics" key="list-analytics" onClick={() => handleViewAnalytics(project.id)} />,
            project.status === 'Online' ? (
              <IconText
                icon={CloudDownloadOutlined}
                text="Unpublish"
                key="list-unpublish"
                onClick={() => togglePublishStatus(project.id)}
                color="orange"
              />
            ) : (
              <IconText
                icon={CloudUploadOutlined}
                text="Publish"
                key="list-publish"
                onClick={() => togglePublishStatus(project.id)}
                color="blue"
              />
            ),
            <IconText
              icon={DeleteOutlined}
              text="Delete"
              key="list-delete"
              onClick={() => handleDelete(project.id)}
              color="red"
              confirmMessage="Are you sure you want to delete this project?"
            />,
          ]}
          extra={
            <img
              style={{ height: 140, width: 300, objectFit: 'cover' }}
              alt={project.name}
              src={project.imageUrl}
            />
          }
        >
          <List.Item.Meta
            title={<a href="#">{project.name}</a>}
            description={`Type: ${project.type} - Last Edited: ${project.lastEdited} - Status: ${project.status}`}
          />
          {project.description}
          <br />
          {project.content}
        </List.Item>
      )}
    />
  );
};

export default MyWebsites;

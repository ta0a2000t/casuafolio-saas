import React from 'react';
import { Button, Card, Alert, Row, Col, theme, Modal } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';

const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Dummy data for the projects
  const projects = [
    { id: 1, name: 'Project 1', type: 'Timeline' },
    { id: 2, name: 'Project 2', type: 'Research' },
    { id: 3, name: 'Project 3', type: 'Restaurant' },
    // Add more projects as needed
  ];

  // Function to handle quick actions
  const handleAction = (action: string, projectId: number) => {
    console.log(`${action} action triggered for project ID: ${projectId}`);
    // Here, you could add logic to handle each action, such as opening a modal, redirecting, or deleting.
  };

  return (
    <div style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}>
      <Alert
        message="Welcome Back!"
        description="This is your personalized dashboard."
        type="success"
        showIcon
        closable
      />

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {/* Generate a Card for each project */}
        {projects.map(project => (
          <Col span={8} key={project.id}>
            <Card
              title={project.name}
              actions={[
                <EditOutlined key="edit" onClick={() => handleAction('Edit', project.id)} />,
                <EyeOutlined key="view" onClick={() => handleAction('View', project.id)} />,
                <DeleteOutlined key="delete" onClick={() => handleAction('Delete', project.id)} />,
              ]}
            >
              <p>Category: {project.type}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: 'center', margin: '24px 0' }}>
        <Button type="primary" size="large">
          Create New Project
        </Button>
      </div>

    </div>
  );
};

export default Home;

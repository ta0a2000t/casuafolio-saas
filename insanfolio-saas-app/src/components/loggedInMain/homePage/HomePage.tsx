import React from 'react';
import { Alert, Tabs, Card, Button, Layout, Row, Col } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';

const { TabPane } = Tabs;
const { Content } = Layout;

const Home: React.FC = () => {
  // Sample data for recent projects
  const recentProjects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
    // Add more projects as needed
  ];

  return (
    <Layout>
      <Content style={{ padding: '20px', minHeight: '100vh' }}>
        <Alert
          message="Welcome Back!"
          description="This is your dashboard, where magic happens."
          type="info"
          showIcon
          closable
        />
        <Tabs defaultActiveKey="1" style={{ marginTop: '20px' }}>
          <TabPane tab="Timeline" key="1">
            {/* Gallery or content for Timeline */}
          </TabPane>
          <TabPane tab="Research" key="2">
            {/* Gallery or content for Research */}
          </TabPane>
          <TabPane tab="Restaurant" key="3">
            {/* Gallery or content for Restaurant */}
          </TabPane>
        </Tabs>
        <div style={{ margin: '20px 0' }}>
          <Row gutter={[16, 16]}>
            {recentProjects.map((project) => (
              <Col key={project.id} span={8}>
                <Card
                  title={project.title}
                  actions={[
                    <EditOutlined key="edit" />,
                    <EyeOutlined key="view" />,
                    <DeleteOutlined key="delete" />,
                  ]}
                >
                  {project.description}
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button type="primary" size="large">
            Create New Project
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;

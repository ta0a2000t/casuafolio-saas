import React from 'react';
import { Button, Form, Popconfirm, Space, theme } from 'antd';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import EventsSection from './eventsSection/EventsSection';

const EventsSections: React.FC = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <Form.List name="eventsSections">
      {(fields, { add, remove }) => {
        // Handle adding a new section
        const handleAdd = () => {
          add();
        };

        return (
          <>
            {fields.map((field, index) => (
              <Space key={field.key} direction="vertical" style={{ position: "relative" }}>
                {/* Pass the base name for the events list in each EventsSection */}
                <EventsSection name={field.name} />
                <Popconfirm
                  title="Delete the section"
                  description="Are you sure to delete this section?"
                  onConfirm={() => remove(field.name)}
                  icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                >
                  <Button
                    danger
                    style={{ marginTop: "5px" }}
                    icon={<DeleteOutlined />}
                  >
                    Delete Section
                  </Button>
                </Popconfirm>
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" block onClick={handleAdd} style={{ minWidth: "200px" }}>
                Create a Section
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

export default EventsSections;

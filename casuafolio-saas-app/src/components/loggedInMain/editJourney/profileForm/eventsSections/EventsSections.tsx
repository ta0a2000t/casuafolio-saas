import React from 'react';
import { Button, Card, Form, Popconfirm, message, theme } from 'antd';
import { DeleteOutlined, QuestionCircleOutlined, PlusOutlined } from '@ant-design/icons';
import EventsSection from './eventsSection/EventsSection';

const EventsSections: React.FC = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <Form.List name="eventsSections">
      {(fields, { add, remove }) => {
        return (
          <>
            {fields.map((field, index) => (
              <Card title={`# ${index + 1}`}
                key={field.key}
                style={{
                  marginBottom: 24, // Adjust as needed for spacing between sections
                  backgroundColor: colorBgLayout, // Use theme color
                }}

              >
                {/* Render each EventsSection inside the Card */}
                <EventsSection name={field.name} />

                {/* Place the delete button at the bottom of the Card */}
                <Popconfirm
                  title="Delete the section"
                  description="Are you sure to delete this section?"
                  onConfirm={() => remove(field.name)}
                  icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                >
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    style={{ marginTop: '10px', width: '100%' }} // Ensures button is full-width
                  >
                    Delete Section
                  </Button>
                </Popconfirm>
              </Card>
            ))}

            {/* Add section button outside and below all sections */}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => {
                  if (fields.length >= 3) {
                    message.error('You can have 3 sections at most.');
                  } else {
                    add();
                  }
                }}
                block
                icon={<PlusOutlined />}
              >
                New Section
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

export default EventsSections;

import React from 'react';
import { Button, Card, Collapse, Form, FormListFieldData, Popconfirm, Space, message, theme } from 'antd';
import { DeleteOutlined, QuestionCircleOutlined, PlusOutlined } from '@ant-design/icons';
import EventsSection from './eventsSection/EventsSection';

const EventsSections: React.FC = () => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();

  const Panel = Collapse.Panel;

  function sectionHeader(move: any, fields: any, index: any) {
    return (

      <div>
        <Space aria-orientation='horizontal' title={`Section ${index + 1}`}>
          <Button onClick={() => move(index, index - 1)} block disabled={index === 0}>
            Up
          </Button>
          <Button

            onClick={() => move(index, index + 1)}
            block
            disabled={index === fields.length - 1}
          >
            Down
          </Button>

        </Space>


      </div>
    )
  }

  function collapsItems (move:(from: number, to: number) => any , remove: (index: number | number[]) => void,fields: FormListFieldData[], field: FormListFieldData, index: number) {
    return (
    <Panel header={`Section ${index + 1}`}
    key='0'
    style={{
      marginBottom: 24, // Adjust as needed for spacing between sections
      backgroundColor: colorBgLayout, // Use theme color
    }}

  >
    {/* Render each EventsSection inside the Card */}
    <EventsSection name={field.name} sectionIndex={index} />

    {/* Place the delete button at the bottom of the Card */}




    <Space aria-orientation='horizontal' title={`Section ${index + 1}`}>

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


      <Button onClick={() => move(index, index - 1)} block disabled={index === 0}>
        Up
      </Button>
      <Button

        onClick={() => move(index, index + 1)}
        block
        disabled={index === fields.length - 1}
      >
        Down
      </Button>

    </Space>

    </Panel>
    )
  }


  return (
    <Form.List name="eventsSections">
      {(fields, { add, remove, move }) => {
        return (
          <>
            {fields.map((field, index) => (
              <Collapse defaultActiveKey={['1']} accordion key={field.key} >
                {collapsItems(move, remove, fields, field, index)}
              </Collapse>


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

import React from 'react';

import { Button, Form, Popconfirm, Space, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { inherits } from 'util';
import DynamicTagInput from './DynamicTagInput';
import GalleryInput from '../../shared/GalleryInput';
import EventInput from './EventInput';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';





const EventsSection: React.FC<{ name: number }> = ({ name }) => {
  // Apply conditional style based on isDarkMode

  const {
    token: { colorBgLayout },
  } = theme.useToken();

  return (
    <>
    

    <Form.List name={name}>
            {(fields, { add, remove }) => {
                return (
                    <>
                        {fields.map((field, index) => {
                            return (
                                <div key={field.key}>
                                    <Space
                                        key={field.key}
                                        direction="horizontal"
                                        style={{
                                            position: "relative",
                                            marginRight: "13px",
                                        }}
                                    >
                                        <EventInput />



                                        <Popconfirm
                                            title="Delete the event"
                                            description="Are you sure to delete this event?"
                                            onConfirm={(e) => remove(index)}
                                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                        >
                                            <Button
                                                danger
                                                style={{ marginTop: "5px" }}
                                                icon={<DeleteOutlined />}
                                            >Delete Event</Button>
                                        </Popconfirm>


                                    </Space>

                                </div>
                            );
                        })}
                        <Form.Item>
                            <Button type="dashed" block onClick={() => add()} style={{ minWidth:"150px", maxWidth: "200px" ,  marginTop:"200px"}}>
                                Add New Event
                            </Button>
                        </Form.Item>
                    </>
                );
            }}
        </Form.List>

    </>
  );
};

export default EventsSection;
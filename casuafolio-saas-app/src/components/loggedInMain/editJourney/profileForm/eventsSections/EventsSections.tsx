import React from 'react';

import { Button, Form, Input, Popconfirm, Space, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { inherits } from 'util';
import EventsSection from './eventsSection/EventsSection';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';




const EventsSections: React.FC = () => {
    // Apply conditional style based on isDarkMode

    const {
        token: { colorBgLayout },
    } = theme.useToken();

    return (
        <Form.List name={"skills"}>
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
                                        <EventsSection />



                                        <Popconfirm
                                            title="Delete the section"
                                            description="Are you sure to delete this section?"
                                            onConfirm={(e) => remove(field.name)}
                                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                        >
                                            <Button
                                                danger
                                                style={{ marginTop: "5px" }}
                                                icon={<DeleteOutlined />}
                                            >Delete Section</Button>
                                        </Popconfirm>


                                    </Space>

                                </div>
                            );
                        })}
                        <Form.Item>
                            <Button type="dashed" block onClick={() => add()} style={{ maxWidth: "150px" }}>
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
import React from 'react';

import { Button, Card, Form, Input, Popconfirm, Space, message, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { inherits } from 'util';
import DynamicTagInput from './DynamicTagInput';
import GalleryInput from '../../shared/GalleryInput';
import EventInput from './EventInput';
import { DeleteOutlined, QuestionCircleOutlined, PlusOutlined } from '@ant-design/icons';





const EventsSection: React.FC<{ name: number }> = ({ name }) => {
    // Apply conditional style based on isDarkMode

    const {
        token: { colorBgLayout, colorBorder },
    } = theme.useToken();
    const [form] = Form.useForm();

    return (
        <>

            <Form.Item label="Section Name" name={[name, 'sectionName']} rules={[{ required: true }]}>
                <Input placeholder="Example: 'Experiences'" maxLength={16} showCount />
            </Form.Item>

            <Form.Item label="Section Title" name={[name, 'sectionTitle']} rules={[{ required: true }]}>
                <Input placeholder="Example: 'My Humble Experiences 🛶'"  maxLength={80} showCount />
            </Form.Item>

            <Card
                style={{
                    marginBottom: 20, // Adjust the card margin as needed
                    borderWidth: 2, // Optional: if you want to show a border
                    borderColor: colorBorder, // Optional: border color
                    backgroundColor: colorBgLayout, // Use color from theme tokens
                }}
                bordered={true} // Option to show border
            >


                <Form.List name={[name, 'events']}>
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
                                                }}
                                            >
                                                <EventInput name={field.name} />



                                                <Popconfirm
                                                    title="Delete the event"
                                                    description="Are you sure to delete this event?"
                                                    onConfirm={(e) => remove(index)}
                                                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                >
                                                    <Button
                                                        danger
                                                        icon={<DeleteOutlined />}
                                                    ></Button>
                                                </Popconfirm>


                                            </Space>

                                        </div>
                                    );
                                })}
                                <Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            block
                                            onClick={() => {
                                                if (fields.length >= 30) {
                                                    message.error('You can add up to 30 events only.');
                                                } else {
                                                    add();
                                                }
                                            }}
                                            icon={<PlusOutlined />}
                                            style={{ minWidth: "150px", maxWidth: "150px" }}
                                        >
                                            New Event
                                        </Button>
                                    </Form.Item>

                                </Form.Item>
                            </>
                        );
                    }}
                </Form.List>
            </Card>
        </>
    );
};

export default EventsSection;
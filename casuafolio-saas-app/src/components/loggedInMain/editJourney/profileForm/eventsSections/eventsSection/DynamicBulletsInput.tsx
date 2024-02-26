import React from 'react';
import { Button, Form, Input, Space, message, theme } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

const DynamicBulletsInput: React.FC<{ name: number }> = ({ name }) => {
    const {
        token: { colorBgLayout },
    } = theme.useToken();

    const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
        if (e.key === 'Enter') {
          // Prevent the default action to avoid new lines on Enter press
          e.preventDefault();
        }
      };
      
    return (
        <Form.List name={name} >
            {(fields, { add, remove }) => {
                return (
                    <>
                        {fields.map((field, index) => (
                            <>
                                <Space key={field.key} >
                                    <Space.Compact block >
                                        <Form.Item name={field.name} rules={[{ required: true }]}
                                                                style={{ width: "400px" }}

                                        >
                                        <Input.TextArea  autoSize={{ minRows: 1, maxRows: 3 }} showCount maxLength={210} minLength={20} placeholder="What did you do?"
                                                onKeyDown={handleKeyDown} // Attach the onKeyDown event handler
                                                />
                                        </Form.Item>
                                        <Button
                                            onClick={() => remove(field.name)}
                                            danger
                                            icon={<CloseOutlined />}
                                        ></Button>

                                    </Space.Compact>

                                </Space>
                            </>
                        ))}

                        {/* Add section button outside and below all sections */}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => {
                                    if (fields.length >= 15) {
                                        message.error('You can have 15 bullet points at most.');
                                    } else {
                                        add();
                                    }
                                }}
                                block
                                icon={<PlusOutlined />}
                            >
                                New Line (Bullet Point)
                            </Button>
                        </Form.Item>
                    </>
                );
            }}
        </Form.List>
    );
};

export default DynamicBulletsInput;

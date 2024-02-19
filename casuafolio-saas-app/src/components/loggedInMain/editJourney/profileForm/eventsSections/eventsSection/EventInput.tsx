import React from 'react';

import { Card, Form, Input, theme } from 'antd';
import DynamicTagInput from './DynamicTagInput';
import GalleryInput from '../../shared/GalleryInput';




const EventInput: React.FC<{ name: number }> = ({ name }) => {
    // Card style options
    const cardStyle = {
        width: 470, // Predefined width, you can adjust as needed
        marginBottom: 20, // Adds space between each EventInput if you have multiple
        // For more styling, you can add additional properties here
    };

    return (
        <Card.Grid style={cardStyle} >
            <Form.Item label="Event Name" name={name} rules={[{ required: true }]} >
                <Input placeholder="Your Event Name" />
            </Form.Item>

            <GalleryInput galleryLabel={'Event Logo'} maxImages={1} />

            <DynamicTagInput tagName={'Skill'} />
        </Card.Grid>
    );
};

export default EventInput;
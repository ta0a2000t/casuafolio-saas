import React, { useState } from 'react';

import { Card, Form, Input, Tooltip, theme } from 'antd';
import DynamicTagInput from './DynamicTagInput';
import GalleryInput from '../../shared/GalleryInput';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';
import DynamicBulletsInput from './DynamicBulletsInput';

const { RangePicker } = DatePicker;


type RangeValue = [Dayjs | null, Dayjs | null] | null;

const EventInput: React.FC<{ name: number }> = ({ name }) => {
    // Card style options
    const cardStyle = {
        width: 470, // Predefined width, you can adjust as needed
        marginBottom: 20, // Adds space between each EventInput if you have multiple
        // For more styling, you can add additional properties here
    };

    const [value, setValue] = useState<RangeValue>(null);


    return (
        <Card.Grid style={cardStyle} >
            <Form.Item label="Event Name" name={[name, 'eventName']} rules={[{ required: true }]} >
                <Input placeholder="Your Company/School/Org/Activity" maxLength={45} showCount />
            </Form.Item>

            <Form.Item label="Event Logo" name={[name, 'eventLogo']} >

                <GalleryInput galleryLabel={''} maxImages={1} />
            </Form.Item>

            <Form.Item label="Role" name={[name, 'role']} rules={[{ required: true }]} >
                <Input placeholder="Your Job/Position/Role" maxLength={30} showCount />
            </Form.Item>

            <Form.Item label="Dates" name={[name, 'eventDates']} rules={[{ required: true }]} >
                <RangePicker value={value} onChange={setValue} />
            </Form.Item>

            <Tooltip title={'Your Skills/Tags/Topics/Tasks'}>
                <Form.Item label="Your Skills" name={[name, 'eventSkills']} rules={[{ required: false }]} >
                    <DynamicTagInput tagName={'Skill'} />
                </Form.Item>
            </Tooltip>
            
            <DynamicBulletsInput name={name}/>

            <Form.Item label="Photos" name={[name, "photos"]}>

                <GalleryInput galleryLabel={''} maxImages={9} />
            </Form.Item>




            <Form.Item
                name={[name, 'eventLink']}
                label="Link"
                rules={[{ type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
            >
                <Input placeholder="Share something related to this event" maxLength={1500} />
            </Form.Item>


        </Card.Grid>
    );
};

export default EventInput;
import React, { useState } from 'react';
import {Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Switch,
  TreeSelect,
} from 'antd';
import AboutSection from './aboutSection/AboutSection';
import SocialLinksInput from './aboutSection/SocialLinksInput';
import PersonalInfoInput from './aboutSection/PersonalInfoInput';
import GalleryInput from './shared/GalleryInput';
import EventsSections from './eventsSections/EventsSections';

type SizeType = Parameters<typeof Form>[0]['size'];

const ProfileForm: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 700 }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <PersonalInfoInput/>
      <AboutSection/>
      <SocialLinksInput/>
<EventsSections/>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
    </Form>
  );
};

export default ProfileForm;
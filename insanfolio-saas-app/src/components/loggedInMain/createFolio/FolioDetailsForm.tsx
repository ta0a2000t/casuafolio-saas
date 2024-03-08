import React from 'react';
import { Form, Input, message, FormInstance } from 'antd';

export interface FolioDetailsFormValues {
  title: string;
  description: string;
}

interface FolioDetailsFormProps {
  form: FormInstance<FolioDetailsFormValues>;
  setFolioDetailsFormValues: (values: FolioDetailsFormValues) => void;
  folioDetailsFormValues: FolioDetailsFormValues | undefined;
}

const FolioDetailsForm: React.FC<FolioDetailsFormProps> = ({
  form,
  setFolioDetailsFormValues,
  folioDetailsFormValues,
}) => {

  // Example useEffect to set form values if they exist. This is useful for editing scenarios.
  React.useEffect(() => {
    if (folioDetailsFormValues) {
      form.setFieldsValue(folioDetailsFormValues);
    }
  }, [folioDetailsFormValues, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      name="folioDetailsForm"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          { required: true, message: 'Please input the title!' },
          { max: 50, message: 'Title must be at most 50 characters' }
        ]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          { required: true, message: 'Please input the description!' },
          { max: 200, message: 'Description must be at most 200 characters' }
          
        ]}
      >
        <Input.TextArea rows={4} placeholder="Enter description" />
      </Form.Item>

    </Form>
  );
};

export default FolioDetailsForm;

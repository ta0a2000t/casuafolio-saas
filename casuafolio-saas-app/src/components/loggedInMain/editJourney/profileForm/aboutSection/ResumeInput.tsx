import React from 'react';

import {Divider, Form, Input, Upload, theme } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { inherits } from 'util';
import { FileAddOutlined } from '@ant-design/icons';



const ResumeInput: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList.slice(-1); // Keep only the last selected file to enforce single file upload
  };
  
  
  return (
    <div>

    <Form.Item label="Resume Upload">
      <Form.Item
        name="resume"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        noStyle
      >
        <Upload.Dragger
          name="files"
          action="/upload.do"
          multiple={false} // Ensure only single file upload is allowed
          accept=".pdf" // Accept only PDF files
        >
          <p className="ant-upload-drag-icon">
            <FileAddOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Only single PDF file is supported for resume upload.
          </p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>


    </div>

  );
};

export default ResumeInput;
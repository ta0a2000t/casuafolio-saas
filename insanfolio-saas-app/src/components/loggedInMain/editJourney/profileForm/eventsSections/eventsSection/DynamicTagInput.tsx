import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Input, Space, Tag, theme, Tooltip, message, Form } from 'antd';

const DynamicTagInput: React.FC<{ tagName: string, formPath: (string | number)[] }> = ({ tagName, formPath }) => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState([`Click Me`, `Click Me`]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);
  const form = Form.useFormInstance();


  useEffect(() => {
    // Optionally, set initial tags state from form's initial values if necessary
    const initialTags = form.getFieldValue(formPath);
    if (initialTags && initialTags.length > 0) {
      setTags(initialTags);
    }
  }, [form, formPath]);
  useEffect(() => {
    // This effect runs whenever the `tags` state changes.
    form.setFieldValue(formPath, tags);
  }, [tags, form, formPath]);



  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  // runs after deleting a tag
  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    // Trim the input value to remove leading/trailing whitespace
    const trimmedInputValue = inputValue.trim();

    // Check if the trimmed input is empty
    if (!trimmedInputValue) {
      //message.error(`${tagName} cannot be empty.`);
    } else if (tags.includes(trimmedInputValue)) {
      message.error(`This ${tagName} already exists.`);
    } else {
      if (trimmedInputValue.length > 40) {
        message.warning(`${tagName} cannot excceed 40 characters.`);
      }
      
      const finalValue = trimmedInputValue.length > 40 ? trimmedInputValue.slice(0, 40) : trimmedInputValue;
      setTags([...tags, finalValue]);
    }

    setInputVisible(false);
    setInputValue('');
  };



  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };


  const handleEditInputConfirm = () => {
    
    const trimmedInputValue = editInputValue.trim(); // Trim the edit input value
    // Check if the trimmed input is empty
    if (!trimmedInputValue) {
      message.error(`${tagName} cannot be empty.`);
    } else if (tags.includes(trimmedInputValue) && trimmedInputValue !== tags[editInputIndex]) {
      // Check if another tag with the same name exists (exclude the current tag being edited)
      message.error(`This ${tagName} already exists.`);
    } else {
      // Proceed with updating the tag
      const finalValue = trimmedInputValue.length > 40 ? trimmedInputValue.slice(0, 40) : trimmedInputValue;
      const newTags = [...tags];
      newTags[editInputIndex] = finalValue; // Update the tag at the current edit index

      if (trimmedInputValue.length > 40) {
        message.warning(`${tagName} cannot excceed 40 characters.`);
      }

      setTags(newTags);
    }

  
    setEditInputIndex(-1); // Reset the edit index
    setEditInputValue(''); // Clear the edit input value
  };
  
  

  const tagInputStyle: React.CSSProperties = {
    width: 140,
    height: 28,
    marginInlineEnd: 8,
    verticalAlign: 'top',
  };

  const tagPlusStyle: React.CSSProperties = {
    height: 22,
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={index}
              size="small"
              style={tagInputStyle}
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag
            key={index}
            closable={index > 1} // first two are not deletable
            style={{ userSelect: 'none' }}
            onClose={() => handleClose(tag)}
          >
            <span
              onClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(tag);
                e.preventDefault();

              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return tagElem;
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="middle"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
          New {tagName}
        </Tag>
      )}
    </Space>
  );
};

export default DynamicTagInput;
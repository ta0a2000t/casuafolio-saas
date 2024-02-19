import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Input, Space, Tag, theme, Tooltip, message } from 'antd';

const DynamicTagInput: React.FC<{ tagName: string }> = ({ tagName }) => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState([`${tagName} 1`, `${tagName} 2`]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
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
      message.error(`${tagName} cannot be empty.`);
    } else if (tags.includes(trimmedInputValue)) {
      message.error(`This ${tagName} already exists.`);
    } else {
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
      setTags(newTags);
    }
  
    setEditInputIndex(-1); // Reset the edit index
    setEditInputValue(''); // Clear the edit input value
  };
  
  

  const tagInputStyle: React.CSSProperties = {
    width: 80,
    height: 22,
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
              key={tag}
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
            key={tag}
            closable={index !== 0}
            style={{ userSelect: 'none' }}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                setEditInputIndex(index);
                setEditInputValue(tag);
                e.preventDefault();

              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
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
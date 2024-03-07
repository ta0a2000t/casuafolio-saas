import { Popconfirm, Space } from "antd";
import React from "react";

interface IconTextProps {
    icon: React.ElementType;
    text: string;
    onClick?: () => void;
    color?: string; // Optional color prop for dynamic styling
    confirmMessage?: string; // Optional prop for delete confirmation
  }
  
  // Helper component for icons with conditional styling and animations
  const IconText: React.FC<IconTextProps> = ({ icon, text, onClick, color, confirmMessage }) => {
    const IconComponent = React.createElement(icon, {
      style: {
        marginRight: 8, // Add some space between the icon and text
      },
    });
  
    const content = (
      <Space
        style={{
          cursor: onClick ? 'pointer' : 'default',
          color: color || 'inherit', // Apply color if provided
          transition: 'transform 0.2s', // Animation effect
          
        }}
        className="icon-text"
        onClick={(onClick)} 
      >
        {IconComponent}
        {text}
      </Space>
    );
  
    if (confirmMessage && onClick) {
      // Wrap the content with Popconfirm only if confirmMessage is provided
      return (
        <Popconfirm title={confirmMessage} onConfirm={onClick}>
            <div style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
              {content}
            </div>
        </Popconfirm>
      );
    }
  
    // If no confirmMessage is provided, just show the content with tooltip
    return content;
  };
  
  export default IconText;
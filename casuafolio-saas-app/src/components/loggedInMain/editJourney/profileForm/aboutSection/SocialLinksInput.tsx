import React from 'react';
import { Divider, Form, Input } from 'antd';

const SocialLinksInput: React.FC = () => {
    const form = Form.useFormInstance();




    type PrefixKey = 'github-url' | 'linkedin-url' | 'twitter-url' | 'instagram-url' | 'youtube-url';
    let prefixes: Record<PrefixKey, string> = {
      'github-url': 'https://github.com/',
      'linkedin-url': 'https://www.linkedin.com/in/',
      'twitter-url': 'https://twitter.com/',
      'instagram-url': 'https://www.instagram.com/',
      'youtube-url': 'https://www.youtube.com/'
    };

    let Labels: Record<PrefixKey, string> = {
        'github-url': 'Github URL',
        'linkedin-url': 'LinkedIn URL',
        'twitter-url': 'X(Twitter) URL',
        'instagram-url': 'Instagram URL',
        'youtube-url': 'Youtube URL'
      };


    
    const placeholders: Record<PrefixKey, string> = {
        'github-url': 'username',
        'linkedin-url': 'your-profile',
        'twitter-url': 'username',
        'instagram-url': 'username',
        'youtube-url': 'channel-name'
    };
    
    const handleRemovePrefix = (name: PrefixKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const prefix = prefixes[name];
        if (value.startsWith(prefix)) {
            // Correct way to use variable as key in setFieldsValue
            form.setFieldsValue({ [name]: value.substring(prefix.length) });
        }
    };


      

  return (
    <div>
      <Divider>Social Links</Divider>
      {Object.entries(Labels).map(([key, label]) => (
        <Form.Item
          key={key}
          name={key}
          label={label}
          rules={[{ required: false }, { type: 'string', warningOnly: true }
        ,
        {
            validator(_, value) {
                if (!value) {
                  // Allow empty values unless the field is marked as required
                  return Promise.resolve();
                }
                let prefix = prefixes[key as PrefixKey];
                // Check if the input value itself incorrectly starts with another URL
                if (value.startsWith("http://") || value.startsWith("https://")) {
                  return Promise.reject(new Error('URL must starts with "' + prefix + '"'));
                }
            
                const fullUrl = prefix + value;
                try {
                  new URL(fullUrl);
                  return Promise.resolve();
                } catch {
                  return Promise.reject(new Error('Please enter a valid URL'));
                }
              }


          },]}
        >
          <Input
            addonBefore={prefixes[key as PrefixKey]}
            placeholder={placeholders[key as PrefixKey]}
            onChange={handleRemovePrefix(key as PrefixKey)}
          />
        </Form.Item>
      ))}
    </div>
  );
};

export default SocialLinksInput;

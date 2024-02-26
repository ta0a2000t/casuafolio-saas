import React from 'react';
import { Divider, Form, Input } from 'antd';
import { LinkOutlined} from '@ant-design/icons';

const SocialLinksInput: React.FC = () => {
    const form = Form.useFormInstance();

    const handleOpenLink = (name: PrefixKey) => {
      // Get the current value from the form
      let value = form.getFieldValue(name);
      if (!value) {
        value = '';
      }
      const fullUrl = prefixes[name] + value;
      // Open the full URL in a new tab
      window.open(fullUrl, '_blank');
  };


    type PrefixKey = 'github-url' | 'linkedin-url' | 'twitter-url' | 'instagram-url' | 'youtube-url' | 'tiktok-url' | 'facebook-url';
    let prefixes: Record<PrefixKey, string> = {
      'github-url': 'https://github.com/',
      'linkedin-url': 'https://www.linkedin.com/in/',
      'twitter-url': 'https://twitter.com/',
      'instagram-url': 'https://www.instagram.com/',
      'youtube-url': 'https://www.youtube.com/',
      'tiktok-url': 'https://www.tiktok.com/@',
      'facebook-url': 'https://www.facebook.com/',

    };

    let Labels: Record<PrefixKey, string> = {
        'github-url': 'Github URL',
        'linkedin-url': 'LinkedIn URL',
        'twitter-url': 'X(Twitter) URL',
        'instagram-url': 'Instagram URL',
        'youtube-url': 'Youtube URL',
        'tiktok-url': 'TikTok URL',
        'facebook-url': 'Facebook URL',
      };


    
    const placeholders: Record<PrefixKey, string> = {
        'github-url': 'username',
        'linkedin-url': 'your-profile',
        'twitter-url': 'username',
        'instagram-url': 'username',
        'youtube-url': 'channel-name',
        'tiktok-url': 'username',
        'facebook-url': 'username',
    };
    
const handleRemovePrefix = (name: PrefixKey) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const prefix = prefixes[name];
    let newValue = value;
    if (value.startsWith(prefix)) {
        newValue = value.substring(prefix.length);
    }
    form.setFieldsValue({ [name]: newValue });

    // No need for additional action here since Form.Item's `name` prop binds the input value to the form state,
    // which is then used to dynamically generate the suffix link.
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
                  return Promise.reject(new Error('Please enter a valid Link'));
                }
              }


          },]}
        >
                    <Input
                        addonBefore={prefixes[key as PrefixKey]}
                        placeholder={placeholders[key as PrefixKey]}
                        onChange={handleRemovePrefix(key as PrefixKey)}
                        suffix={
                            <LinkOutlined onClick={() => handleOpenLink(key as PrefixKey)}  />
                        }
                    />
        </Form.Item>
      ))}
    </div>
  );
};

export default SocialLinksInput;

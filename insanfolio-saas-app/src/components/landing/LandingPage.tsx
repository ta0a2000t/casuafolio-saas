import React from 'react';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        {/* Other tags for the head */}
      </Helmet>
      <div className="app-content">
        {/* Your content here */}
        <h1>Welcome to My Site</h1>
        {/* More content */}
      </div>
    </>
  );
};

export default LandingPage;

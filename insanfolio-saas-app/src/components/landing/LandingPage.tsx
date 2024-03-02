import React from 'react';
import { Helmet } from 'react-helmet';



function iframe() {
    return {
        __html: '<iframe src="/landing/play-bootstrap-main/index.html" style="position: fixed; border: none; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;"></iframe>'
    }
}

const LandingPage: React.FC = () => {
  return (
    <>
        <div dangerouslySetInnerHTML={iframe()} />
    </>
  );
};

export default LandingPage;

import React from 'react';



function iframe() {
    return {
        __html: '<iframe src="./landing/play-bootstrap-main/404.html" style="position: fixed; border: none; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;"></iframe>'
    }
}

const NotFound404Page: React.FC = () => {
  console.log("not found page");
  return (
    <>
        <div dangerouslySetInnerHTML={iframe()} />
    </>
  );
};

export default NotFound404Page;

import React from 'react';

const Experience = ({ SECTION1 }) => {
  return (
    <div>
      <h3>{SECTION1.role}</h3>
      <p>{SECTION1.company}, {SECTION1.year}</p>
    </div>
  );
};

export default Experience;

import React, { useEffect, useState } from 'react';
import App from './timeline/timelineTemplate1/src/App';
import { FolioNumber, FolioType } from 'API';
// add other templates types

// TODO: make sure the values conform to the predefined interface of the corresponding template type

interface FolioSiteProps {
  values: string; 
  folioType: FolioType; 
  folioNumber: FolioNumber; 
}

const FolioSite: React.FC<FolioSiteProps> = ({ values, folioType, folioNumber }) => {
  // use type and number to determine the template
  let TemplateComponent;
  switch (folioType) {
    case FolioType.TIMELINE:
      TemplateComponent = <App values={values} />;
      break;
    // case 2:
    //   TemplateComponent = <TemplateTwo values={values} />;
    //   break;
    // Add more cases as needed
    default:
      TemplateComponent = <div>Unknown template type</div>;
  }

  return <div>{TemplateComponent}</div>;
};

export default FolioSite;
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import FolioSite from './FolioSite';




interface ValidateFolioSiteProps {
  isPublished: boolean;
}

const ValidateFolioSite: React.FC<ValidateFolioSiteProps> = ({isPublished}) => {

  // fetch form data using folio id from url
    // if folio does not exist or if folio.published is empty, then navigate to 404error page
    // if folio is published, determine the template type and templateNumber from folio.folioType and folio.folioNumber
       // pass the fetched data to the template (<FolioSite values={} folioType={} folioNumber={}/>)

  let fetchedValues = undefined; // depending on isPublished, fetch folio.draftFolioData or fetch folio.publishedFolioData
  let folioType = 1;
  let folioNumber = undefined;
  return (
    <FolioSite values={fetchedValues} type={folioType} number={folioNumber} />
    );
};

export default ValidateFolioSite;
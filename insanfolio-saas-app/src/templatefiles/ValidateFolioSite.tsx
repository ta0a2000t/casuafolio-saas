import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FolioSite from './FolioSite';
import { FolioNumber, FolioType } from 'API';




interface ValidateFolioSiteProps {
  isPublished: boolean;
}

const ValidateFolioSite: React.FC<ValidateFolioSiteProps> = ({isPublished}) => {

  // fetch form data using folio id from url
    // if folio does not exist or if folio.published is empty, then navigate to 404error page
    // if folio is published, determine the template type and templateNumber from folio.folioType and folio.folioNumber
       // pass the fetched data to the template (<FolioSite values={} folioType={} folioNumber={}/>)

  let fetchedValues = undefined; // depending on isPublished, fetch folio.draftFolioData or fetch folio.publishedFolioData
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const folioDataId = searchParams.get('folioDataId') as string;
  const folioType = searchParams.get('folioType') as FolioType;
  const folioNumber = searchParams.get('folioNumber') as FolioNumber;
  
  const isDraft = searchParams.get('isDraft') === "true";

  useEffect(() => {
    if (searchParams.get('isDraft') !== "true" && searchParams.get('isDraft') !== "false") {
      console.error('Invalid folioData: isDraft', isDraft);
      navigate("/404");
    }

    if (folioDataId === undefined || folioType === undefined || folioNumber === undefined || isDraft === undefined) {
      console.error('Invalid folioData');
      navigate("/404");
    }
  }, [folioDataId, folioNumber, folioType, isDraft]); // Depend only on folioType and folioId to control navigation


  if (isDraft) {
    // fetch draftFolioData
    // if draftFolioData does not exist, then navigate to 404error page
    // if draftFolioData does exist, then pass draftFolioData.customTemplate? to the template (<FolioSite values={} folioType={} folioNumber={}/>)
  } else {
    // fetch publishedFolioData
    // if publishedFolioData does not exist, then navigate to 404error page
    // if publishedFolioData does exist, then pass publishedFolioData.customTemplate? to the template (<FolioSite values={} folioType={} folioNumber={}/>)
  }

  return (
    <FolioSite values={fetchedValues} type={folioType} number={folioNumber} />
    );
};

export default ValidateFolioSite;
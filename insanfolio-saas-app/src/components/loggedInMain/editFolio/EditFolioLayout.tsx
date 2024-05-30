import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Row, Col, Spin, Layout } from 'antd';
import EditFolio from './EditFolio';
import LoggedInMain from '../LoggedInMain';
import App from "../../../../src/templates/timeline/timelineTemplate1/src/App.js";
import { FolioType, GetFolioQuery, GetDraftFolioDataQuery, DraftFolioData, CreateDraftFolioDataInput, UpdateFolioInput } from 'API';
import { fetchFolioService, updateFolioService } from 'services/folioServices';
import { LoadingOutlined } from '@ant-design/icons';
import { createDraftFolioDataService } from 'services/draftFolioDataServices';
import { updateUserService } from 'services/userServices';

interface EditFolioLayoutProps {
  userId: string;
  isDarkMode: boolean;
  children: React.FC<{ userId: string }>; // Define children as a ReactElement with userId prop
}

const EditFolioLayout: React.FC<EditFolioLayoutProps> = ({ userId, isDarkMode, children: Children }) => {
  // TODO: read the inputs from the dom input varaibles.
 
  // fetch Folio using the inputted Folio id from DOM
    // if Folio.DraftFolioData is null, create a DraftFolioData

  // TODO: feed the page: http://localhost:3000/folioDraft/DraftFolioDataID
          // with the DraftFolioData
  
  // pass the DraftFolioData id to the EditForm page
  // populate the EditFolio form with the DraftFolioData
  const location = useLocation();
  const [draftFolioDataId, setDraftFolioDataId] = useState<string | null>(null);
  const navigate = useNavigate();
  const [folioData, setFolioData] = useState<GetFolioQuery | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [draftFolioData, setDraftFolioData] = useState<DraftFolioData | null>(null);

  // TODO: wrap below into state variables and useEffect()
  // Extract folioType and folioId from the location state
  const folioType = location.state?.folioType as FolioType;
  const folioId = location.state?.folioId as string;


    // Check for undefined folioType or folioId and navigate if necessary
    useEffect(() => {
      if (folioType === undefined || folioId === undefined) {
        console.error('Invalid folioType or folioId:', folioType, folioId);
        navigate("/404");
      }
    }, [folioType, folioId, navigate]); // Depend only on folioType and folioId to control navigation
  
    
    useEffect(() => {
      const loadData = async () => {
        try {
          setLoading(true);
          const data = await fetchFolioService(folioId);
          setFolioData(data);
          console.log("THIS SHOULD RUN ONCE", folioType)
          
            if (data.getFolio?.draftData) {
              setDraftFolioDataId(data.getFolio.draftData.id);
              setDraftFolioData(data.getFolio.draftData)
              console.log("did not need to create a new DraftFolioData table")
            } else {
              console.log("created a new DraftFolioData table")

              // create a draftData table
              const draftFolioDataInput: CreateDraftFolioDataInput = {
                customTemplate: null,
              }
              const newDraftFolioData = (await createDraftFolioDataService(draftFolioDataInput)).createDraftFolioData

              // update current Folio to own the newly created DraftFolioData table
              const folioInput : UpdateFolioInput = {
                id: folioId,
                folioDraftDataId: newDraftFolioData.id
              }
              await updateFolioService(folioInput)

              setDraftFolioDataId(newDraftFolioData.id);
              setDraftFolioData(newDraftFolioData)
            }

        } catch (error) {
          console.error('Failed to fetch folio data:', error);
          navigate("/404")
        } finally {
          setLoading(false);
        }
      };
  
      // Ensure loadData is called only when folioId is defined
      if (folioId) {
        loadData();
      }
    }, [folioId]); // Remove navigate from the dependencies to prevent re-triggering due to navigation
  


    
  if (loading){
    return (        
    <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
    </Layout>

    )
  } if (draftFolioData){
    return (
      <Row style={{ minHeight: '100vh' }}>
        <Col xs={24} md={12}>
          <LoggedInMain userId={userId} isDarkMode={isDarkMode} draftFolioData={draftFolioData} folioType={folioType}>{Children}</LoggedInMain>
        </Col>
        <Col xs={0} md={12} style={{ position: 'fixed', right: 0, top: 0, width: '50%', height: '100vh' }}>
          <iframe 
              src={`http://localhost:3000/folioDraft/${draftFolioDataId}`}
              title="Folio Draft"
            style={{ width: '100%', height: '100vh', border: 'none' }}
          ></iframe>
        </Col>
      </Row>
    );
  } else {
    return(<>ERROOR</>)
  }

};

export default EditFolioLayout;

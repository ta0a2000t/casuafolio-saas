
import { CreateDraftFolioDataInput, UpdateDraftFolioDataInput, GetDraftFolioDataQuery, DraftFolioData, UpdateDraftFolioDataMutation } from 'API';
import { generateClient } from 'aws-amplify/api';
import { createDraftFolioData, updateDraftFolioData, deleteDraftFolioData } from 'graphql/mutations.js';
import { getDraftFolioData } from 'graphql/queries.js'; // Make sure the path matches where your queries file is located
import { onCreateDraftFolioData, onDeleteDraftFolioData, onUpdateDraftFolioData } from 'graphql/subscriptions.js';

const client = generateClient();



export const fetchDraftFolioDataService = async (DraftFolioDataId: string): Promise<GetDraftFolioDataQuery> => {
  try {
    console.log(DraftFolioDataId);
    const { data } = await client.graphql({
      query: getDraftFolioData,
      variables: {
        id: DraftFolioDataId
      }
    }) as { data: GetDraftFolioDataQuery }; // Cast the response to match your expected type
    console.log('DraftFolioData fetched:', data);
    return data; // Adjust according to your actual data structure
  } catch (error) {
    console.error('Error fetching DraftFolioData:', error);
    throw error;
  }
};

export const subscribeToDraftFolioDataCreation = (owner: string, onDraftFolioDataCreated: (DraftFolioData: DraftFolioData) => void) => {
  const subscription = client.graphql({
    query: onCreateDraftFolioData,
    variables: { owner: owner },
  }).subscribe({
    next: ({ data }) => {
      const newDraftFolioData = data.onCreateDraftFolioData; // Adjust based on your actual data structure
      if (newDraftFolioData) {
        onDraftFolioDataCreated(newDraftFolioData as DraftFolioData);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });

  return subscription;
};

export const subscribeToDraftFolioDataUpdate = (owner: string, onDraftFolioDataUpdated: (updatedDraftFolioData: DraftFolioData) => void) => {
  const subscription = client.graphql({
    query: onUpdateDraftFolioData,
    variables: { owner: owner },
  }).subscribe({
    next: ({ data }) => {
      console.log('DraftFolioData updated:', data);
      const updatedDraftFolioData = data.onUpdateDraftFolioData; // Adjust based on actual data structure
      if (updatedDraftFolioData) {
        onDraftFolioDataUpdated(updatedDraftFolioData as DraftFolioData);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });

  // Return the subscription to allow for unsubscribing outside this function
  return subscription;
};


export const subscribeToDraftFolioDataDeletion = (owner: string, onDraftFolioDataDeleted: (deletedDraftFolioDataId: string) => void) => {
  const subscription = client.graphql({
    query: onDeleteDraftFolioData,
    variables: { owner: owner },
  }).subscribe({
    next: ({ data }) => {
      console.log('DraftFolioData deleted:', data);
      const deletedDraftFolioDataId = data.onDeleteDraftFolioData?.id; // Adjust based on actual data structure
      if (deletedDraftFolioDataId) {
        onDraftFolioDataDeleted(deletedDraftFolioDataId);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });

  // Return the subscription to allow for unsubscribing outside this function
  return subscription;
};


export const createDraftFolioDataService = async (DraftFolioDataInput: CreateDraftFolioDataInput) => {
  try {
    const { data } = await client.graphql({
      query: createDraftFolioData,
      variables: {
        input: DraftFolioDataInput
      }
    });
    console.log('DraftFolioData created:', data);
    return data;
  } catch (error) {
    console.error('Error creating DraftFolioData:', error);
    throw error;
  }
};

export const updateDraftFolioDataService = async (DraftFolioDataInput: UpdateDraftFolioDataInput) : Promise<UpdateDraftFolioDataMutation> => {
  try {
    const { data } = await client.graphql({
      query: updateDraftFolioData,
      variables: {
        input: DraftFolioDataInput
      }
    });
    console.log('DraftFolioData updated:', data);
    return data;
  } catch (error) {
    console.error('Error updating DraftFolioData:', error);
    throw error;
  }
};

export const deleteDraftFolioDataService = async (DraftFolioDataId: string) => {
  try {
    const { data } = await client.graphql({
      query: deleteDraftFolioData,
      variables: {
        input: {
          id: DraftFolioDataId
        }
      }
    });
    console.log('DraftFolioData deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting DraftFolioData:', error);
    throw error;
  }
};







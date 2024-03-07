// FolioService.ts


/*
type Folio @model @auth(rules: [{allow: public, operations: [read], provider: iam}, {allow: owner, operations: [read, create, update, delete], provider: userPools}]) {
  id: ID!
  userID: ID! @index(name: "byUser")
  User: User @belongsTo(fields: ["userID"])

  publishedData: PublishedFolioData @hasOne
  draftData: DraftFolioData @hasOne
  title: String!
  description: String
  folioType: FolioType!
  folioNumber: Int
  customMetadata: AWSJSON
}
*/

import { CreateFolioInput, UpdateFolioInput, GetFolioQuery, ListFoliosQuery, Folio, UpdateFolioMutation } from 'API';
import { generateClient } from 'aws-amplify/api';
import { createFolio, updateFolio, deleteFolio } from 'graphql/mutations';
import { getFolio, listFolios } from 'graphql/queries'; // Make sure the path matches where your queries file is located
import { onCreateFolio, onDeleteFolio, onUpdateFolio } from 'graphql/subscriptions';

const client = generateClient();



export const fetchFolioService = async (FolioId: string): Promise<GetFolioQuery> => {
  try {
    console.log(FolioId);
    const { data } = await client.graphql({
      query: getFolio,
      variables: {
        id: FolioId
      }
    }) as { data: GetFolioQuery }; // Cast the response to match your expected type
    console.log('Folio fetched:', data);
    return data; // Adjust according to your actual data structure
  } catch (error) {
    console.error('Error fetching Folio:', error);
    throw error;
  }
};

export const fetchFoliosService = async (): Promise<ListFoliosQuery> => {
  try {
    const { data } = await client.graphql({
      query: listFolios,
      variables:{filter: null, limit: null, nextToken: null}
    }) as { data: ListFoliosQuery }; // Cast the response to match your expected type
    console.log('Folios fetched:', data);
    return data; // Adjust according to your actual data structure
  } catch (error) {
    console.error('Error fetching Folios:', error);
    throw error;
  }
};


export const subscribeToFolioCreation = (owner: string, onFolioCreated: (folio: Folio) => void) => {
  const subscription = client.graphql({
    query: onCreateFolio,
    variables: { owner: owner },
  }).subscribe({
    next: ({ data }) => {
      const newFolio = data.onCreateFolio; // Adjust based on your actual data structure
      if (newFolio) {
        onFolioCreated(newFolio);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });

  return subscription;
};

export const subscribeToFolioUpdate = (owner: string, onFolioUpdated: (updatedFolio: Folio) => void) => {
  const subscription = client.graphql({
    query: onUpdateFolio,
    variables: { owner: owner },
  }).subscribe({
    next: ({ data }) => {
      console.log('Folio updated:', data);
      const updatedFolio = data.onUpdateFolio; // Adjust based on actual data structure
      if (updatedFolio) {
        onFolioUpdated(updatedFolio);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });

  // Return the subscription to allow for unsubscribing outside this function
  return subscription;
};


export const subscribeToFolioDeletion = (owner: string, onFolioDeleted: (deletedFolioId: string) => void) => {
  const subscription = client.graphql({
    query: onDeleteFolio,
    variables: { owner: owner },
  }).subscribe({
    next: ({ data }) => {
      console.log('Folio deleted:', data);
      const deletedFolioId = data.onDeleteFolio?.id; // Adjust based on actual data structure
      if (deletedFolioId) {
        onFolioDeleted(deletedFolioId);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });

  // Return the subscription to allow for unsubscribing outside this function
  return subscription;
};


export const createFolioService = async (FolioInput: CreateFolioInput) => {
  try {
    const { data } = await client.graphql({
      query: createFolio,
      variables: {
        input: FolioInput
      }
    });
    console.log('Folio created:', data);
    return data;
  } catch (error) {
    console.error('Error creating Folio:', error);
    throw error;
  }
};

export const updateFolioService = async (FolioInput: UpdateFolioInput) : Promise<UpdateFolioMutation> => {
  try {
    const { data } = await client.graphql({
      query: updateFolio,
      variables: {
        input: FolioInput
      }
    });
    console.log('Folio updated:', data);
    return data;
  } catch (error) {
    console.error('Error updating Folio:', error);
    throw error;
  }
};

export const deleteFolioService = async (FolioId: string) => {
  try {
    const { data } = await client.graphql({
      query: deleteFolio,
      variables: {
        input: {
          id: FolioId
        }
      }
    });
    console.log('Folio deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting Folio:', error);
    throw error;
  }
};







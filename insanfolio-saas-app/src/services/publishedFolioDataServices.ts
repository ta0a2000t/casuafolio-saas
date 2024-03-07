
import { CreatePublishedFolioDataInput, UpdatePublishedFolioDataInput, GetPublishedFolioDataQuery, PublishedFolioData, UpdatePublishedFolioDataMutation } from 'API';
import { generateClient } from 'aws-amplify/api';
import { createPublishedFolioData, updatePublishedFolioData, deletePublishedFolioData } from 'graphql/mutations';
import { getPublishedFolioData } from 'graphql/queries'; // Make sure the path matches where your queries file is located
import { onCreatePublishedFolioData, onDeletePublishedFolioData, onUpdatePublishedFolioData } from 'graphql/subscriptions';

const client = generateClient();



export const fetchPublishedFolioDataService = async (PublishedFolioDataId: string): Promise<GetPublishedFolioDataQuery> => {
  try {
    console.log(PublishedFolioDataId);
    const { data } = await client.graphql({
      query: getPublishedFolioData,
      variables: {
        id: PublishedFolioDataId
      }
    }) as { data: GetPublishedFolioDataQuery }; // Cast the response to match your expected type
    console.log('PublishedFolioData fetched:', data);
    return data; // Adjust according to your actual data structure
  } catch (error) {
    console.error('Error fetching PublishedFolioData:', error);
    throw error;
  }
};



export const createPublishedFolioDataService = async (PublishedFolioDataInput: CreatePublishedFolioDataInput) => {
    try {
      const { data } = await client.graphql({
        query: createPublishedFolioData,
        variables: {
          input: PublishedFolioDataInput
        }
      });
      console.log('PublishedFolioData created:', data);
      return data;
    } catch (error) {
      console.error('Error creating PublishedFolioData:', error);
      throw error;
    }
  };
  
  export const updatePublishedFolioDataService = async (PublishedFolioDataInput: UpdatePublishedFolioDataInput) : Promise<UpdatePublishedFolioDataMutation> => {
    try {
      const { data } = await client.graphql({
        query: updatePublishedFolioData,
        variables: {
          input: PublishedFolioDataInput
        }
      });
      console.log('PublishedFolioData updated:', data);
      return data;
    } catch (error) {
      console.error('Error updating PublishedFolioData:', error);
      throw error;
    }
  };
  
  export const deletePublishedFolioDataService = async (PublishedFolioDataId: string) => {
    try {
      const { data } = await client.graphql({
        query: deletePublishedFolioData,
        variables: {
          input: {
            id: PublishedFolioDataId
          }
        }
      });
      console.log('PublishedFolioData deleted:', data);
      return data;
    } catch (error) {
      console.error('Error deleting PublishedFolioData:', error);
      throw error;
    }
  };
  
  
  
  
  
  
  
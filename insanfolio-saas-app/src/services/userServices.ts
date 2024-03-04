// userService.ts

import { CreateUserInput, UpdateUserInput, GetUserQuery } from 'API';
import { generateClient } from 'aws-amplify/api';
import { createUser, updateUser, deleteUser } from 'graphql/mutations';
import { getUser } from 'graphql/queries'; // Make sure the path matches where your queries file is located

const client = generateClient();


const exampleUserInput = {
    firstName: "Jane",
    email: "jane.doe@example.com",
    username: "janedoe",
    picture: "https://xsgames.co/randomusers/assets/avatars/pixel/30.jpg"
};

export const fetchUserService = async (userId: string) => {
  try {
    console.log(userId);
    const { data } = await client.graphql({
      query: getUser,
      variables: {
        id: userId
      }
    }) as { data: GetUserQuery }; // Cast the response to match your expected type
    console.log('User fetched:', data);
    return data.getUser; // Adjust according to your actual data structure
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};



export const createUserService = async (userInput: CreateUserInput) => {
  try {
    const { data } = await client.graphql({
      query: createUser,
      variables: {
        input: userInput
      }
    });
    console.log('User created:', data);
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUserService = async (userInput: UpdateUserInput) => {
  try {
    const { data } = await client.graphql({
      query: updateUser,
      variables: {
        input: userInput
      }
    });
    console.log('User updated:', data);
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUserService = async (userId: string) => {
  try {
    const { data } = await client.graphql({
      query: deleteUser,
      variables: {
        input: {
          id: userId
        }
      }
    });
    console.log('User deleted:', data);
    return data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};


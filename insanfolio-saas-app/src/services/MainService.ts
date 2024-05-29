import { fetchAuthSession } from 'aws-amplify/auth';

export const getSession = async () => {
    const {
      tokens,
      credentials,
      identityId,
      userSub
    } = await fetchAuthSession();
    return {
        tokens,
        credentials,
        identityId,
        userSub
      };
  }



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

/* USAGE:

  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    getSession().then((session) => {
      setUserId(session.userSub);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
*/



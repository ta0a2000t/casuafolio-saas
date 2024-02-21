export {};

/*

works:

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";


type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};



const MainAppPage: React.FC<AppProps> = ({ signOut, user }) => {
  return (
    <div>
      <Heading level={1}>Hello {user?.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
      <h2>Amplify Todos</h2>
      ...
    </div>
  );
};

export default withAuthenticator(MainAppPage);

*/
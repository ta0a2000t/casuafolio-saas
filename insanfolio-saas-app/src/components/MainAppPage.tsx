import { ConfigProvider, FloatButton, Layout, Spin, theme } from "antd";
import LoggedInMain from "./loggedInMain/LoggedInMain";
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import React, { useState , useEffect} from 'react';

import './MainAppPage.css';

// auth //////////////////////////////////////////////////////////////////////////////////////////////////
import { withAuthenticator, useAuthenticator, useTheme, View, Image, Text, Button, Heading, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";


///// dynamodb //////////////////////////////////////////////////////////////////////////////////////////////////
import { generateClient } from "aws-amplify/api";
import LandingPage from "components/landing/LandingPage";
import {getSession} from '../services/MainService';
import EditFolioLayout from "./loggedInMain/editFolio/EditFolioLayout";
import { FolioType } from "API";
const client = generateClient()



const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt="InsanFolio logo"
            src="logo.svg"
          />
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
          InsanFolio &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  
    SignIn: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to your account
          </Heading>
        );
      },
      Footer() {
        const { toForgotPassword } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toForgotPassword}
              size="small"
              variation="link"
            >
              Reset Password
            </Button>
          </View>
        );
      },
    },
  
    SignUp: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Create a new account
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
            >
              Back to Sign In
            </Button>
          </View>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    SetupTotp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmSignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ForgotPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
  };
  
  const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter your email',
      },
    },
    signUp: {
      password: {
        label: 'Password:',
        placeholder: 'Enter your Password:',
        isRequired: false,
        order: 4,
      },
      confirm_password: {
        label: 'Confirm Password:',
        order: 5,
      },
      given_name: {
        label: 'First Name:',
        order: 1,
      },
      username: {
        label: 'Username:',
        order: 2,
      },
      email: {
        label: 'Email:',
        order: 3,
      },
    },
    forceNewPassword: {
      password: {
        placeholder: 'Enter your Password:',
      },
    },
    forgotPassword: {
      username: {
        placeholder: 'Enter your email:',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: 'Enter your Confirmation Code:',
        label: 'New Label',
        isRequired: false,
      },
      confirm_password: {
        placeholder: 'Enter your Password Please:',
      },
    },
    setupTotp: {
      QR: {
        totpIssuer: 'test issuer',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
  };




type MainAppPageProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
  content: React.FC<{ userId: string }> | any;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isSplitScreen: boolean;
};






// for sign out, refer to Login.tsx file for how to do this
const MainAppPage: React.FC<MainAppPageProps> = ({ signOut, user, content , isDarkMode, setIsDarkMode, isSplitScreen}) => {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [loading, setLoading] = useState<boolean>(true);

    console.log("Main App Page")
    const [userId, setUserId] = useState<string | undefined>(undefined);

    useEffect(() => {
      getSession().then((session) => {
        setUserId(session.userSub);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
      });
    }, []);


      
    if (loading) {
      return (
        <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' }, algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>

        <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin size="large" />
        </Layout>
        </ConfigProvider>

      );
    } else if (userId){
      return (
        <div id="MainAppPage"> 
        
          <ConfigProvider theme={{ token: { colorPrimary: '#00f96b' }, algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
          
          {!isSplitScreen && (<LoggedInMain userId={userId} isDarkMode={isDarkMode}>{content}</LoggedInMain>)}
          {isSplitScreen && (<EditFolioLayout userId={userId} isDarkMode={isDarkMode}>{content}</EditFolioLayout>)}

            <FloatButton
              icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
              onClick={() => setIsDarkMode(!isDarkMode)}
              tooltip={isDarkMode ? 'Switch to Light' : 'Switch to Dark'} />

          </ConfigProvider>
        </div>
      );
    } else {
      return (<>AN ERROR HAS HAPPENED</>)
    }
  }
export default withAuthenticator(MainAppPage);

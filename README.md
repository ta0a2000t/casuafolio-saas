# casuafolio-saas


# Project Documentation

## Introduction
This project is developed using the Ant Design React framework, focusing on delivering a seamless user interface and experience. It integrates AWS services such as Cognito, Amplify, and Lambda to manage authentication, API, and serverless functions. This documentation outlines the steps taken during the development process, including both frontend and backend configurations.

## Project Setup

### UI Development
- **Framework Used**: Ant Design React
- **Main Feature**: A form was implemented in the frontend, capturing user inputs. Upon submission, the form values are captured and processed on the client side.

### Backend Development

#### AWS Cognito Setup via Amplify
- **Initial Step**: Creation of a user pool manually.
- **Authentication**: Started integrating Google authentication (work in progress).
- **Identity Pool**: Added an identity pool with two IAM roles:
  - **Guest Authentication Rule**: For unauthenticated users.
  - **Authenticated Rule**: For authenticated users.
- **Amplify Commands**:
  - Installed Amplify CLI.
  - Ran `amplify import authentication`, selecting both the identity pool and user pool created earlier.

#### API and Database
- **GraphQL API**: Added a GraphQL API using Amplify by running `amplify add api` and selecting GraphQL.
- **Database Schema**: Designed a schema for the tables in DynamoDB to structure the database effectively.

### Integration with AWS Lambda
- Currently exploring the use of AWS Lambda to add serverless functions to the project.

## Progress and Next Steps
- **Completed**:
  - UI form implementation using Ant Design React.
  - Setup of AWS Cognito for authentication, including user and identity pools.
  - Configuration of Amplify for authentication and API management.
  - Initial design of the database schema for DynamoDB.

- **In Progress**:
  - Completion of Google authentication integration.
  - Exploration and implementation of AWS Lambda functions for backend logic.

## Conclusion
This project leverages modern web technologies and AWS services to build a comprehensive application. The documentation will continue to evolve as further progress is made, detailing both challenges encountered and solutions implemented.


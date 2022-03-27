// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import { BrowserRouter } from 'react-router-dom';
// import '@aws-amplify/ui-react/styles.css';

// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// import { AmplifyProvider } from '@aws-amplify/ui-react'

// Amplify.configure(awsExports);

// ReactDOM.render(
//   <AmplifyProvider>
//       <App />
//   </AmplifyProvider>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AmplifyProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider>
  </StrictMode>,
  rootElement
);

 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
Amplify.configure(awsconfig);
ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <Authenticator.Provider>
      <App />
      </Authenticator.Provider>
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

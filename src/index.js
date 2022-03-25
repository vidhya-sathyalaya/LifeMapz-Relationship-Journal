import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { JournalEntryFeedCollection } from './ui-components';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//       <p> Hello World! </p>
//     </div>
//   );
//  }
//  export default App;
 
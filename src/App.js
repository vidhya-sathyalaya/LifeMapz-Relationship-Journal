import logo from './logo.svg';
import './App.css';
import Router from './Router.js'
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
Amplify.configure(awsconfig);
Auth.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings : true });
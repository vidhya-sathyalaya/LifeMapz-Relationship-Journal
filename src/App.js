import logo from './logo.svg';
import './App.css';
// import Router from './Router.js'
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
// Amplify.configure(awsconfig);
// Auth.configure(awsconfig);
function App( { signOut, user } ) {
  return (
    <div className="App">
      {/* <Router/> */}
      {user.attributes.email}
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App, {
  socialProviders: ['google', 'facebook']
});
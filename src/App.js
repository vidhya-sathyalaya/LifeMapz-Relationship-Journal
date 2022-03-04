import logo from './logo.svg';
import './App.css';
import awsconfig from "./aws-exports";
import { Auth } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";

import { CompleteProfile } from './ui-components';

Auth.configure(awsconfig);


console.log("User information! ");
console.log(Auth.currentUserInfo());

function App( { signOut, user } ) {
  return (
    <div className="App">
      {/* <Router/> */}
      {user.attributes.email}
      <button onClick={signOut}>Sign Out</button>
      <CompleteProfile />
    </div>
  );
}

export default withAuthenticator(App, {
  socialProviders: ['google', 'facebook']
});
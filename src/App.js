// import logo from './logo.svg';
// import './App.css';
// import awsconfig from "./aws-exports";
// import { Auth } from 'aws-amplify';
// import { withAuthenticator } from "@aws-amplify/ui-react";

// import { CompleteProfile } from './ui-components';

// Auth.configure(awsconfig);


// console.log("User information! ");
// console.log(Auth.currentUserInfo());

// function App( { signOut, user } ) {
//   return (
//     <div className="App">
//       {/* <Router/> */}
//       {user.attributes.email}
//       <button onClick={signOut}>Sign Out</button>
//       <CompleteProfile />
//     </div>
//   );
// }

// export default withAuthenticator(App, {
//   socialProviders: ['google', 'facebook']
// });


import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import { Login } from "./auth-components/Login.js";
import { Home } from "./auth-components/Home.js";
import "./styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
  const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }

  return <Login />;
}

// import logo from './logo.svg';
// import './App.css';
// import Router from './Router.js'
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "./aws-exports";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// // import CreateJournalsamplebutton from './ui-components/CreateJournalsamplebutton';
// import { CreateJournal } from './pages/CreateJournal';
// import { Journal } from './models';
// import { DataStore } from '@aws-amplify/datastore';

// import AWSDateUtil from './util'
// Auth.configure(awsconfig);


// async function saveJournal(){
//   const journalrow = await DataStore.save(
//             new Journal({
//             "date_created":  AWSDateUtil.getCurrentAWSDate(),
//             "is_active": true
//           })
//         );

//         console.log('Created Journal ID : ', journalrow.id)

      
//     }
    
// function App() {
//   return (
//     <div className="App">
//       <Router/>
//       <CreateJournalsamplebutton 
//         onClick ={ () => saveJournal()}/>
//     </div>
//     // <CreateJournal/>
//   );
// }

// export default withAuthenticator(App, { includeGreetings : true });


import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

// import { Login } from "./auth-components/Login.js";
// if class based component then import without curly braces as imported the Home component
// import Home from "./auth-components/Home.js";
// import "./styles.css";

import awsExports from "./aws-exports";
import CreateJournal from "./pages/CreateJournal.js";
Amplify.configure(awsExports);

export default function App() {
  // const { user } = useAuthenticator();
  console.log("In app.js");
  return <CreateJournal />;
}
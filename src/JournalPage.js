import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { NavBar, Writeajournal } from './ui-components_frontpage';
Amplify.configure(awsconfig);


function JournalPage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={imageOverrides} />
          <Writeajournal></Writeajournal>
         </div>
       // </AmplifyProvider>
  );
}

export default JournalPage;

import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { NavBar } from './ui-components';
import { Frame419 } from './ui-components';
Amplify.configure(awsconfig);


function CreateJournalPage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={imageOverrides} />
          <Frame419></Frame419>
         </div>
       // </AmplifyProvider>
  );
}

export default CreateJournalPage;

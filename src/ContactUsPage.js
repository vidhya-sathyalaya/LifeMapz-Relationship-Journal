import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Contactus2, NavBar } from './ui-components';

Amplify.configure(awsconfig);


function ContactUsPage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={imageOverrides} />
          <Contactus2></Contactus2>
         </div>
       // </AmplifyProvider>
  );
}

export default ContactUsPage;

import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { FooterAllPages, NavBar } from './ui-components_frontpage';
import ViewProfile from './ViewProfile';
Amplify.configure(awsconfig);


function ViewProfilePage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }

   const username = {
    name : sessionStorage.getItem('userFname') + " " + sessionStorage.getItem('userLname'),
 }

   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={[imageOverrides, username]} />
          <ViewProfile></ViewProfile>
          <FooterAllPages></FooterAllPages>
         </div>
       // </AmplifyProvider>
  );
}

export default ViewProfilePage;

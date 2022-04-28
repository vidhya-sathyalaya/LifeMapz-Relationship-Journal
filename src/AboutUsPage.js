import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Aboutus2, FooterAllPages, NavBar } from './ui-components_frontpage';
Amplify.configure(awsconfig);


function AboutUsPage() {
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
          <Aboutus2></Aboutus2>
          <FooterAllPages></FooterAllPages>
         </div>
       // </AmplifyProvider>
  );
}

export default AboutUsPage;

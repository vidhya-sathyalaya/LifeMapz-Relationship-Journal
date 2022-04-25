import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { NavBar } from './ui-components_frontpage';
import { ViewProffile } from './ui-components_aboutus';
Amplify.configure(awsconfig);


function ViewProfilePage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={imageOverrides} />
          <ViewProffile></ViewProffile>
         </div>
       // </AmplifyProvider>
  );
}

export default ViewProfilePage;

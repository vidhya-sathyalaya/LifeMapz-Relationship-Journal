import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { NavBar } from './ui-components_frontpage';
import Aboutus2 from './ui-components_aboutus/Aboutus2';
Amplify.configure(awsconfig);


function AboutUsPage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={imageOverrides} />
          <Aboutus2></Aboutus2>
         </div>
       // </AmplifyProvider>
  );
}

export default AboutUsPage;

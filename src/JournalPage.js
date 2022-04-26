import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Footer1, NavBar, Writeajournal } from './ui-components_frontpage';
Amplify.configure(awsconfig);


function JournalPage() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   const fott1 ={
    "image 1":{
      src: "https://static.vecteezy.com/system/resources/previews/002/448/934/non_2x/couple-chatting-in-the-smartphone-screen-virtual-relationship-dating-app-vector.jpg"
    },
  }
   return (
     // <AmplifyProvider>
         <div className='App'>
          <NavBar overrides={imageOverrides} />
          <div >
          <Writeajournal></Writeajournal>
          <Footer1 overrides={fott1}/>
          </div>
          
         </div>
       // </AmplifyProvider>
  );
}

export default JournalPage;

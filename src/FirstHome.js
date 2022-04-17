/*
This page is same as the contents in U_61_NavBar_FrontPage App.js.
*/

import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { NavBar } from './ui-components_frontpage';
import { FrontPage1 } from './ui-components_frontpage';
import { Footer1 } from './ui-components_frontpage';
import { 
  Frame418 
} from './ui-components_frontpage';
Amplify.configure(awsconfig);


function FirstHome() {
  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   const fpg1 = {
     "image 1":{
       src: "https://i.ibb.co/xfyV5Dd/Screen-Shot-2022-03-18-at-1-15-07-PM.png",
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
           <p align="center"> Relationship Journal</p>
           <NavBar overrides={imageOverrides} />
        
         <div>
           <FrontPage1 overrides={fpg1}/>
           <Footer1 overrides={fott1}/>
           <Frame418 />
         </div>
         </div>
       // </AmplifyProvider>
  );
}

export default FirstHome;

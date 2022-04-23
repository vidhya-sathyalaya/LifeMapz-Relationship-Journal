import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsconfig from './aws-exports';
import { NavBar } from './ui-components';
import { Footer1 } from './ui-components';
import { SocialACardCollection } from './ui-components';
Amplify.configure(awsconfig);


function App() {

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
          <Footer1 overrides={fott1}/>
          <SocialACardCollection />
        </div>
        </div>
      // </AmplifyProvider>
  );
}

export default App;

import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { Frame417, NavBar } from './ui-components';
import { Frame417Collection } from './ui-components';
import { CardACollection } from './ui-components';
Amplify.configure(awsconfig);




function App() {
  const imageOverrides = {
   "Flex.Flex[2].Image[0]":{
      src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png"
   },
   "View.Image[0]":{
     src: "https://d3i6fh83elv35t.cloudfront.net/static/2020/05/GettyImages-1196354779-1200x814.png"
   }

  };
  console.log("Hiiis")
  return (
    <AmplifyProvider>
    <div className='App'>
        <p align="center"> Relationship Journal</p>
          <NavBar overrides={imageOverrides}/>
         
            <div>
          <CardACollection />
          <CardACollection />

          </div>
    </div>
    </AmplifyProvider>
  );
}

export default App;

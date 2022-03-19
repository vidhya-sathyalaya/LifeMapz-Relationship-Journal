import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { Frame417, NavBar } from './ui-components';
import { Frame417Collection } from './ui-components';
import { CardACollection, CardC } from './ui-components';
import { One } from './ui-components';
import { Tp } from './ui-components';
Amplify.configure(awsconfig);




function Example() {


  const imageOverrides = {
   "Flex.Flex[2].Image[0]":{
      src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
   },
  }


  const buttonOverrides = {
    "Flex.Flex[0].Button[0]":{
       onClick: console.log("Hiiii")
    },  
   }

  return (
    <AmplifyProvider>
    <div className='App'>
        <p align="center"> Relationship Journal</p>
          <NavBar overrides={imageOverrides}/>
         
            <div>
          <CardACollection />
          <CardACollection />
          <CardC overrides={buttonOverrides}/>
          </div>
    </div>
    </AmplifyProvider>
  );
}

export default Example;

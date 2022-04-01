import logo from './logo.svg';
import { CardACollection } from './ui-components';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import './App.css';
import { CardC } from './ui-components';
import { JournalEntryFeedCollection } from './ui-components';
import { Footer2 } from './ui-components';
import { JournalEntryPageGrid } from './ui-components';
import { 
  ViewProfA 
} from './ui-components';
import { 
  Createjournalpost 
} from './ui-components';
import { 
  Contactus2 
} from './ui-components';
Amplify.configure(awsconfig);

function App() {

  const buttonOveride = {
    "imageauq":{
      src: "https://d3i6fh83elv35t.cloudfront.net/static/2020/05/GettyImages-1196354779-1200x814.png"
    },
    "pngegg 2":{
      src: "https://i.ibb.co/LPFnj5d/pngegg.png"
    }
  }
  return (
    <div className="App">
        <AmplifyProvider>
          <CardACollection />
          <CardC overrides={buttonOveride}/>
          <ViewProfA overrides={buttonOveride}/>
          <Contactus2 overrides={buttonOveride}/>
          <Createjournalpost />
          {/* <Footer2 /> */}
        </AmplifyProvider>
       
    </div>
  );
}

export default App;

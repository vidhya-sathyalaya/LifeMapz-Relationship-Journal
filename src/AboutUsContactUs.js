import logo from './logo.svg';
import { CardACollection } from './ui-components_AboutUs_ContactUs';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
import { CardC } from './ui-components_AboutUs_ContactUs';
import { JournalEntryFeedCollection } from './ui-components_AboutUs_ContactUs';
import { Footer2 } from './ui-components_AboutUs_ContactUs';
import { JournalEntryPageGrid } from './ui-components_AboutUs_ContactUs';
import { 
  ViewProfA 
} from './ui-components_AboutUs_ContactUs';
import { 
  Createjournalpost 
} from './ui-components_AboutUs_ContactUs';
import { 
  Contactus2 
} from './ui-components_AboutUs_ContactUs';
Amplify.configure(awsconfig);

function AboutUsContactUs() {

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
 export default AboutUsContactUs;
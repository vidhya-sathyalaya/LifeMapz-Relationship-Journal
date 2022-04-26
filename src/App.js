import './App.css';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import RoutingFile from './RoutingFile';
import awsconfig from './aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsconfig);


function App() {

    return (
      <div>
        <RoutingFile classname="RoutingFile"></RoutingFile>
      </div>
  );
}
//  export default App;
export default withAuthenticator(App);


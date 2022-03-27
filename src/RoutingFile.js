import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './Home';
// import { history } from 'react-router';

Amplify.configure(awsconfig);

function RoutingFile() {
    return (
    <Router >
        <Switch>
            {/* // You can use both the ways to load any component !! */}
            <Route path='/' render={() => <Home/>} />

            <Route path='/test' ><Home/></Route>
        </Switch>
    </Router>
    );
  }
  //ok
  export default RoutingFile;
  
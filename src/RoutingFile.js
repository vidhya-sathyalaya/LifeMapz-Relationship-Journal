import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstHome from './FirstHome';
import Signup from './Signup';
// import { history } from 'react-router';

Amplify.configure(awsconfig);

function RoutingFile() {
    return (
    <Router >
        <Switch>
            {/* // You can use both the ways to load any component !! */}
            <Route exact path='/' render={() => <FirstHome/>} />
            <Route  path='/home' ><FirstHome/></Route>
            <Route  path='/signup'><Signup/></Route>
        </Switch>
    </Router>
    );
  }
  export default RoutingFile;
  
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstHome from './FirstHome';
import Signup from './Signup';
// import Aboutuspage from './Aboutuspage';
import { Aboutus } from './ui-components_aboutus';
// import { history } from 'react-router';

Amplify.configure(awsconfig);

function RoutingFile() {
    return (
    <Router >
        <Switch>
            <Route exact path='/' render={() => <FirstHome/>} />
            <Route  path='/home' ><FirstHome/></Route>
            <Route  path='/signup'><Signup/></Route>
            <Route path='/aboutus'><Aboutus/></Route>
        </Switch>
    </Router>
    );
  }
  export default RoutingFile;
  
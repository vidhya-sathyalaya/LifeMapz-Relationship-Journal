import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import awsconfig from './aws-exports';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstHome from './FirstHome';
import Signup from './Signup';
// import Aboutuspage from './Aboutuspage';
import { Aboutus } from './ui-components';
import { Contactus2 } from './ui-components';
// import { history } from 'react-router';
import { Login } from "./auth-components/Login.js";
import JournalEntry from './pages/JournalEntry';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import CreateJournalPage from './CreateJournalPage';

Amplify.configure(awsconfig);

function RoutingFile() {
    return (
    <Router >
        <Switch>
            <Route exact path='/' render={() => <FirstHome/>} />
            <Route  path='/home' ><FirstHome/></Route>
            <Route  path='/signup'><Signup/></Route>
            <Route path='/aboutus'><AboutUsPage/></Route>
            <Route path='/contactus'><ContactUsPage/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/journalentry'><JournalEntry/></Route>
            <Route path='/createjournal'><CreateJournalPage/></Route>
        </Switch>
    </Router>
    );
  }
  export default RoutingFile;
  
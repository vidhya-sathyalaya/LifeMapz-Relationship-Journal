import logo from './logo.svg';
import './App.css';
import Router from './Router.js'
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import CreateJournalsamplebutton from './ui-components/CreateJournalsamplebutton';
import { Journal } from './models';
import { DataStore } from '@aws-amplify/datastore';

import AWSDateUtil from './util'
Amplify.configure(awsconfig);
Auth.configure(awsconfig);


async function saveJournal(){
  const journalrow = await DataStore.save(
            new Journal({
            "date_created":  AWSDateUtil.getCurrentAWSDate(),
            "is_active": true
          })
        );

        console.log('Created Journal ID : ', journalrow.id)
    }
    
function App() {
  return (
    <div className="App">
      <Router/>
      <CreateJournalsamplebutton 
        onClick ={ () => saveJournal()}/>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings : true });
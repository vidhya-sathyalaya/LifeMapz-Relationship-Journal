import { Authenticator, Button, useAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { Auth } from 'aws-amplify';

import React, {useState} from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {RadioGroupField , Radio, Text, TextField, View } from "@aws-amplify/ui-react";

import { Journal } from '../models';
import AWSDateUtil from '../util';

// importing datastore to do an entry
import { DataStore } from '@aws-amplify/datastore';

import { API, graphqlOperation } from 'aws-amplify';
import EmailForm from './EmailForm';

// importing mutations for creations
import createUser from '../graphql/mutations';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

// const { signOut, user } = useAuthenticator();


class CreateJournal extends React.Component {

  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);
    this.saveJournal = this.saveJournal.bind(this);
    // this.storeUserID = this.storeUserID.bind(this);

    this.state = {
      journalID: '' ,
      email:'',
    };

  }
  
  componentDidMount()
    {
        this.getCurrentUserInfo();
    }


  async getCurrentUserInfo() 
  {

        const authenticatedUser = await Auth.currentAuthenticatedUser();

        var useremail = authenticatedUser.attributes.email;

        // for fetching the user by email and storing it id in session
        const user = await API.graphql({ query: queries.userByEmail , variables: { email : useremail }});

        //   Logging the fetched user id for testing
        //   console.log(user);
            console.log("[getUserInfo] USER ID " + user.data.userByEmail.items[0].id);

        // setter for session storage
            sessionStorage.setItem('userID', user.data.userByEmail.items[0].id);
    }

    async updateUser() {
        
    // getter for session storage
      const userID = sessionStorage.getItem('userID');
      console.log("[updateUser]");
      console.log(userID);

      var updateQuery = {
          journalID: this.state.journalID,
          id : userID,
        //   _version : mutations.updateUser._version,
      }

      const updatedUser = await API.graphql({ query: mutations.updateUser, variables: { input : updateQuery}});
      console.log("[udpateUser]");
      console.log(updatedUser);
    }

    async saveJournal()
    {
        const journalrow = await DataStore.save(
            new Journal({
            "date_created":  AWSDateUtil.getCurrentAWSDate(),
            "is_active": true
        })
        );

        console.log('[saveJournal] Created Journal ID : ', journalrow.id)
        this.setState({journalID : journalrow.id});
        console.log( "[saveJournal]" + this.state.journalID);
        // you'll need to store Journal ID in session as well because journalEntry needs userid and journalid both
        sessionStorage.setItem('journalID', journalrow.id);
        // this.storeUserID();
        this.updateUser();
    }

  render() {
    return (
        <div className="container">
        <main>
          <button onClick={this.saveJournal} className="signOutButton">Click Me!</button>
          <EmailForm/>
        </main>
      </div>
      );
  }
}

export default CreateJournal;
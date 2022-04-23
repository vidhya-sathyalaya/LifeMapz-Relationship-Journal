import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import React from 'react';
import { DefaultHeadingExample } from "./Test.js";
import Amplify, { Auth } from 'aws-amplify';

import  Frame418  from './Frame418';
import CompleteSignup  from "./CompleteSignup.js";
// importing datastore to do an entry
import { DataStore } from '@aws-amplify/datastore';

import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';

// const { signOut, user } = useAuthenticator();

// const userProfileAvailable = false;

export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognito_username
        fname
        lname
        email
        dob
        gender
        journalID
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;



class Home extends React.Component {

  constructor(props) {
    super(props);
    this.email = '';
    this.state = {
      cognito_username: '' ,
      email: '', 
      userProfileAvailable:false,
    };
    this.email = this.componentDidMount.bind(this);
  
    // console.log(Auth.user.attributes.username);

    // this will give every detail of the current authenticated user of the app

    // Auth.currentAuthenticatedUser({
    //   bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    //   }).then(user => console.log(user))
    //   .catch(err => console.log(err));

  }


  componentDidMount()
    {
        this.getCurrentUserInfo();
        this.fetchUserProfile();
    }

  getCurrentUserInfo() {
    Auth.currentUserInfo().then(user => {
    // this.setState({user});
    // testing and printing what is in user object
    console.log("In the get UserInfo function")
    console.log(user.username);
    console.log(user.attributes.email);
    this.email = user.attributes.email;
    this.setState({cognito_username : user.username});
    this.setState({email : user.attributes.email});
    });
    }

  async fetchUserProfile(){

    // const userProfile = await DataStore.query(User,
    //   c => c.date_created('gt', AWSDateUtil.getStartOfDayAsTimeStamp())
    //   .date_created('le', AWSDateUtil.getEndOfDayAsTimeStamp())
    //   .entry_type('eq', "Text"));

    //   const userProfile = await DataStore.query(User,
    //     c => c.date_created('gt', AWSDateUtil.getStartOfDayAsTimeStamp())
    //     .date_created('le', AWSDateUtil.getEndOfDayAsTimeStamp())
    //     .entry_type('eq', "Text"));

    try{
        console.log("Fetch profile email" + this.email);
        const user = await API.graphql({ query: getUserByEmail, variables: { email : this.email }});
        
        console.log(user);
        if(user.data.getUserByEmail == null){
          this.state.userProfileAvailable = false;
        }
        else{
          this.state.userProfileAvailable= true;
        }
    }
    catch(err){
        console.log(err);
    }


  }

  signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {
    const userRegistered = this.state.userProfileAvailable;
    let comp;

    if (userRegistered) {

      comp = <h1>Hello You are at Home page </h1>

    } else {

      comp = <CompleteSignup/>

    }
    return (
      <div className="container">
        <main>
          {/* <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button> */}
          <button onClick={this.signOut} className="signOutButton">SignOut</button>
          <h1>Home Page</h1>
          {comp}
        </main>
      </div>
    );
  }
}

export default Home;

// export function Home() {

//   // const { attributes } = Auth.currentAuthenticatedUser();
//   // const { attributes } = Auth.currentAuthenticatedUser({ bypassCache: true })
//   // console.log('attrs = ' + JSON.stringify(attributes));
  
// }

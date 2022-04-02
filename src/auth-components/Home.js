import { useAuthenticator } from "@aws-amplify/ui-react";
import React from 'react';
import { DefaultHeadingExample } from "./Test.js";
import Amplify, { Auth } from 'aws-amplify';

import { Frame418 } from '../ui-components';

// importing datastore to do an entry
import { DataStore } from '@aws-amplify/datastore';

// const { signOut, user } = useAuthenticator();


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cognitoUsername: null , email: null };

    // console.log(Auth.user.attributes.username);

    // this will give every detail of the current authenticated user of the app

    // Auth.currentAuthenticatedUser({
    //   bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    //   }).then(user => console.log(user))
    //   .catch(err => console.log(err));

  }

  componentDidMount()
    {
        // this.setState( {cognitoUsername : Auth.user.attributes.username });
        this.getCurrentUserInfo();
    }

  getCurrentUserInfo() {
    Auth.currentUserInfo().then(user => {
    // this.setState({user});
    // testing and printing what is in user object
    // console.log(user.username);
    this.setState({cognitoUsername : user.username});
    this.setState({email : user.attributes.email});
    });
    }

  // fetchUserProfile(){

  //   const userProfile = await DataStore.query(User,
  //     c => c.date_created('gt', AWSDateUtil.getStartOfDayAsTimeStamp())
  //     .date_created('le', AWSDateUtil.getEndOfDayAsTimeStamp())
  //     .entry_type('eq', "Text"));

  // }

  render() {
    return (
      <div className="container">
        <main>
          {/* <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button> */}
          <h1>Home Page</h1>
          {/* <DefaultHeadingExample /> */}
          <Frame418 />
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

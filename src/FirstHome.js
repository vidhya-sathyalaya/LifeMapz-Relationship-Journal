/*
This page is same as the contents in U_61_NavBar_FrontPage App.js.
*/

import './App.css';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";

import React, { useEffect, useState } from "react";

import awsconfig from './aws-exports';
import { Frame425, NavBar, Newfooter } from './ui-components_frontpage';
import { FrontPage1 } from './ui-components_frontpage';
import { Footer1 } from './ui-components_frontpage';
import  CompleteSignup from './CompleteSignup';
import { 
  Frame418 
} from './ui-components_frontpage';

Amplify.configure(awsconfig);


function FirstHome() {

  const [isUser, setIsUser] = useState(false);

  // npm install i aws-sdk --save 
  // npm install i util
  var AWS = require('aws-sdk');
  // Set the region, access key and secret key of the IAM AWS user
  AWS.config.update({
    region: 'us-east-1',
    accessKeyId: "AKIAUAO4TAFGMC46A2OF",
    secretAccessKey: "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"
  });

  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient();

  async function getUserData()
  {
    // fetching current user data with Auth
    const authenticatedUser = await Auth.currentAuthenticatedUser();

  //   const resolvedProm = docClient.query({
  //     TableName: 'User-fmtgiqoe4fgvtp6svt46tmljhq-dev',
  //     IndexName: 'byEmail' ,
  //     KeyConditionExpression: "email = :email",
  //     ExpressionAttributeValues: {
  //       ":email": "mocase5887@votooe.com",
  //      }
  //   })
  //   .promise();

  //   let thenProm = resolvedProm.then(value => {
  //     console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
  //     return value;
  //   });

  // console.log(thenProm.value);

  // only call the api if the authenitacted user is found and hence found its email
  if (authenticatedUser) {
    try {
        var params = {
          TableName: 'User-fmtgiqoe4fgvtp6svt46tmljhq-dev',
          IndexName: 'byEmail' ,
          KeyConditionExpression: "email = :email",
          ExpressionAttributeValues: {
            ":email": authenticatedUser.attributes.email,
          }
        };
        var result = await docClient.query(params).promise()

        console.log(result);

        if (result.Items[0]){
          saveDetailsToSession(result.Items[0]);
          setIsUser(true);
        }else{
          setIsUser(false);
        }
        // var fname = result.Items[0].fname ;
        // console.log(fname);
        // console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
      }
  }
  else{
    console.log("User not authenticated");
  }
}

// function to save user details to the session storage
  function saveDetailsToSession(userObject){
   console.log(userObject);
   sessionStorage.setItem('userID', userObject.id);
   sessionStorage.setItem('userEmail', userObject.email);
   sessionStorage.setItem('userFname', userObject.fname);
   sessionStorage.setItem('userLname', userObject.lname);
   sessionStorage.setItem('journalID', userObject.journalID);
  }

    // useEffect is just like compoenent did mount for function based component, which will be executed after page loading
    useEffect(() => {
      getUserData();
  }, []);

  const imageOverrides = {
    "image":{
       src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
    },
   }
   const fpg1 = {
     "image 2":{
       src: "https://i.ibb.co/xfyV5Dd/Screen-Shot-2022-03-18-at-1-15-07-PM.png",
     },
   }
 
   const fott1 ={
     "image 1":{
       src: "https://static.vecteezy.com/system/resources/previews/002/448/934/non_2x/couple-chatting-in-the-smartphone-screen-virtual-relationship-dating-app-vector.jpg"
     },
   }

   const username = {
    name : sessionStorage.getItem('userFname') + " " + sessionStorage.getItem('userLname'),
 }

   if (isUser){
    return (
      // <AmplifyProvider>
          <div className='App'>
            {/* <p align="center"> Relationship Journal</p> */}
            <NavBar overrides={[imageOverrides, username]} />
         
          <div>
            {/* <FrontPage1 overrides={[fpg1, {"isUserProfile" : isUser}]}/> */}
            <Frame425 overrides={[fpg1, {"isUserProfile" : isUser}, {journalID : sessionStorage.getItem('journalID')}]}/>
            {/* took from aish branch <Frame425 overrides={fpg1}/> */}
            <Newfooter></Newfooter>
          </div>
          </div>
        // </AmplifyProvider>
    );
   }
   else{
    return (
      <div className='App'>
      <NavBar overrides={[imageOverrides, username]} />
        <div>
        <CompleteSignup/>
        <Newfooter></Newfooter>
      </div>
    </div>
      )
   }
}

export default FirstHome;

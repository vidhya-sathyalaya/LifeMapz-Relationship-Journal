import { Authenticator, Button, useAuthenticator } from "@aws-amplify/ui-react";
// import { DefaultHeadingExample } from "./Test.js";
import Amplify, { Auth } from 'aws-amplify';

import React, {useState} from "react";
import awsconfig from './aws-exports';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {RadioGroupField , Radio, Text, TextField, View } from "@aws-amplify/ui-react";
import AWSDateUtil from "./util";

// import  Frame418  from './Frame418';

// importing datastore to do an entry
import { DataStore } from '@aws-amplify/datastore';

import { API, graphqlOperation } from 'aws-amplify';

// importing mutations for creations
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

// const { signOut, user } = useAuthenticator();


class CompleteSignup extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createProfile = this.createProfile.bind(this);

    this.isUserProfileCreated = false;

    this.state = {
      id: '',
      cognito_username: '' ,
      fname: '',
      lname: '',
      email:'',
      dob:'',
      gender:'',  
      // createdAt: '',
    };
  }

  async getUserData()
  {
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
  // fetching current user data with Auth
  const authenticatedUser = await Auth.currentAuthenticatedUser();

  // only call the api if the authenitacted user is found and hence found its email
  if (authenticatedUser) {
    try {
        var params = {
          TableName: 'User-fmtgiqoe4fgvtp6svt46tmljhq-dev',
          Key: {
            id: authenticatedUser.attributes.email,
          },
        };
        var result = await docClient.get(params).promise()

        // console.log("here");
        // console.log(result);

        if (result.Item == null){
          this.isUserProfileCreated = false;
        }else{
          this.isUserProfileCreated = true;
        }

    } catch (error) {
        console.error(error);
        this.isUserProfileCreated = false;
      }
  }
  else{
    console.log("User not authenticated");
    this.isUserProfileCreated = false;
  }
}
  

  componentDidMount()
    {
        this.getUserData();
        console.log(this.isUserProfileCreated);
    }

  getCurrentUserInfo() {
      Auth.currentUserInfo().then(user => {
      // this.setState({user});
      // testing and printing what is in user object
      console.log(user.username);
      this.setState({cognito_username : user.username});
      this.setState({email : user.attributes.email});
      this.setState({id: user.attributes.email});
      });
      // this.setState({createdAt: AWSDateUtil.getCurrentAWSDate()});
    }

    onChangeFname(e) {
        this.setState({
            fname: e.target.value
        });
    }

    onChangeLname(e) {
        this.setState({
            lname: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            dob: e.target.value
        });
    }

    onChangeGender(e) {
      this.setState({
        gender: e.target.value
    });
    }

   handleSubmit(){
     console.log("User Profile" + this.isUserProfileCreated)
     if(this.isUserProfileCreated){
       console.log("HEre");
       this.saveProfile();
     }
     else{
       this.createProfile();
     }
   }

   async createProfile(){

    const authenticatedUser = await Auth.currentAuthenticatedUser();

    var params = {
      id: authenticatedUser.attributes.email,
      email: authenticatedUser.attributes.email,
      cognito_username: authenticatedUser.username ,
      fname: this.state.fname,
      lname: this.state.lname,
      dob: this.state.dob,
      gender: this.state.gender,
      journalID: 'undefined',
    }

    try{
      const savedProfile = await API.graphql({ query: mutations.createUser, variables: {input: params}});
      console.log(savedProfile);
      }
      catch(err){
        console.log(err);
      }
   }

    async saveProfile() {

      const authenticatedUser = await Auth.currentAuthenticatedUser();

      var params = {
        id: authenticatedUser.attributes.email,
        email: authenticatedUser.attributes.email,
        cognito_username: authenticatedUser.username ,
        fname: this.state.fname,
        lname: this.state.lname,
        dob: this.state.dob,
        gender: this.state.gender,
      }

      try{
      const savedProfile = await API.graphql({ query: mutations.updateUser, variables: {input: params}});
      console.log(savedProfile);
      }
      catch(err){
        console.log(err);
      }
    }

  render() {
    return (
        <View
          width="658px"
          height="750px"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(245,187,199,1)"

        >
          <TextField
            display="flex"
            gap="4px"
            position="absolute"
            top="98px"
            left="50px"
            direction="column"
            width="300px"
            padding="0px 0px 0px 0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isMultiline={false}
            label="First Name"
            placeholder="Enter your first name"
            value= {this.state.fname}
            onChange={this.onChangeFname}
          ></TextField>
          <TextField
            display="flex"
            gap="4px"
            position="absolute"
            top="200px"
            left="50px"
            direction="column"
            width="300px"
            padding="0px 0px 0px 0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isMultiline={false}
            label="Last Name"
            placeholder="Enter your last name"
            value= {this.state.lname}
            onChange={this.onChangeLname}
          ></TextField>
          <TextField
            display="flex"
            gap="4px"
            position="absolute"
            top="402px"
            left="50px"
            direction="column"
            width="300px"
            padding="0px 0px 0px 0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            isMultiline={false}
            label="Date of Birth"
            placeholder="MM/DD/YYYY"
            value= {this.state.dob}
            onChange={this.onChangeDate}
          ></TextField>
            {/* EDIT STARTS */}
            <RadioGroupField
            name="gender"
            direction="column"
            onChange={this.onChangeGender}
            >
            <Radio 
            key="MALE"
            value="MALE"
            display="flex"
            gap="16px"
            position="absolute"
            top="349px"
            left="112px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="default"
            >Male
            </Radio>
            <Radio
            key="FEMALE"
            value="FEMALE"
            display="flex"
            gap="16px"
            position="absolute"
            top="349px"
            left="266px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="default"
          >Female
          </Radio>
            </RadioGroupField>

            {/* EDIT ENDS */}

          {/* <Radio
            display="flex"
            gap="16px"
            position="absolute"
            top="349px"
            left="112px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="default"
            value="MALE"
            // onChange={this.onGenderChange}
          ></Radio>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="300px"
            position="absolute"
            top="45.2%"
            bottom="52.13%"
            left="calc(50% - 150px - 120px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Male"
          ></Text>
          <Radio
            display="flex"
            gap="16px"
            position="absolute"
            top="349px"
            left="266px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="0px 0px 0px 0px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="default"
          ></Radio>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="300px"
            position="absolute"
            top="45.25%"
            bottom="52.08%"
            left="calc(50% - 150px - -5px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Female"
          ></Text> */}
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="300px"
            position="absolute"
            top="40.27%"
            bottom="52.73%"
            left="calc(50% - 150px - 129px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Gender"
          ></Text>
          <View
            width="227px"
            height="62px"
            position="absolute"
            top="548px"
            left="224px"
            overflow="hidden"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(102,0,0,1)"
          >
            <Button
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="16px"
              left="58px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Save Profile"
              onSubmit={this.handleSubmit}
              onClick = {this.handleSubmit}
            ></Button>
          </View>
          <Text
            fontFamily="Jaldi"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="568px"
            height="42px"
            position="absolute"
            bottom="684px"
            right="45px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            backgroundColor="white"
            className="amplify-heading"
            children="Complete User profile"
          ></Text>
        </View>
      );
  }
}

export default CompleteSignup;
/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";

import * as queries from './graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

// experimenting with document client
import { Auth } from 'aws-amplify';

import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ViewProfile(props) {
  const { profileconn, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/editprofile",
  });

  const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognito_username
      fname
      lname
      email
      dob
      gender
      JournalEntries {
        nextToken
        startedAt
      }
      journalID
    }
  }
`;


  var AWS = require('aws-sdk');
  // Set the region 
  AWS.config.update({
    region: 'us-east-1',
    accessKeyId: "AKIAUAO4TAFGMC46A2OF",
    secretAccessKey: "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"
  });

  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient();

  async function logSingleItem(){

    // var params = {
    //   TableName: 'User-fmtgiqoe4fgvtp6svt46tmljhq-dev',
    //   Key: {
    //     email:"mocase5887@votooe.com",
    //   },
    // };

    // try {
    //   var result = await docClient.get(params).promise()
    //   console.log(JSON.stringify(result))
    // } catch (error) {
    //     console.error(error);
    // }

    // docClient
    // .scan({
    //   TableName: "User-fmtgiqoe4fgvtp6svt46tmljhq-dev",
    // })
    // .promise()
    // .then(data => console.log(data.Items))
    // .catch(console.error)

    // get query with id working
    // docClient
    // .get({
    //   TableName: "User-fmtgiqoe4fgvtp6svt46tmljhq-dev",
    //   Key: {
    //     // email:"mocase5887@votooe.com",
    //     id: "0fc76543-c384-45d4-8502-9e76982a62ab", // id is the Partition Key, '123' is the value of it
    //   },
    // })
    // .promise()
    // .then(data => console.log(data.Item))
    // .catch(console.error)

    // successfully queried database using email index
    docClient
    .query({
      TableName: 'User-fmtgiqoe4fgvtp6svt46tmljhq-dev',
      IndexName: 'byEmail' ,
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: {
        ":email": sessionStorage.getItem('userEmail'),
       }
    })
    .promise()
    .then(data => console.log(data.Items))
    .catch(console.error);

}

  // declaring react hooks
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  

  // this function is just used to fetch the full name of the user using graphql
  const getUserInfo = async () => {
    const user = await API.graphql({ query: getUser , variables: { id : sessionStorage.getItem('userID') }});
    console.log("[getFromName]");
    setFName(user.data.getUser.fname);
    setLName(user.data.getUser.lname);
    setDOB(user.data.getUser.dob);
    setEmail(user.data.getUser.email);
    setGender(user.data.getUser.gender);
  };


  // useEffect is just like compoenent did mount for function based component
  useEffect(() => {
    // storeUserID();
    getUserInfo();
    // logSingleItem();
    // find();
}, []);


  return (
    <View
      width="1512px"
      height="673px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(227,155,172,0.24), rgba(79,93,223,0.15))"
      color="grey"
      {...rest}
      {...getOverrideProps(overrides, "ViewProffile")}
    >
      <Icon
        width="24px"
        height="24px"
        position="absolute"
        top="294px"
        left="303px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M10 7L9.06 9.06L7 10L9.06 10.94L10 13L10.94 10.94L13 10L10.94 9.06L10 7ZM18 2L14.83 2L13 0L7 0L5.17 2L2 2C0.9 2 0 2.9 0 4L0 16C0 17.1 0.9 18 2 18L18 18C19.1 18 20 17.1 20 16L20 4C20 2.9 19.1 2 18 2ZM18 16L2 16L2 4L6.05 4L6.64 3.35L7.88 2L12.12 2L13.36 3.35L13.95 4L18 4L18 16ZM10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 13C8.35 13 7 11.65 7 10C7 8.35 8.35 7 10 7C11.65 7 13 8.35 13 10C13 11.65 11.65 13 10 13Z",
            fill: "rgba(13,26,38,1)",
            fillRule: "nonzero",
            style: { transform: "translate(8.33%, 12.5%)" },
          },
        ]}
        type="camera_enhance"
        fontSize="24px"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="143px"
        left="414px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profileconn?.fname}
        {...getOverrideProps(overrides, "Fname")}
      >{fname}</Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="143px"
        left="509px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profileconn?.lname}
        {...getOverrideProps(overrides, "Lname")}
      >{lname}</Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="198px"
        left="509px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profileconn?.email}
        {...getOverrideProps(overrides, "id here")}
      >{email}</Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="197px"
        left="414px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Email: "
        {...getOverrideProps(overrides, "Email:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="254px"
        left="509px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profileconn?.id}
        {...getOverrideProps(overrides, "gender here")}
      >{gender}</Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="252px"
        left="414px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Gender: "
        {...getOverrideProps(overrides, "Gender:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="309px"
        left="509px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={profileconn?.dob}
        {...getOverrideProps(overrides, "dobhere")}
      >{dob}</Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="18px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.41px"
        position="absolute"
        top="309px"
        left="414px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Birth date: "
        {...getOverrideProps(overrides, "Birth date:")}
      ></Text>
      <Image
        width="578px"
        height="524px"
        position="absolute"
        top="149px"
        left="934px"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/1709bXQ/111.png"
        {...getOverrideProps(overrides, "pngegg 2")}
      ></Image>
      <Button
        display="flex"
        position="absolute"
        top="58.99%"
        bottom="35.32%"
        left="17.46%"
        right="68.1%"
        direction="row"
        width="218.31px"
        height="38.26px"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        backgroundColor="rgba(102,0,0,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Edit Profile"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="169.01px"
        height="170px"
        position="absolute"
        top="152px"
        left="164px"
        borderRadius="84.50292205810547px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "28530 8")}
      ></Image>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";

import * as queries from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

// experimenting with document client
import { Auth } from 'aws-amplify';



export default function ViewProfile(props) {

  var AWS = require('aws-sdk');
  // Set the region 
  AWS.config.update({
    region: 'us-east-1',
    accessKeyId: "AKIAUAO4TAFGMC46A2OF",
    secretAccessKey: "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"
  });

  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

  async function logSingleItem(){

    var params = {
      TableName: 'User-fmtgiqoe4fgvtp6svt46tmljhq-dev',
      Key: {
        "email":"mocase5887@votooe.com"
      },
    };

    try {
      var result = await docClient.get(params).promise()
      console.log(JSON.stringify(result))
    } catch (error) {
        console.error(error);
    }
}

  // declaring react hooks
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  

  // this function is just used to fetch the full name of the user
  const getUserInfo = async () => {
    const user = await API.graphql({ query: queries.getUser , variables: { id : sessionStorage.getItem('userID') }});
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
    logSingleItem();
}, []);



  return (
    <View
      width="935px"
      height="598px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(227,155,172,0.24), rgba(79,93,223,0.15))"
      color="grey"
    >
      <Icon
        width="170px"
        height="170px"
        viewBox={{ minX: 0, minY: 0, width: 170, height: 170 }}
        paths={[
          {
            d: "M170 85C170 131.944 131.944 170 85 170C38.0558 170 0 131.944 0 85C0 38.0558 38.0558 0 85 0C131.944 0 170 38.0558 170 85Z",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="69px"
        left="63px"
      ></Icon>
      <Icon
        width="24px"
        height="24px"
        position="absolute"
        top="209px"
        left="202px"
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
        top="62px"
        left="334px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
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
        top="62px"
        left="430px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
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
        top="117px"
        left="429px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="id here"
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
        top="116px"
        left="334px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Email: "
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
        top="173px"
        left="430px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
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
        top="171px"
        left="334px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Gender: "
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
        top="228px"
        left="434px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
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
        top="228px"
        left="334px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Birth Date: "
      ></Text>
      <Image
        width="578px"
        height="524px"
        position="absolute"
        top="69px"
        left="406px"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/1709bXQ/111.png"
      ></Image>
      <Button
        display="flex"
        position="absolute"
        top="44.31%"
        bottom="50%"
        left="8.56%"
        right="77.01%"
        direction="row"
        width="135px"
        height="34px"
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
      ></Button>
    </View>
  );
}

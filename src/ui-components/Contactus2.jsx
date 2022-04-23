/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Contactus2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1544px"
      height="752px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(244,186,199,0.17), rgba(0,26,255,0.12))"
      {...rest}
      {...getOverrideProps(overrides, "Contactus2")}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="56.25px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="754px"
        height="88px"
        position="absolute"
        top="70px"
        left="395px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="We’d Love to Hear From You!"
        {...getOverrideProps(overrides, "We\u2019d Love to Hear From You!")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="1205px"
        height="47px"
        position="absolute"
        top="135px"
        left="169px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Whether you‘re curious about features, product or anythong we’re ready to answer any and all questions. "
        {...getOverrideProps(
          overrides,
          "Whether you\u2018re curious about features, product or anythong we\u2019re ready to answer any and all questions."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="447px"
        height="179px"
        position="absolute"
        top="264px"
        left="772px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Where we are:&#xA;&#xA;Developed by ASU team for Lifemapz.&#xA;&#xA;7001 E Williams Field Rd,&#xA;Mesa, AZ 85212&#xA;"
        {...getOverrideProps(
          overrides,
          "Where we are: Developed by ASU team for Lifemapz. 7001 E Williams Field Rd, Mesa, AZ 85212"
        )}
      ></Text>
      <Image
        width="609px"
        height="407px"
        position="absolute"
        top="345px"
        left="935px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "contact-us 2")}
      ></Image>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="250px"
        left="85px"
        direction="column"
        width="228px"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Fname"
        {...getOverrideProps(overrides, "TextField29823347")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="339px"
        left="85px"
        direction="column"
        width="505px"
        height="64px"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="E mail"
        {...getOverrideProps(overrides, "TextField29823361")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="250px"
        left="362px"
        direction="column"
        width="228px"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Lname"
        {...getOverrideProps(overrides, "TextField29823354")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="432px"
        left="85px"
        direction="column"
        width="505px"
        height="172px"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={true}
        placeholder="Write Here..."
        label="Message"
        {...getOverrideProps(overrides, "TextField29823368")}
      ></TextField>
      <Button
        display="flex"
        gap="10px"
        position="absolute"
        top="633px"
        left="277px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        padding="12px 24px 12px 24px"
        backgroundColor="rgba(102,0,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import FrontPage1 from "./FrontPage1";
import { View } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
import Footer1 from "./Footer1";
export default function Component4(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component4")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, 'MacBook Pro 14" - 4')}
      >
        <FrontPage1
          position="absolute"
          top="9.78%"
          bottom="28.36%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "FrontPage1")}
        ></FrontPage1>
      </View>
      <NavBar
        display="flex"
        gap="20px"
        position="absolute"
        top="0.23%"
        bottom="90.3%"
        left="0%"
        right="0%"
        direction="row"
        width="1512px"
        justifyContent="center"
        alignItems="center"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <Footer1
        position="absolute"
        top="71.59%"
        bottom="-9.78%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1))"
        property1="Default"
        {...getOverrideProps(overrides, "Footer1")}
      ></Footer1>
    </View>
  );
}

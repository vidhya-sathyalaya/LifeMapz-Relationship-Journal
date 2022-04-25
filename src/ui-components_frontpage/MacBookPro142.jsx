/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import FrontPage1 from "./FrontPage1";
import Footer1 from "./Footer1";
import { Text, View } from "@aws-amplify/ui-react";
export default function MacBookPro142(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MacBookPro142")}
    >
      <NavBar
        display="flex"
        gap="20px"
        position="absolute"
        top="0px"
        left="0px"
        direction="row"
        width="1512px"
        justifyContent="center"
        alignItems="center"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(3,0,0,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <FrontPage1
        position="absolute"
        top="9.47%"
        bottom="28.72%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "FrontPage1")}
      ></FrontPage1>
      <View
        width="855px"
        height="282px"
        position="absolute"
        top="700px"
        left="657px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 423")}
      >
        <Footer1
          position="absolute"
          top="-46.43%"
          bottom="-11.9%"
          left="35.05%"
          right="0%"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1))"
          property1="Default"
          {...getOverrideProps(overrides, "Footer1")}
        ></Footer1>
      </View>
      <View
        width="957px"
        height="282px"
        position="absolute"
        top="700px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(0,26,255,0.8), rgba(244,186,199,0.84))"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <Text
          fontFamily="Jaldi"
          fontSize="40px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="46.875px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="107px"
          left="67px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Want to Share your thoughts? we are here to help you."
          {...getOverrideProps(
            overrides,
            "Want to Share your thoughts? we are here to help you."
          )}
        ></Text>
      </View>
    </View>
  );
}

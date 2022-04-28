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
      <FrontPage1
        position="absolute"
        top="9.47%"
        bottom="28.72%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(26,2,2,1)"
        {...getOverrideProps(overrides, "FrontPage1")}
      ></FrontPage1>
    </View>
  );
}

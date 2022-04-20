/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Component6 from "./Component6";
import { View } from "@aws-amplify/ui-react";
export default function Frame3836(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="350px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame3836")}
    >
      <Component6
        width="960px"
        height="350px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 6")}
      ></Component6>
    </View>
  );
}

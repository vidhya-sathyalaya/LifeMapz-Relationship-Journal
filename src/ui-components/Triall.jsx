/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Triall(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="464px"
      height="253px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Triall")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="31.47%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.0625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="68px"
          height="18px"
          position="absolute"
          top="95px"
          left="112px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hello"
          {...getOverrideProps(overrides, "Hello")}
        ></Text>
      </View>
      <View
        position="absolute"
        top="3.16%"
        bottom="56.52%"
        left="77.59%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14.0625px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="29px"
          left="39px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hey"
          {...getOverrideProps(overrides, "Hey")}
        ></Text>
      </View>
    </View>
  );
}

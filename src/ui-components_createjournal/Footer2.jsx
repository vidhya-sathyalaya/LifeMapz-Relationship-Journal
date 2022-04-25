/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Sample11 from "./Sample11";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Footer2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="6647px"
      height="1848px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Footer2")}
    >
      <Sample11
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Sample11")}
      ></Sample11>
      <Image
        position="absolute"
        top="7.09%"
        bottom="7.09%"
        height="85.81%"
        left="2.13%"
        right="2.11%"
        width="95.76%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Screen Shot 2022-03-18 at 1.36")}
      ></Image>
      <Text
        fontFamily="Reenie Beanie"
        fontSize="288px"
        fontWeight="400"
        color="rgba(109,129,35,1)"
        lineHeight="337.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="21.45%"
        bottom="65.85%"
        left="7.36%"
        right="54.37%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create a journal today"
        {...getOverrideProps(overrides, "Create a journal today")}
      ></Text>
    </View>
  );
}

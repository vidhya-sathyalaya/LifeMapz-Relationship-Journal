/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import One from "./One";
import Two from "./Two";
import { View } from "@aws-amplify/ui-react";
export default function Tp(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="720px"
      height="357px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Tp")}
    >
      <One
        position="absolute"
        top="0%"
        bottom="20.17%"
        left="0%"
        right="56.25%"
        {...getOverrideProps(overrides, "one")}
      ></One>
      <Two
        position="absolute"
        top="22.69%"
        bottom="0%"
        left="52.08%"
        right="0%"
        {...getOverrideProps(overrides, "two")}
      ></Two>
    </View>
  );
}

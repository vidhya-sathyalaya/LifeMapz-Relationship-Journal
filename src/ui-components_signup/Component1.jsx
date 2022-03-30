/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1200px"
      height="48px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Button
        position="absolute"
        padding="11px 23px 11px 23px"
        display="flex"
        top="0%"
        bottom="0%"
        left="33.33333333333333%"
        right="50%"
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        size="large"
        variation="default"
        color="grey"
        backgroundColor="black"
        children="Login"
        {...getOverrideProps(overrides, "View.Button[0]")}
      ></Button>
      <Button
        position="absolute"
        padding="11px 23px 11px 23px"
        display="flex"
        top="0%"
        bottom="0%"
        left="16.666666666666664%"
        right="66.66666666666666%"
        height="48px"
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        size="large"
        variation="default"
        color="grey"
        backgroundColor="black"
        children="SignUp"
        {...getOverrideProps(overrides, "View.Button[1]")}
      ></Button>
      <Button
        position="absolute"
        padding="11px 23px 11px 23px"
        display="flex"
        top="0%"
        bottom="0%"
        left="0%"
        right="83.33333333333334%"
        border="1px SOLID rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        size="large"
        variation="default"
        color="grey"
        backgroundColor="black"
        children="Home"
        {...getOverrideProps(overrides, "View.Button[2]")}
      ></Button>
      <Button
        position="absolute"
        padding="11px 23px 11px 23px"
        display="flex"
        top="0%"
        bottom="0%"
        left="83.33333333333334%"
        right="0%"
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        size="large"
        variation="default"
        color="grey"
        backgroundColor="black"
        children="Contact Us"
        {...getOverrideProps(overrides, "View.Button[3]")}
      ></Button>
      <Button
        position="absolute"
        padding="11px 23px 11px 23px"
        display="flex"
        top="0%"
        bottom="0%"
        left="66.66666666666666%"
        right="16.666666666666664%"
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        size="large"
        variation="default"
        color="grey"
        backgroundColor="black"
        children="About Us"
        {...getOverrideProps(overrides, "View.Button[4]")}
      ></Button>
      <Button
        position="absolute"
        padding="11px 23px 11px 23px"
        display="flex"
        top="0%"
        bottom="0%"
        left="50%"
        right="33.33333333333333%"
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        size="large"
        variation="default"
        color="grey"
        backgroundColor="black"
        children="Write a Journal"
        {...getOverrideProps(overrides, "View.Button[5]")}
      ></Button>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavbarMenu from "./NavbarMenu";
import { View } from "@aws-amplify/ui-react";
export default function MenuItems(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="300px"
      height="129px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <NavbarMenu
        position="absolute"
        top="0px"
        left="590px"
        {...getOverrideProps(overrides, "View.NavbarMenu[0]")}
      ></NavbarMenu>
      <NavbarMenu
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.NavbarMenu[1]")}
      ></NavbarMenu>
      <NavbarMenu
        width="290px"
        position="absolute"
        top="0px"
        left="300px"
        {...getOverrideProps(overrides, "View.NavbarMenu[2]")}
      ></NavbarMenu>
      <NavbarMenu
        position="absolute"
        top="0px"
        left="891px"
        {...getOverrideProps(overrides, "View.NavbarMenu[3]")}
      ></NavbarMenu>
      <NavbarMenu
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "View.NavbarMenu[4]")}
      ></NavbarMenu>
    </View>
  );
}

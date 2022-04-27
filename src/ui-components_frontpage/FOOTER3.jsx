/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function FOOTER3(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1544px"
      height="175px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1))"
      {...rest}
      {...getOverrideProps(overrides, "FOOTER3")}
    >
      <Text
        fontFamily="Jaldi"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="323px"
        height="24px"
        position="absolute"
        top="39px"
        left="610px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Created with ♥ by:"
        {...getOverrideProps(overrides, "Created with \u2665 by:")}
      ></Text>
      <Image
        width="241px"
        height="74px"
        position="absolute"
        top="63px"
        left="556px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "SoftwareEngineering-LifeMapzRelationshipeJournal-Lifemapz 1"
        )}
      ></Image>
      <Image
        width="152px"
        height="64px"
        position="absolute"
        top="73px"
        left="836px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Arizona_State_University_logo_PNG4 1")}
      ></Image>
    </View>
  );
}

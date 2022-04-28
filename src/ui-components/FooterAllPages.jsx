/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function FooterAllPages(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1544px"
      height="222px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "FooterAllPages")}
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
        top="62px"
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
        top="86px"
        left="556px"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/Dp48svp/Software-Engineering-Life-Mapz-Relationshipe-Journal-Lifemapz.jpg"
        {...getOverrideProps(
          overrides,
          "SoftwareEngineering-LifeMapzRelationshipeJournal-Lifemapz 2"
        )}
      ></Image>
      <Image
        width="152px"
        height="64px"
        position="absolute"
        top="96px"
        left="836px"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/J2wppg3/clipart192848.png"
        {...getOverrideProps(overrides, "Arizona_State_University_logo_PNG4 2")}
      ></Image>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Newfooter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="282px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Newfooter")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="36.71%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Frame 424")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="37.5px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="110px"
          left="251px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Want to share your thoughts? &#xA;We are here to help you"
          {...getOverrideProps(
            overrides,
            "Want to share your thoughts? We are here to help you"
          )}
        ></Text>
      </View>
      <Image
        position="absolute"
        top="51.16%"
        bottom="22.15%"
        height="26.7%"
        left="87.53%"
        right="1.1%"
        width="11.37%"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/J2wppg3/clipart192848.png"
        {...getOverrideProps(overrides, "Rectangle 1169")}
      ></Image>
      <Image
        position="absolute"
        top="46.49%"
        bottom="22.15%"
        height="31.36%"
        left="65.01%"
        right="15.01%"
        width="19.97%"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/Dp48svp/Software-Engineering-Life-Mapz-Relationshipe-Journal-Lifemapz.jpg"
        {...getOverrideProps(
          overrides,
          "SoftwareEngineering-LifeMapzRelationshipeJournal-Lifemapz 3"
        )}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.65px"
        position="absolute"
        top="22.34%"
        bottom="67.49%"
        left="76.23%"
        right="11.27%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Made with ♥ by"
        {...getOverrideProps(overrides, "Made with \u2665 by")}
      ></Text>
    </View>
  );
}

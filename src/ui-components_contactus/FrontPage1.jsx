/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function FrontPage1(props) {
  const { overrides, ...rest } = props;
  const createJournalOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/createjournal",
  });
  return (
    <View
      width="1520px"
      height="610px"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "FrontPage1")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Text
          fontFamily="JejuGothic"
          fontSize="36px"
          fontWeight="400"
          color="rgba(204,53,140,1)"
          lineHeight="25px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="377px"
          height="55px"
          position="absolute"
          bottom="347px"
          left="calc(50% - 188.5px - 503.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Connect with your&#xA;&#xA;&#xA;partner online"
          {...getOverrideProps(overrides, "Connect with your partner online")}
        ></Text>
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
          width="330px"
          height="44px"
          position="absolute"
          top="404px"
          left="92px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="To reignite your relationship, deepen communication&#xA;and strengthen your bond"
          {...getOverrideProps(
            overrides,
            "To reignite your relationship, deepen communication and strengthen your bond"
          )}
        ></Text>
        <View
          width="182px"
          height="62px"
          position="absolute"
          top="305px"
          left="171px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(102,0,0,1)"
          {...getOverrideProps(overrides, "Frame 2")}
        >
          <Text
            fontFamily="Jaldi"
            fontSize="20px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="21px"
            left="34px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Journal"
            onClick={() => {
              createJournalOnClick();
            }}
            {...getOverrideProps(overrides, "Create Journal")}
          ></Text>
        </View>
      </View>
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="35.12%"
        right="0%"
        width="64.88%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Frame419(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="768px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(244,186,199,0.17), rgba(0,26,255,0.03))"
      {...rest}
      {...getOverrideProps(overrides, "Frame419")}
    >
      <Button
        display="flex"
        gap="10px"
        position="absolute"
        top="688px"
        left="634px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        padding="12px 24px 12px 24px"
        backgroundColor="rgba(102,0,0,1)"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Invite your partner"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Image
        width="935px"
        height="482px"
        position="absolute"
        top="22px"
        left="288px"
        padding="0px 0px 0px 0px"
        src="https://i.ibb.co/x3c37Mg/222.png"
        {...getOverrideProps(overrides, "28530 1")}
      ></Image>
      <View
        width="935px"
        height="72px"
        position="absolute"
        top="504px"
        left="288px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 420")}
      >
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
          top="36px"
          left="268px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Invite your partner and write journal!!!"
          {...getOverrideProps(
            overrides,
            "Invite your partner and write journal!!!"
          )}
        ></Text>
        <View
          width="100px"
          height="100px"
          position="absolute"
          top="-28px"
          left="526px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 422")}
        ></View>
      </View>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="595px"
        left="854px"
        direction="column"
        width="300px"
        height="61px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Enter journal name"
        {...getOverrideProps(overrides, "TextField31343817")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="595px"
        left="390px"
        direction="column"
        width="300px"
        height="61px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Enter email id of your partner"
        {...getOverrideProps(overrides, "TextField31343824")}
      ></TextField>
    </View>
  );
}

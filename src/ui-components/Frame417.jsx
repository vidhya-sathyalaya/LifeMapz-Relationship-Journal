/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, View } from "@aws-amplify/ui-react";
export default function Frame417(props) {
  const { image, overrides, ...rest } = props;
  return (
    <View
      width="961px"
      height="1085px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame417")}
    >
      <Image
        width="963px"
        height="1085px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        src={image?.images}
        {...getOverrideProps(overrides, "GettyImages-1196354779-1200x814 1")}
      ></Image>
      <Button
        position="absolute"
        padding="8px 16px 8px 16px"
        display="flex"
        top="45px"
        left="372px"
        width="220px"
        height="50px"
        size="default"
        variation="primary"
        alignContent="center"
        children="Connect here"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

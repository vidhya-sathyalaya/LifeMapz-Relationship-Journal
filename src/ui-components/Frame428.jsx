/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, CheckboxField, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Frame428(props) {
  const { j, overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="500px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(244,186,199,1), rgba(0,26,255,0.3))"
      {...rest}
      {...getOverrideProps(overrides, "Frame428")}
    >
      <Button
        display="flex"
        position="absolute"
        top="75%"
        bottom="18.2%"
        left="48.08%"
        right="48.15%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        backgroundColor="rgba(102,0,0,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Post"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <CheckboxField
        display="flex"
        position="absolute"
        top="75.4%"
        bottom="19.8%"
        left="76.59%"
        right="5.45%"
        direction="row"
        width="271.53px"
        justifyContent="center"
        alignItems="center"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(229,229,229,1)"
        size="small"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
      <Icon
        position="absolute"
        top="76.8%"
        bottom="20.04%"
        left="69.31%"
        right="29.1%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M21 5L17.83 5L16 3L10 3L10 5L15.12 5L16.95 7L21 7L21 19L5 19L5 10L3 10L3 19C3 20.1 3.9 21 5 21L21 21C22.1 21 23 20.1 23 19L23 7C23 5.9 22.1 5 21 5ZM8 13C8 15.76 10.24 18 13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13ZM13 10C14.65 10 16 11.35 16 13C16 14.65 14.65 16 13 16C11.35 16 10 14.65 10 13C10 11.35 11.35 10 13 10ZM5 5L8 5L8 3L5 3L5 0L3 0L3 3L0 3L0 5L3 5L3 8L5 8L5 5Z",
            fill: "rgba(13,26,38,1)",
            fillRule: "nonzero",
            style: { transform: "translate(0%, 4.17%)" },
          },
        ]}
        type="add_a_photo"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.40625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="17%"
        bottom="34.8%"
        left="4.56%"
        right="5.42%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        backgroundColor="white"
        children="Write here"
        {...getOverrideProps(overrides, "Write here")}
      ></Text>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function HeroLayout4(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      justifyContent="center"
      overflow="hidden"
      position="relative"
      padding="160px 160px 160px 160px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout4")}
    >
      <Flex
        gap="24px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.49px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="LOREM IPSUM"
          {...getOverrideProps(overrides, "LOREM IPSUM")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="48px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ut enim ad minim veniam quis nostrud"
          {...getOverrideProps(
            overrides,
            "Ut enim ad minim veniam quis nostrud"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.130812001"
          )}
        ></Text>
        <Flex
          gap="8px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Form")}
        >
          <TextField
            display="flex"
            gap="4px"
            direction="column"
            shrink="0"
            height="36px"
            position="relative"
            padding="0px 0px 0px 0px"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            isMultiline={false}
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
          <Button
            display="flex"
            gap="10px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="36px"
            position="relative"
            borderRadius="4px"
            backgroundColor="rgba(4,125,149,1)"
            size="default"
            isDisabled={false}
            variation="primary"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          width="566px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.130812054"
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function CompleteProfile(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="548px"
      position="relative"
      padding="24px 0px 24px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="24px"
        direction="column"
        height="496px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Complete Profile"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Flex.Flex[0].Divider[0]")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          height="406px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <TextField
            width="592px"
            display="flex"
            shrink="0"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[0]"
            )}
          ></TextField>
          <TextField
            width="592px"
            display="flex"
            shrink="0"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[1]"
            )}
          ></TextField>
          <Flex
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[0]")}
          ></Flex>
          <Flex
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[1]")}
          ></Flex>
          <Divider
            height="3px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="large"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Divider[0]")}
          ></Divider>
          <Button
            gap="0"
            padding="8px 12px 8px 12px"
            display="flex"
            width="135px"
            shrink="0"
            size="small"
            variation="primary"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

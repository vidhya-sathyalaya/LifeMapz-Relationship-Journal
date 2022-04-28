/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Frame426(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="319px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame426")}
    >
      <Flex
        gap="16px"
        position="absolute"
        top="14px"
        left="14px"
        direction="column"
        width="935px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headline")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="870px"
          height="24px"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Nikhil S"
            {...getOverrideProps(overrides, "Nikhil S")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="1396px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="2nd December 2021"
            {...getOverrideProps(overrides, "2nd December 2021")}
          ></Text>
        </Flex>
      </Flex>
      <Image
        width="160px"
        height="160px"
        position="absolute"
        top="61px"
        left="786px"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        position="absolute"
        top="273px"
        left="14px"
        direction="row"
        width="939px"
        alignItems="flex-start"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Read more31693996")}
      >
        <Icon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[
            {
              d: "M8 0L6.59 1.41L12.17 7L0 7L0 9L12.17 9L6.59 14.59L8 16L16 8L8 0Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
          ]}
          type="arrow_forward"
          fontSize="24px"
          {...getOverrideProps(overrides, "Icon")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          letterSpacing="0.01px"
          width="899px"
          grow="1"
          basis="899px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Read more"
          {...getOverrideProps(overrides, "Read more31693998")}
        ></Text>
      </Flex>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="79px"
        left="246px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={true}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CardA from "./CardA";
import { Flex } from "@aws-amplify/ui-react";
export default function CardACopied(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardACopied")}
    >
      <CardA
        display="flex"
        gap="16px"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,85,102,1)"
        label="Find you partner"
        {...getOverrideProps(overrides, "CardA")}
      ></CardA>
    </Flex>
  );
}

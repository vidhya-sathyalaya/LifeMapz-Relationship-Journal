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
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <CardA
        backgroundColor="rgba(0,85.00004053115845,102.00000151991844,1)"
        display="flex"
        shrink="0"
        width="320px"
        label="Find you partner"
        {...getOverrideProps(overrides, "Flex.CardA[0]")}
      ></CardA>
    </Flex>
  );
}

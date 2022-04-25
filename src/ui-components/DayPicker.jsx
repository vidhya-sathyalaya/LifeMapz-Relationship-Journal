/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex } from "@aws-amplify/ui-react";
export default function DayPicker(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "DayPicker")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="520px"
        shrink="0"
        overflow="hidden"
        position="relative"
        border="1px SOLID rgba(204,204,204,1)"
        borderRadius="5px"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(251,251,251,1)"
        color="black"
        {...getOverrideProps(overrides, "dayPicker")}
      ></Flex>
    </Flex>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SocialA from "./SocialA";
import { Flex } from "@aws-amplify/ui-react";
export default function JournalPost(props) {
  const { journalentry, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "JournalPost")}
    >
      <SocialA
        display="flex"
        gap="16px"
        direction="column"
        width="960px"
        shrink="0"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SocialA")}
      ></SocialA>
    </Flex>
  );
}

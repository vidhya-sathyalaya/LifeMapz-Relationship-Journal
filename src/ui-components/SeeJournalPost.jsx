/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import PostCard from "./PostCard";
import { View } from "@aws-amplify/ui-react";
export default function SeeJournalPost(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="310px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SeeJournalPost")}
    >
      <PostCard
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(244,186,199,0.2), rgba(1,22,220,0.07))"
        {...getOverrideProps(overrides, "PostCard")}
      ></PostCard>
    </View>
  );
}

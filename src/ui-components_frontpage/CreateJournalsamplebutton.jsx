/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Journal } from "../models";
import Rectangle1 from "./Rectangle1";
import { Text, View } from "@aws-amplify/ui-react";
export default function CreateJournalsamplebutton(props) {
  const { createJournalButtonSample, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const createJournalOnClick = useDataStoreCreateAction({
    fields: {
      date_created: authAttributes["email"],
      is_active: authAttributes["email"],
      Users: "",
    },
    model: Journal,
  });
  return (
    <View
      width="415px"
      height="64px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CreateJournalsamplebutton")}
    >
      <Rectangle1
        position="absolute"
        top="0%"
        bottom="0%"
        left="16.14%"
        right="16.39%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></Rectangle1>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="20.31%"
        bottom="18.75%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Journal"
        onClick={() => {
          createJournalOnClick();
        }}
        {...getOverrideProps(overrides, "Create Journal")}
      ></Text>
    </View>
  );
}

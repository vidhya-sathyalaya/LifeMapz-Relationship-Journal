/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function Edit(props) {
  const { overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/viewprofile",
  });
  return (
    <View
      width="1512px"
      height="472px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundImage="linear-gradient(-90deg, rgba(244,186,199,0.17), rgba(0,26,255,0.12))"
      {...rest}
      {...getOverrideProps(overrides, "Edit")}
    >
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="280px"
        left="606px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Date of Birth"
        placeholder="Date of Birth"
        {...getOverrideProps(overrides, "TextField32103959")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="30px"
        left="606px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="First name"
        placeholder="First name"
        {...getOverrideProps(overrides, "TextField32103966")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="155px"
        left="606px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Last name"
        placeholder="Last name"
        {...getOverrideProps(overrides, "TextField32103973")}
      ></TextField>
      <Button
        display="flex"
        position="absolute"
        top="85.81%"
        bottom="6.09%"
        left="40.87%"
        right="44.69%"
        direction="row"
        width="218.31px"
        height="38.26px"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        backgroundColor="rgba(102,0,0,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Submit"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}

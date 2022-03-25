/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Radio, Text, TextField, View } from "@aws-amplify/ui-react";
export default function Frame418(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="658px"
      height="750px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,187,199,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame418")}
    >
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="98px"
        left="50px"
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
        {...getOverrideProps(overrides, "TextFieldich")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="200px"
        left="50px"
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
        {...getOverrideProps(overrides, "TextFieldxsx")}
      ></TextField>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="402px"
        left="50px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        label="Date of Birth"
        placeholder="MM/DD/YYYY"
        {...getOverrideProps(overrides, "Date of Birth")}
      ></TextField>
      <Radio
        display="flex"
        gap="16px"
        position="absolute"
        top="345px"
        left="96px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "Radiodwt")}
      ></Radio>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="300px"
        position="absolute"
        top="45.2%"
        bottom="52.13%"
        left="calc(50% - 150px - 120px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Male"
        {...getOverrideProps(overrides, "Male")}
      ></Text>
      <Radio
        display="flex"
        gap="16px"
        position="absolute"
        top="347px"
        left="237px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        size="large"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "Radioddb")}
      ></Radio>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="300px"
        position="absolute"
        top="45.25%"
        bottom="52.08%"
        left="calc(50% - 150px - -5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Female  "
        {...getOverrideProps(overrides, "Female")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="300px"
        position="absolute"
        top="40.27%"
        bottom="52.73%"
        left="calc(50% - 150px - 129px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Gender"
        {...getOverrideProps(overrides, "Gender")}
      ></Text>
      <View
        width="227px"
        height="62px"
        position="absolute"
        top="548px"
        left="224px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(102,0,0,1)"
        {...getOverrideProps(overrides, "Frame 3835")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="16px"
          left="58px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Save Profile"
          {...getOverrideProps(overrides, "Save Profile")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="568px"
        height="42px"
        position="absolute"
        bottom="684px"
        right="45px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Complete User profile"
        {...getOverrideProps(overrides, "Complete User profile")}
      ></Text>
    </View>
  );
}

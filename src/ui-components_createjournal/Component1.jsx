/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  PasswordField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1225px"
      height="676px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component1")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Login_Page_layout")}
      ></Flex>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="48.08%"
        bottom="41.27%"
        left="75.84%"
        right="7.84%"
        direction="row"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        level="6"
        {...getOverrideProps(overrides, "Heading28553204")}
      ></Heading>
      <Divider
        position="absolute"
        top="2.37%"
        bottom="2.37%"
        left="68.9%"
        right="30.94%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        size="default"
        orientation="vertical"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Button
        display="flex"
        gap="10px"
        position="absolute"
        top="67.75%"
        bottom="26.92%"
        left="29.55%"
        right="63.18%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        borderRadius="4px"
        backgroundColor="rgba(4,125,149,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button28553192")}
      ></Button>
      <Button
        display="flex"
        gap="10px"
        position="absolute"
        top="67.75%"
        bottom="26.92%"
        left="80.08%"
        right="12.16%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        borderRadius="4px"
        backgroundColor="rgba(4,125,149,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button28553206")}
      ></Button>
      <TextField
        display="flex"
        gap="4px"
        position="absolute"
        top="43.79%"
        bottom="50.3%"
        left="20.98%"
        right="54.53%"
        direction="column"
        width="300px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        isMultiline={false}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <PasswordField
        display="flex"
        gap="8px"
        position="absolute"
        top="55.47%"
        bottom="38.02%"
        left="20.98%"
        right="54.53%"
        direction="column"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="31.07%"
        bottom="61.83%"
        left="15.18%"
        right="48.82%"
        direction="row"
        width="441px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        level="4"
        {...getOverrideProps(overrides, "Heading28553155")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="31.95%"
        bottom="60.95%"
        left="74.69%"
        right="7.84%"
        direction="row"
        width="214px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        level="4"
        {...getOverrideProps(overrides, "Heading28553200")}
      ></Heading>
    </View>
  );
}

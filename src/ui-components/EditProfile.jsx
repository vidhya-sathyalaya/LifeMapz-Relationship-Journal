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
  Icon,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="24px 0px 24px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditProfile")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            fontSize="24px"
            {...getOverrideProps(overrides, "Icon")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
            {...getOverrideProps(overrides, "Edit Profiletne")}
          ></Text>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividerzit")}
        ></Divider>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 24px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload New Image"
            {...getOverrideProps(overrides, "Upload New Image")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            {...getOverrideProps(overrides, "TextFieldzoo")}
          ></TextField>
          <TextField
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            {...getOverrideProps(overrides, "TextFielddqm")}
          ></TextField>
          <TextField
            display="flex"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            size="default"
            variation="default"
            {...getOverrideProps(overrides, "TextFieldxog")}
          ></TextField>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividerlcs")}
        ></Divider>
        <Flex
          gap="10px"
          direction="column"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 24px"
          {...getOverrideProps(overrides, "Save")}
        >
          <Button
            padding="8px 16px 8px 16px"
            display="flex"
            width="fit-content"
            shrink="0"
            size="default"
            variation="primary"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

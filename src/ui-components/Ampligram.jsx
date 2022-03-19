/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function Ampligram(props) {
  const { journalEntry, user, textEntry, images, overrides, ...rest } = props;
  return (
    <Flex
      gap="8px"
      direction="column"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Ampligram")}
    >
      <Divider
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Dividerwrr")}
      ></Divider>
      <Flex
        gap="16px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="568px"
          alignItems="center"
          grow="1"
          basis="568px"
          height="65px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="65px"
            height="65px"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "imagedwc")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user?.fname}
            {...getOverrideProps(overrides, "Rene Brandel")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="fit-content"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Overflow")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="more_vert"
            fontSize="24px"
            {...getOverrideProps(overrides, "Iconepl")}
          ></Icon>
        </Flex>
      </Flex>
      <Image
        height="408px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        src={images?.images}
        {...getOverrideProps(overrides, "imagebnj")}
      ></Image>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Options")}
      >
        <Flex
          gap="24px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="favorite_border"
            fontSize="24px"
            {...getOverrideProps(overrides, "Iconepo")}
          ></Icon>
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="chat_bubble_outline"
            fontSize="24px"
            {...getOverrideProps(overrides, "Iconbgk")}
          ></Icon>
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="send"
            fontSize="24px"
            {...getOverrideProps(overrides, "Iconiwk")}
          ></Icon>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="472px"
          justifyContent="flex-end"
          alignItems="center"
          grow="1"
          basis="472px"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Bookmark")}
        >
          <Icon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="bookmark_border"
            fontSize="24px"
            {...getOverrideProps(overrides, "Iconmws")}
          ></Icon>
        </Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Dividerthw")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Area")}
        >
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
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={user?.fname}
            {...getOverrideProps(overrides, "Firstname Lastname")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={textEntry?.content}
            {...getOverrideProps(
              overrides,
              "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={journalEntry?.createdAt}
            {...getOverrideProps(overrides, "Timestamp")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

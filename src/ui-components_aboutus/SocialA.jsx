/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function SocialA(props) {
  const { journalentry, user, textEntry, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="960px"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SocialA")}
    >
      <Flex
        gap="40px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="712px"
          grow="1"
          basis="712px"
          height="208px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text")}
        >
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Headline")}
          >
            <Flex
              gap="16px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
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
                {...getOverrideProps(overrides, "Nikhil S")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92,102,112,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                width="1396px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={journalentry?.date_created}
                {...getOverrideProps(overrides, "2nd December 2021")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Article")}
          >
            <Icon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
              paths={[
                {
                  d: "M8 0L6.59 1.41L12.17 7L0 7L0 9L12.17 9L6.59 14.59L8 16L16 8L8 0Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                  style: { transform: "translate(16.67%, 16.67%)" },
                },
              ]}
              type="arrow_forward"
              fontSize="24px"
              {...getOverrideProps(overrides, "Icon17154341")}
            ></Icon>
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
              width="672px"
              grow="1"
              basis="672px"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={textEntry?.content}
              {...getOverrideProps(
                overrides,
                "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to build your UI faster with a set of ready-to-use UI components that are editable in Figma. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user."
              )}
            ></Text>
          </Flex>
        </Flex>
        <Image
          width="160px"
          height="160px"
          shrink="0"
          position="relative"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Read more17154348")}
      >
        <Icon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
          paths={[
            {
              d: "M8 0L6.59 1.41L12.17 7L0 7L0 9L12.17 9L6.59 14.59L8 16L16 8L8 0Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
          ]}
          type="arrow_forward"
          fontSize="24px"
          {...getOverrideProps(overrides, "Icon17154350")}
        ></Icon>
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
          textDecoration="underline"
          letterSpacing="0.01px"
          width="872px"
          grow="1"
          basis="872px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Read more"
          {...getOverrideProps(overrides, "Read more17154351")}
        ></Text>
      </Flex>
    </Flex>
  );
}

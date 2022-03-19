/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  Text,
} from "@aws-amplify/ui-react";
export default function CardG(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardG")}
    >
      <Image
        width="400px"
        height="351px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="560px"
        grow="1"
        basis="560px"
        height="353px"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Flex
            gap="8px"
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
              fontSize="14px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="464px"
              grow="1"
              basis="464px"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Information about this product"
              {...getOverrideProps(overrides, "Information about this product")}
            ></Text>
            <Icon
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              type="favorite_border"
              fontSize="24px"
              {...getOverrideProps(overrides, "Icon")}
            ></Icon>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="40px"
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
            children="Classic Long Sleeve T-Shirt"
            {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
          ></Text>
        </Flex>
        <Divider
          width="40px"
          shrink="0"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
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
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(
              overrides,
              "Information about this product.aay"
            )}
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
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(
              overrides,
              "Information about this product.qcp"
            )}
          ></Text>
        </Flex>
        <Badge
          padding="4px 8px 4px 8px"
          display="flex"
          width="fit-content"
          shrink="0"
          size="small"
          variation="default"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Bottom Row")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="36px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rating")}
          >
            <Rating
              display="flex"
              width="fit-content"
              shrink="0"
              height="36px"
              size="large"
              {...getOverrideProps(overrides, "Ratinggxf")}
            ></Rating>
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
              children="Reviews"
              {...getOverrideProps(overrides, "Reviews")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="189px"
            grow="1"
            basis="189px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$99/Night"
            {...getOverrideProps(overrides, "$99/Night")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

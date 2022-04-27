/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function YearPicker(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="324px"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(204,204,204,1)"
      borderRadius="5px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(251,251,251,1)"
      {...rest}
      {...getOverrideProps(overrides, "YearPicker")}
    >
      <Flex
        gap="0"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "header")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          height="24px"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "selector")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(115,115,115,1)"
            lineHeight="24px"
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="2020 - 2029"
            {...getOverrideProps(overrides, "date")}
          ></Text>
          <View
            width="16px"
            height="16px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "selectorIcon30883895")}
          >
            <Icon
              width="9.33349609375px"
              height="5.2919921875px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.33349609375,
                height: 5.2919921875,
              }}
              paths={[
                {
                  d: "M0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4.66667 3.72386L8.19526 0.195262C8.45561 -0.0650874 8.87772 -0.0650874 9.13807 0.195262C9.39842 0.455612 9.39842 0.877722 9.13807 1.13807L5.20878 5.06736C4.90938 5.36676 4.42396 5.36677 4.12455 5.06736L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="33.46%"
              bottom="33.46%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "line30883896")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "navigate")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "selectorIcon30883898")}
          >
            <Icon
              width="7.9375px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 7.9375, height: 14 }}
              paths={[
                {
                  d: "M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.81317 7.60104C7.36407 8.05014 6.63593 8.05015 6.18683 7.60104L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="46.09%"
              left="66.54%"
              right="-24.87%"
              transformOrigin="top left"
              transform="rotate(90deg)"
              {...getOverrideProps(overrides, "line30883899")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="24px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "selectorIcon30883900")}
          >
            <Icon
              width="7.9375px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 7.9375, height: 14 }}
              paths={[
                {
                  d: "M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.81317 7.60104C7.36407 8.05014 6.63593 8.05015 6.18683 7.60104L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z",
                  fill: "rgba(204,204,204,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="79.17%"
              bottom="-12.24%"
              left="33.46%"
              right="8.2%"
              transformOrigin="top left"
              transform="rotate(-90deg)"
              {...getOverrideProps(overrides, "line30883901")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "yearOptions")}
      ></Flex>
    </Flex>
  );
}

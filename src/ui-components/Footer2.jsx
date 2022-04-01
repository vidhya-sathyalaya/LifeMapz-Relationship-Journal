/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Sample11 from "./Sample11";
import { Icon, Image, SearchField, Text, View } from "@aws-amplify/ui-react";
export default function Footer2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="7377px"
      height="2354px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Footer2")}
    >
      <Sample11
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Sample11")}
      ></Sample11>
      <Image
        position="absolute"
        top="7.09%"
        bottom="7.09%"
        height="85.81%"
        left="2.13%"
        right="2.11%"
        width="95.76%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Screen Shot 2022-03-18 at 1.36")}
      ></Image>
      <SearchField
        display="flex"
        gap="4px"
        position="absolute"
        top="37.38%"
        bottom="46.81%"
        left="5.65%"
        right="59.97%"
        direction="column"
        width="2536.36px"
        padding="0px 0px 0px 0px"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Icon
        width="133.5px"
        height="133.5px"
        viewBox={{ minX: 0, minY: 0, width: 133.5, height: 133.5 }}
        paths={[
          {
            d: "M105.836 27.6642L74.3892 102.795L64.5992 77.43L62.2258 71.2742L56.1442 68.9008L30.705 59.0367L105.836 27.6642ZM133.5 0L0 55.8475L0 63.1158L50.73 82.77L70.31 133.5L77.5783 133.5L133.5 0Z",
            fill: "rgba(13,26,38,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="42.31%"
        bottom="52.02%"
        left="35.58%"
        right="62.61%"
        {...getOverrideProps(overrides, "Vector")}
      ></Icon>
      <Text
        fontFamily="Reenie Beanie"
        fontSize="288px"
        fontWeight="400"
        color="rgba(109,129,35,1)"
        lineHeight="337.5px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="21.45%"
        bottom="65.85%"
        left="7.36%"
        right="54.37%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create a journal today"
        {...getOverrideProps(overrides, "Create a journal today")}
      ></Text>
    </View>
  );
}

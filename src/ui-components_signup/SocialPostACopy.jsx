/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SocialA from "./SocialA";
import { Flex, View } from "@aws-amplify/ui-react";
import Socialpostatext from "./Socialpostatext";
export default function SocialPostACopy(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="960px"
      height="344px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Socialpostatext
        display="flex"
        gap="0"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "View.Socialpostatext[0]")}
      >
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          width="960px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View.Socialpostatext[0].Flex[0]")}
        >
          <SocialA
            display="flex"
            shrink="0"
            {...getOverrideProps(
              overrides,
              "View.Socialpostatext[0].Flex[0].SocialA[0]"
            )}
          ></SocialA>
        </Flex>
      </Socialpostatext>
    </View>
  );
}

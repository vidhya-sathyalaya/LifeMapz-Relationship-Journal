/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Footer1(props) {
  const { journalEntry, overrides, ...rest } = props;
  return (
    <View
      width="1544px"
      height="375px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,187,199,1)"
      {...rest}
      {...getOverrideProps(overrides, "Footer1")}
    >
      <Text
        fontFamily="JejuGothic"
        fontSize="36px"
        fontWeight="400"
        color="rgba(204,53,140,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="432px"
        height="144px"
        position="absolute"
        bottom="187px"
        left="calc(50% - 216px - 485px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create journal now and&#xA;&#xA; start writing your &#xA;&#xA;feelings with your partner"
        {...getOverrideProps(
          overrides,
          "Create journal now and start writing your feelings with your partner"
        )}
      ></Text>
      <Text
        fontFamily="Jaldi"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="323px"
        height="29px"
        position="absolute"
        top="223px"
        left="125px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Created with ♥ by:"
        {...getOverrideProps(overrides, "Created with \u2665 by:")}
      ></Text>
      <Image
        width="241px"
        height="74px"
        position="absolute"
        top="252px"
        left="71px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "SoftwareEngineering-LifeMapzRelationshipeJournal-Lifemapz 1"
        )}
      ></Image>
      <Image
        width="152px"
        height="64px"
        position="absolute"
        top="262px"
        left="351px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Arizona_State_University_logo_PNG4 1")}
      ></Image>
      <Image
        width="651px"
        height="375px"
        position="absolute"
        top="0px"
        left="893px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="165px"
        left="229px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(102,0,0,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Sign Up now"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Flex
        gap="0"
        position="absolute"
        top="48px"
        left="633px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="171px"
          height="56px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 12px 8px 12px"
          size="small"
          isDisabled={false}
          variation="link"
          color="maroon"
          children="Connect with us"
          {...getOverrideProps(overrides, "Buttondxa")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="95px"
          height="56px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 12px 8px 12px"
          size="small"
          isDisabled={false}
          variation="link"
          color="maroon"
          children="Journal"
          {...getOverrideProps(overrides, "Buttonjoa")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="107px"
          height="55px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 12px 8px 12px"
          size="small"
          isDisabled={false}
          variation="link"
          color="maroon"
          children="About us"
          {...getOverrideProps(overrides, "Buttonfac")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="112px"
          height="56px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 12px 8px 12px"
          size="small"
          isDisabled={false}
          variation="link"
          color="maroon"
          children="Facebook"
          {...getOverrideProps(overrides, "Buttongfj")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="116px"
          height="56px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 12px 8px 12px"
          size="small"
          isDisabled={false}
          variation="link"
          color="maroon"
          children="Instagram"
          {...getOverrideProps(overrides, "Buttonird")}
        ></Button>
      </Flex>
    </View>
  );
}

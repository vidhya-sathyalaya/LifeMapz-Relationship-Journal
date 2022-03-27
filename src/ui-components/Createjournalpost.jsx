/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Createjournalpost(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="935px"
      height="551px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,187,199,1)"
      {...rest}
      {...getOverrideProps(overrides, "Createjournalpost")}
    >
      <View
        width="910px"
        height="369px"
        position="absolute"
        top="91px"
        left="13px"
        borderRadius="39px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 1166")}
      ></View>
      <Text
        fontFamily="Indie Flower"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="882px"
        height="339px"
        position="absolute"
        top="106px"
        left="27px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        fontStyle=""
        children="Write here..."
        {...getOverrideProps(overrides, "Write here...")}
      ></Text>
      <Icon
        width="64px"
        height="66px"
        viewBox={{ minX: 0, minY: 0, width: 64, height: 66 }}
        paths={[
          {
            d: "M64 33C64 51.2254 49.6731 66 32 66C14.3269 66 0 51.2254 0 33C0 14.7746 14.3269 0 32 0C49.6731 0 64 14.7746 64 33Z",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="14px"
        left="13px"
        {...getOverrideProps(overrides, "Ellipse 3")}
      ></Icon>
      <Text
        fontFamily="Judson"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="31px"
        left="92px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Username"
        {...getOverrideProps(overrides, "Username")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="490px"
        left="412px"
        direction="row"
        width="111px"
        height="36px"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(102,0,0,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Post"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Icon
        width="46px"
        height="54.26px"
        position="absolute"
        top="445px"
        left="27px"
        overflow="hidden"
        transformOrigin="top left"
        transform="rotate(-90deg)"
        borderRadius="90px"
        padding="0px 0px 0px 0px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M17 9.5L5.5 9.5C3.29 9.5 1.5 7.71 1.5 5.5C1.5 3.29 3.29 1.5 5.5 1.5L18 1.5C19.38 1.5 20.5 2.62 20.5 4C20.5 5.38 19.38 6.5 18 6.5L7.5 6.5C6.95 6.5 6.5 6.05 6.5 5.5C6.5 4.95 6.95 4.5 7.5 4.5L17 4.5L17 3L7.5 3C6.12 3 5 4.12 5 5.5C5 6.88 6.12 8 7.5 8L18 8C20.21 8 22 6.21 22 4C22 1.79 20.21 0 18 0L5.5 0C2.46 0 0 2.46 0 5.5C0 8.54 2.46 11 5.5 11L17 11L17 9.5Z",
            fill: "rgba(13,26,38,1)",
            fillRule: "nonzero",
            style: { transform: "translate(6.25%, 27.08%)" },
          },
        ]}
        type="attachment"
        fontSize="46px"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
    </View>
  );
}

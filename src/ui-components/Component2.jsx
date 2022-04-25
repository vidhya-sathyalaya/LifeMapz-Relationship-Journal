/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, CheckboxField, Icon, View } from "@aws-amplify/ui-react";
export default function Component2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="935px"
      height="551px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component2")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(244,186,199,0.24), rgba(0,26,255,0.12))"
        {...getOverrideProps(overrides, "Create journal post")}
      ></View>
      <Button
        display="flex"
        position="absolute"
        top="88.93%"
        bottom="4.54%"
        left="44.06%"
        right="44.06%"
        direction="row"
        width="111px"
        height="36px"
        justifyContent="center"
        alignItems="center"
        borderRadius="4px"
        backgroundColor="rgba(102,0,0,1)"
        size="small"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Icon
        position="absolute"
        top="77.5%"
        bottom="18.15%"
        left="71.34%"
        right="26.1%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
        paths={[
          {
            d: "M21 5L17.83 5L16 3L10 3L10 5L15.12 5L16.95 7L21 7L21 19L5 19L5 10L3 10L3 19C3 20.1 3.9 21 5 21L21 21C22.1 21 23 20.1 23 19L23 7C23 5.9 22.1 5 21 5ZM8 13C8 15.76 10.24 18 13 18C15.76 18 18 15.76 18 13C18 10.24 15.76 8 13 8C10.24 8 8 10.24 8 13ZM13 10C14.65 10 16 11.35 16 13C16 14.65 14.65 16 13 16C11.35 16 10 14.65 10 13C10 11.35 11.35 10 13 10ZM5 5L8 5L8 3L5 3L5 0L3 0L3 3L0 3L0 5L3 5L3 8L5 8L5 5Z",
            fill: "rgba(13,26,38,1)",
            fillRule: "nonzero",
            style: { transform: "translate(0%, 4.17%)" },
          },
        ]}
        type="add_a_photo"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
      <CheckboxField
        display="flex"
        position="absolute"
        top="77.5%"
        bottom="18.15%"
        left="76.79%"
        right="2.14%"
        direction="row"
        width="197px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(229,229,229,1)"
        size="small"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "CheckboxField")}
      ></CheckboxField>
    </View>
  );
}

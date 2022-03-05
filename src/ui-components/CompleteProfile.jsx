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
  IconExpandMore,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function CompleteProfile(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="548px"
      position="relative"
      padding="24px 0px 24px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="24px"
        direction="column"
        height="496px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children="Complete Profile"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
        </Flex>
        <Divider
          width="640px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Flex.Flex[0].Divider[0]")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          height="406px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 24px 0px 24px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1]")}
        >
          <TextField
            label="First Name"
            width="592px"
            display="flex"
            shrink="0"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[0]"
            )}
          ></TextField>
          <TextField
            label="Last Name"
            width="592px"
            display="flex"
            shrink="0"
            size="default"
            variation="default"
            {...getOverrideProps(
              overrides,
              "Flex.Flex[0].Flex[1].TextField[1]"
            )}
          ></TextField>
          <Flex
            gap="4px"
            direction="column"
            width="300px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="300px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Gender"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[0].Text[0]"
              )}
            ></Text>
            <Flex
              gap="0"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[0].Flex[0]"
              )}
            >
              <Flex
                gap="10px"
                direction="row"
                height="36px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
                borderRadius="4px"
                padding="7px 11px 7px 11px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[0].Flex[0].Flex[0]"
                )}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
                  lineHeight="20px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  width="242px"
                  grow="1"
                  basis="242px"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  children="Please Select"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[1].Flex[0].Flex[0].Flex[0].Text[0]"
                  )}
                ></Text>
                <IconExpandMore
                  width="24px"
                  height="24px"
                  shrink="0"
                  overflow="hidden"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  type="expand_more"
                  fontSize="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[1].Flex[0].Flex[0].Flex[0].IconExpandMore[0]"
                  )}
                ></IconExpandMore>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="4px"
            direction="column"
            width="300px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Flex[1]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="300px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Date Of Birth"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[1].Text[0]"
              )}
            ></Text>
            <Flex
              gap="0"
              direction="column"
              shrink="0"
              width="300px"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[1].Flex[1].Flex[0]"
              )}
            >
              <Flex
                gap="10px"
                direction="row"
                width="300px"
                height="36px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
                borderRadius="4px"
                padding="7px 11px 7px 11px"
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[1].Flex[1].Flex[0].Flex[0]"
                )}
              >
                <Text
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="400"
                  color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
                  lineHeight="20px"
                  textAlign="left"
                  display="flex"
                  direction="column"
                  justifyContent="flex-start"
                  width="242px"
                  grow="1"
                  basis="242px"
                  alignSelf="stretch"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  children="Please Select"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[1].Flex[1].Flex[0].Flex[0].Text[0]"
                  )}
                ></Text>
                <IconExpandMore
                  width="24px"
                  height="24px"
                  shrink="0"
                  overflow="hidden"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
                  type="expand_more"
                  fontSize="24px"
                  {...getOverrideProps(
                    overrides,
                    "Flex.Flex[0].Flex[1].Flex[1].Flex[0].Flex[0].IconExpandMore[0]"
                  )}
                ></IconExpandMore>
              </Flex>
            </Flex>
          </Flex>
          <Divider
            width="592px"
            height="3px"
            shrink="0"
            alignSelf="stretch"
            size="large"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Divider[0]")}
          ></Divider>
          <Button
            gap="0"
            padding="8px 12px 8px 12px"
            display="flex"
            width="135px"
            shrink="0"
            size="small"
            variation="primary"
            children="Save"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[1].Button[0]")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

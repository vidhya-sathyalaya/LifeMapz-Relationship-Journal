/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, {useState, useEffect} from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame425(props) {
  
  const { overrides, ...rest } = props;
  const [isJournal, setIsJournal] = useState("false");

  console.log(overrides[1].isUserProfile);
  console.log(overrides);

  // var journalID = overrides[2].journalID;

  // if (journalID == "undefined"){
  //   setIsJournal(false);
  // }
  // else{
  //   setIsJournal(true);
  // }

  useEffect(() => {
    var journalID = overrides[2].journalID;
    if (journalID == "undefined"){
      setIsJournal(false);
    }
    else{
      setIsJournal(true);
    }
}, []);

  const createJournalOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/createjournal",
  });

  const openJournalOnClick = useNavigateAction({
    type: "url",
    url: "http://localhost:3000/journalentry",
  });


  return (
    <View
      width="1512px"
      height="650px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Frame425")}
    >
      <View
        width="182px"
        height="62px"
        position="absolute"
        top="294px"
        left="183px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(102,0,0,1)"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Text
          fontFamily="Jaldi"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="20px"
          textAlign="center"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="21px"
          left="34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create Journal"
          onClick={() => {
            if(!isJournal){
            createJournalOnClick();
            }
            else{
             openJournalOnClick();
            }
          }}
          {...getOverrideProps(overrides, "Create Journal")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(206,52,140,1)"
        fontStyle="italic"
        lineHeight="20px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="168px"
        left="131px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Connect with your &#xA;&#xA;partner online"
        {...getOverrideProps(overrides, "Connect with your partner online")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="45px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="754px"
        height="75px"
        position="absolute"
        top="534px"
        left="379px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Reignite your relationship, deepen communication,&#xA; &#xA;and strengthen your bond"
        {...getOverrideProps(
          overrides,
          "Reignite your relationship, deepen communication, and strengthen your bond"
        )}
      ></Text>
      <Image
        position="absolute"
        top="0%"
        bottom="26%"
        height="74%"
        left="48.15%"
        right="0%"
        width="51.85%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides[0], "image 2")}
      ></Image>
      <Icon
        width="161px"
        height="141px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 211.820068359375,
          height: 205.939453125,
        }}
        paths={[
          {
            d: "M82.707 34.578L82.3308 34.9074L82.6732 35.2984L83.0507 34.9411L82.707 34.578ZM0 34.578L-0.479972 34.4379L-0.551546 34.6831L-0.394794 34.8848L0 34.578ZM82.707 141L82.3122 141.307L82.7182 141.829L83.1099 141.296L82.707 141ZM160.891 34.578L161.294 34.874L161.382 34.7547L161.39 34.6068L160.891 34.578ZM83.0832 34.2486C58.2368 5.87352 39.0912 -0.229352 25.1838 3.99261C11.3269 8.19923 2.98238 22.5756 -0.479972 34.4379L0.479972 34.7181C3.90987 22.9671 12.1068 9.00752 25.4743 4.94949C38.7912 0.906794 57.553 6.61058 82.3308 34.9074L83.0832 34.2486ZM-0.394794 34.8848L82.3122 141.307L83.1018 140.693L0.394794 34.2712L-0.394794 34.8848ZM83.1099 141.296L161.294 34.874L160.488 34.282L82.304 140.704L83.1099 141.296ZM161.39 34.6068C161.769 28.0416 161.206 20.7969 159.088 14.6017C156.971 8.40628 153.277 3.20093 147.361 0.844445C141.45 -1.51027 133.45 -0.967971 122.836 4.03683C112.219 9.04279 98.9233 18.5413 82.3633 34.2149L83.0507 34.9411C99.5735 19.3027 112.781 9.88347 123.262 4.94133C133.746 -0.00196738 141.439 -0.438167 146.991 1.77346C152.539 3.98331 156.08 8.88914 158.142 14.925C160.205 20.9611 160.766 28.0677 160.392 34.5492L161.39 34.6068Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 34.578C6.89225 10.9647 33.0828 -22.0939 82.707 34.578C148.873 -28.0461 162.399 8.48463 160.891 34.578L82.707 141L0 34.578Z",
            fill: "rgba(255,124,148,0.17)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="619.69px"
        left="139px"
        transformOrigin="top left"
        transform="rotate(-33deg)"
        {...getOverrideProps(overrides, "Vector 431523904")}
      ></Icon>
      <Icon
        width="79.39px"
        height="69.45px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 105.458984375,
          height: 104.232421875,
        }}
        paths={[
          {
            d: "M40.7855 17.0307L40.4095 17.3603L40.7517 17.7506L41.129 17.394L40.7855 17.0307ZM0 17.0307L-0.479926 16.8904L-0.551662 17.1359L-0.394612 17.3377L0 17.0307ZM40.7855 69.4466L40.3909 69.7536L40.7967 70.2752L41.1883 69.7429L40.7855 69.4466ZM79.3405 17.0307L79.7433 17.3269L79.8311 17.2075L79.8397 17.0595L79.3405 17.0307ZM41.1614 16.7011C28.8914 2.70551 19.353 -0.40107 12.3455 1.72363C5.38824 3.83309 1.23579 11.0195 -0.479926 16.8904L0.479926 17.1709C2.163 11.4116 6.16764 4.64173 12.6356 2.68061C19.0534 0.73473 28.2083 3.44327 40.4095 17.3603L41.1614 16.7011ZM-0.394612 17.3377L40.3909 69.7536L41.1801 69.1395L0.394612 16.7236L-0.394612 17.3377ZM41.1883 69.7429L79.7433 17.3269L78.9377 16.7344L40.3827 69.1503L41.1883 69.7429ZM79.8397 17.0595C80.028 13.8047 79.7492 10.2013 78.6914 7.10952C77.6335 4.01748 75.7728 1.37784 72.7623 0.180114C69.7563 -1.0158 65.7336 -0.72191 60.4663 1.75866C55.1966 4.24037 48.6177 8.9387 40.442 16.6673L41.129 17.394C49.2675 9.70055 55.7579 5.08136 60.8924 2.66335C66.0293 0.244189 69.7455 0.056136 72.3926 1.10928C75.0352 2.16061 76.742 4.50102 77.7452 7.43324C78.7486 10.3657 79.0248 13.8308 78.8413 17.0018L79.8397 17.0595Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 17.0307C3.39879 5.40044 16.3142 -10.8819 40.7855 17.0307C73.4139 -13.8135 80.084 4.17893 79.3405 17.0307L40.7855 69.4466L0 17.0307Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="546px"
        left="1164.64px"
        transformOrigin="top left"
        transform="rotate(40deg)"
        {...getOverrideProps(overrides, "Vector 431523905")}
      ></Icon>
      <Icon
        width="79.39px"
        height="69.45px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 105.458984375,
          height: 104.232421875,
        }}
        paths={[
          {
            d: "M40.7855 17.0307L40.4095 17.3603L40.7517 17.7506L41.129 17.394L40.7855 17.0307ZM0 17.0307L-0.479926 16.8904L-0.551662 17.1359L-0.394612 17.3377L0 17.0307ZM40.7855 69.4466L40.3909 69.7536L40.7967 70.2752L41.1883 69.7429L40.7855 69.4466ZM79.3405 17.0307L79.7433 17.3269L79.8311 17.2075L79.8397 17.0595L79.3405 17.0307ZM41.1614 16.7011C28.8914 2.70551 19.353 -0.40107 12.3455 1.72363C5.38824 3.83309 1.23579 11.0195 -0.479926 16.8904L0.479926 17.1709C2.163 11.4116 6.16764 4.64173 12.6356 2.68061C19.0534 0.73473 28.2083 3.44327 40.4095 17.3603L41.1614 16.7011ZM-0.394612 17.3377L40.3909 69.7536L41.1801 69.1395L0.394612 16.7236L-0.394612 17.3377ZM41.1883 69.7429L79.7433 17.3269L78.9377 16.7344L40.3827 69.1503L41.1883 69.7429ZM79.8397 17.0595C80.028 13.8047 79.7492 10.2013 78.6914 7.10952C77.6335 4.01748 75.7728 1.37784 72.7623 0.180114C69.7563 -1.0158 65.7336 -0.72191 60.4663 1.75866C55.1966 4.24037 48.6177 8.9387 40.442 16.6673L41.129 17.394C49.2675 9.70055 55.7579 5.08136 60.8924 2.66335C66.0293 0.244189 69.7455 0.056136 72.3926 1.10928C75.0352 2.16061 76.742 4.50102 77.7452 7.43324C78.7486 10.3657 79.0248 13.8308 78.8413 17.0018L79.8397 17.0595Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 17.0307C3.39879 5.40044 16.3142 -10.8819 40.7855 17.0307C73.4139 -13.8135 80.084 4.17893 79.3405 17.0307L40.7855 69.4466L0 17.0307Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="198px"
        left="475.1px"
        transformOrigin="top left"
        transform="rotate(40deg)"
        {...getOverrideProps(overrides, "Vector 10")}
      ></Icon>
      <Icon
        width="79.39px"
        height="69.45px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 90.24737548828125,
          height: 82.177734375,
        }}
        paths={[
          {
            d: "M40.7855 17.0307L40.4095 17.3603L40.7517 17.7506L41.129 17.394L40.7855 17.0307ZM0 17.0307L-0.479926 16.8904L-0.551662 17.1359L-0.394612 17.3377L0 17.0307ZM40.7855 69.4466L40.3909 69.7536L40.7967 70.2752L41.1883 69.7429L40.7855 69.4466ZM79.3405 17.0307L79.7433 17.3269L79.8311 17.2075L79.8397 17.0595L79.3405 17.0307ZM41.1614 16.7011C28.8914 2.70551 19.353 -0.40107 12.3455 1.72363C5.38824 3.83309 1.23579 11.0195 -0.479926 16.8904L0.479926 17.1709C2.163 11.4116 6.16764 4.64173 12.6356 2.68061C19.0534 0.73473 28.2083 3.44327 40.4095 17.3603L41.1614 16.7011ZM-0.394612 17.3377L40.3909 69.7536L41.1801 69.1395L0.394612 16.7236L-0.394612 17.3377ZM41.1883 69.7429L79.7433 17.3269L78.9377 16.7344L40.3827 69.1503L41.1883 69.7429ZM79.8397 17.0595C80.028 13.8047 79.7492 10.2013 78.6914 7.10952C77.6335 4.01748 75.7728 1.37784 72.7623 0.180114C69.7563 -1.0158 65.7336 -0.72191 60.4663 1.75866C55.1966 4.24037 48.6177 8.9387 40.442 16.6673L41.129 17.394C49.2675 9.70055 55.7579 5.08136 60.8924 2.66335C66.0293 0.244189 69.7455 0.056136 72.3926 1.10928C75.0352 2.16061 76.742 4.50102 77.7452 7.43324C78.7486 10.3657 79.0248 13.8308 78.8413 17.0018L79.8397 17.0595Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 17.0307C3.39879 5.40044 16.3142 -10.8819 40.7855 17.0307C73.4139 -13.8135 80.084 4.17893 79.3405 17.0307L40.7855 69.4466L0 17.0307Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="88.81px"
        left="529.61px"
        transformOrigin="top left"
        transform="rotate(-10deg)"
        {...getOverrideProps(overrides, "Vector 9")}
      ></Icon>
      <Icon
        width="79.39px"
        height="69.45px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 105.458984375,
          height: 104.232421875,
        }}
        paths={[
          {
            d: "M40.7855 17.0307L40.4095 17.3603L40.7517 17.7506L41.129 17.394L40.7855 17.0307ZM0 17.0307L-0.479926 16.8904L-0.551662 17.1359L-0.394612 17.3377L0 17.0307ZM40.7855 69.4466L40.3909 69.7536L40.7967 70.2752L41.1883 69.7429L40.7855 69.4466ZM79.3405 17.0307L79.7433 17.3269L79.8311 17.2075L79.8397 17.0595L79.3405 17.0307ZM41.1614 16.7011C28.8914 2.70551 19.353 -0.40107 12.3455 1.72363C5.38824 3.83309 1.23579 11.0195 -0.479926 16.8904L0.479926 17.1709C2.163 11.4116 6.16764 4.64173 12.6356 2.68061C19.0534 0.73473 28.2083 3.44327 40.4095 17.3603L41.1614 16.7011ZM-0.394612 17.3377L40.3909 69.7536L41.1801 69.1395L0.394612 16.7236L-0.394612 17.3377ZM41.1883 69.7429L79.7433 17.3269L78.9377 16.7344L40.3827 69.1503L41.1883 69.7429ZM79.8397 17.0595C80.028 13.8047 79.7492 10.2013 78.6914 7.10952C77.6335 4.01748 75.7728 1.37784 72.7623 0.180114C69.7563 -1.0158 65.7336 -0.72191 60.4663 1.75866C55.1966 4.24037 48.6177 8.9387 40.442 16.6673L41.129 17.394C49.2675 9.70055 55.7579 5.08136 60.8924 2.66335C66.0293 0.244189 69.7455 0.056136 72.3926 1.10928C75.0352 2.16061 76.742 4.50102 77.7452 7.43324C78.7486 10.3657 79.0248 13.8308 78.8413 17.0018L79.8397 17.0595Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 17.0307C3.39879 5.40044 16.3142 -10.8819 40.7855 17.0307C73.4139 -13.8135 80.084 4.17893 79.3405 17.0307L40.7855 69.4466L0 17.0307Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="20px"
        left="362.64px"
        transformOrigin="top left"
        transform="rotate(40deg)"
        {...getOverrideProps(overrides, "Vector 6")}
      ></Icon>
      <Icon
        width="79.39px"
        height="69.45px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 105.45895385742188,
          height: 104.232421875,
        }}
        paths={[
          {
            d: "M40.7855 17.0307L40.4095 17.3603L40.7517 17.7506L41.129 17.394L40.7855 17.0307ZM0 17.0307L-0.479926 16.8904L-0.551662 17.1359L-0.394612 17.3377L0 17.0307ZM40.7855 69.4466L40.3909 69.7536L40.7967 70.2752L41.1883 69.7429L40.7855 69.4466ZM79.3405 17.0307L79.7433 17.3269L79.8311 17.2075L79.8397 17.0595L79.3405 17.0307ZM41.1614 16.7011C28.8914 2.70551 19.353 -0.40107 12.3455 1.72363C5.38824 3.83309 1.23579 11.0195 -0.479926 16.8904L0.479926 17.1709C2.163 11.4116 6.16764 4.64173 12.6356 2.68061C19.0534 0.73473 28.2083 3.44327 40.4095 17.3603L41.1614 16.7011ZM-0.394612 17.3377L40.3909 69.7536L41.1801 69.1395L0.394612 16.7236L-0.394612 17.3377ZM41.1883 69.7429L79.7433 17.3269L78.9377 16.7344L40.3827 69.1503L41.1883 69.7429ZM79.8397 17.0595C80.028 13.8047 79.7492 10.2013 78.6914 7.10952C77.6335 4.01748 75.7728 1.37784 72.7623 0.180114C69.7563 -1.0158 65.7336 -0.72191 60.4663 1.75866C55.1966 4.24037 48.6177 8.9387 40.442 16.6673L41.129 17.394C49.2675 9.70055 55.7579 5.08136 60.8924 2.66335C66.0293 0.244189 69.7455 0.056136 72.3926 1.10928C75.0352 2.16061 76.742 4.50102 77.7452 7.43324C78.7486 10.3657 79.0248 13.8308 78.8413 17.0018L79.8397 17.0595Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 17.0307C3.39879 5.40044 16.3142 -10.8819 40.7855 17.0307C73.4139 -13.8135 80.084 4.17893 79.3405 17.0307L40.7855 69.4466L0 17.0307Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="416px"
        left="94.64px"
        transformOrigin="top left"
        transform="rotate(40deg)"
        {...getOverrideProps(overrides, "Vector 5")}
      ></Icon>
      <Icon
        width="79.39px"
        height="69.45px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 102.426025390625,
          height: 104.8671875,
        }}
        paths={[
          {
            d: "M40.7855 17.0307L40.4095 17.3603L40.7517 17.7506L41.129 17.394L40.7855 17.0307ZM0 17.0307L-0.479926 16.8904L-0.551662 17.1359L-0.394612 17.3377L0 17.0307ZM40.7855 69.4466L40.3909 69.7536L40.7967 70.2752L41.1883 69.7429L40.7855 69.4466ZM79.3405 17.0307L79.7433 17.3269L79.8311 17.2075L79.8397 17.0595L79.3405 17.0307ZM41.1614 16.7011C28.8914 2.70551 19.353 -0.40107 12.3455 1.72363C5.38824 3.83309 1.23579 11.0195 -0.479926 16.8904L0.479926 17.1709C2.163 11.4116 6.16764 4.64173 12.6356 2.68061C19.0534 0.73473 28.2083 3.44327 40.4095 17.3603L41.1614 16.7011ZM-0.394612 17.3377L40.3909 69.7536L41.1801 69.1395L0.394612 16.7236L-0.394612 17.3377ZM41.1883 69.7429L79.7433 17.3269L78.9377 16.7344L40.3827 69.1503L41.1883 69.7429ZM79.8397 17.0595C80.028 13.8047 79.7492 10.2013 78.6914 7.10952C77.6335 4.01748 75.7728 1.37784 72.7623 0.180114C69.7563 -1.0158 65.7336 -0.72191 60.4663 1.75866C55.1966 4.24037 48.6177 8.9387 40.442 16.6673L41.129 17.394C49.2675 9.70055 55.7579 5.08136 60.8924 2.66335C66.0293 0.244189 69.7455 0.056136 72.3926 1.10928C75.0352 2.16061 76.742 4.50102 77.7452 7.43324C78.7486 10.3657 79.0248 13.8308 78.8413 17.0018L79.8397 17.0595Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 17.0307C3.39879 5.40044 16.3142 -10.8819 40.7855 17.0307C73.4139 -13.8135 80.084 4.17893 79.3405 17.0307L40.7855 69.4466L0 17.0307Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="585.04px"
        left="1329px"
        transformOrigin="top left"
        transform="rotate(-55deg)"
        {...getOverrideProps(overrides, "Vector 731523910")}
      ></Icon>
      <Icon
        width="89px"
        height="78px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 116.9595947265625,
          height: 118.314453125,
        }}
        paths={[
          {
            d: "M45.72 19.1283L45.3437 19.4575L45.6862 19.8489L46.0638 19.4913L45.72 19.1283ZM0 19.1283L-0.479999 18.9883L-0.551478 19.2333L-0.394901 19.4349L0 19.1283ZM45.72 78L45.3251 78.3067L45.7312 78.8296L46.1231 78.2959L45.72 78ZM88.9397 19.1283L89.3428 19.4241L89.4304 19.3048L89.4389 19.1571L88.9397 19.1283ZM46.0963 18.799C32.3461 3.08472 21.6766 -0.380797 13.8564 1.99493C6.08687 4.35527 1.44118 12.4014 -0.479999 18.9883L0.479999 19.2683C2.36882 12.7924 6.86713 5.16336 14.1471 2.95176C21.3764 0.755552 31.6619 3.82137 45.3437 19.4575L46.0963 18.799ZM-0.394901 19.4349L45.3251 78.3067L46.1149 77.6933L0.394901 18.8216L-0.394901 19.4349ZM46.1231 78.2959L89.3428 19.4241L88.5367 18.8324L45.317 77.7041L46.1231 78.2959ZM89.4389 19.1571C89.6497 15.5065 89.3373 11.468 88.1549 8.00538C86.9724 4.54261 84.8962 1.59606 81.5435 0.25964C78.1953 -1.07503 73.7041 -0.751255 67.8074 2.03113C61.9083 4.81467 54.5387 10.0869 45.3762 18.7652L46.0638 19.4913C55.1893 10.8481 62.4704 5.65518 68.2342 2.93551C74.0004 0.214693 78.1844 -0.00282651 81.1733 1.18856C84.1577 2.3782 86.0805 5.02507 87.2086 8.32854C88.3367 11.6321 88.6465 15.5326 88.4405 19.0994L89.4389 19.1571Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 19.1283C3.81 6.06558 18.288 -12.2222 45.72 19.1283C82.296 -15.5149 89.7731 4.69362 88.9397 19.1283L45.72 78L0 19.1283Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="38.18px"
        left="95px"
        transformOrigin="top left"
        transform="rotate(-50deg)"
        {...getOverrideProps(overrides, "Vector 2")}
      ></Icon>
      <Icon
        width="89px"
        height="78px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 116.9595947265625,
          height: 118.314453125,
        }}
        paths={[
          {
            d: "M45.72 19.1283L45.3437 19.4575L45.6862 19.8489L46.0638 19.4913L45.72 19.1283ZM0 19.1283L-0.479999 18.9883L-0.551478 19.2333L-0.394901 19.4349L0 19.1283ZM45.72 78L45.3251 78.3067L45.7312 78.8296L46.1231 78.2959L45.72 78ZM88.9397 19.1283L89.3428 19.4241L89.4304 19.3048L89.4389 19.1571L88.9397 19.1283ZM46.0963 18.799C32.3461 3.08472 21.6766 -0.380797 13.8564 1.99493C6.08687 4.35527 1.44118 12.4014 -0.479999 18.9883L0.479999 19.2683C2.36882 12.7924 6.86713 5.16336 14.1471 2.95176C21.3764 0.755552 31.6619 3.82137 45.3437 19.4575L46.0963 18.799ZM-0.394901 19.4349L45.3251 78.3067L46.1149 77.6933L0.394901 18.8216L-0.394901 19.4349ZM46.1231 78.2959L89.3428 19.4241L88.5367 18.8324L45.317 77.7041L46.1231 78.2959ZM89.4389 19.1571C89.6497 15.5065 89.3373 11.468 88.1549 8.00538C86.9724 4.54261 84.8962 1.59606 81.5435 0.25964C78.1953 -1.07503 73.7041 -0.751255 67.8074 2.03113C61.9083 4.81467 54.5387 10.0869 45.3762 18.7652L46.0638 19.4913C55.1893 10.8481 62.4704 5.65518 68.2342 2.93551C74.0004 0.214693 78.1844 -0.00282651 81.1733 1.18856C84.1577 2.3782 86.0805 5.02507 87.2086 8.32854C88.3367 11.6321 88.6465 15.5326 88.4405 19.0994L89.4389 19.1571Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 19.1283C3.81 6.06558 18.288 -12.2222 45.72 19.1283C82.296 -15.5149 89.7731 4.69362 88.9397 19.1283L45.72 78L0 19.1283Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="481.18px"
        left="334px"
        transformOrigin="top left"
        transform="rotate(-50deg)"
        {...getOverrideProps(overrides, "Vector 8")}
      ></Icon>
      <Icon
        width="89px"
        height="78px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 110.3101806640625,
          height: 103.736328125,
        }}
        paths={[
          {
            d: "M45.72 19.1283L45.3437 19.4575L45.6862 19.8489L46.0638 19.4913L45.72 19.1283ZM0 19.1283L-0.479999 18.9883L-0.551478 19.2333L-0.394901 19.4349L0 19.1283ZM45.72 78L45.3251 78.3067L45.7312 78.8296L46.1231 78.2959L45.72 78ZM88.9397 19.1283L89.3428 19.4241L89.4304 19.3048L89.4389 19.1571L88.9397 19.1283ZM46.0963 18.799C32.3461 3.08472 21.6766 -0.380797 13.8564 1.99493C6.08687 4.35527 1.44118 12.4014 -0.479999 18.9883L0.479999 19.2683C2.36882 12.7924 6.86713 5.16336 14.1471 2.95176C21.3764 0.755552 31.6619 3.82137 45.3437 19.4575L46.0963 18.799ZM-0.394901 19.4349L45.3251 78.3067L46.1149 77.6933L0.394901 18.8216L-0.394901 19.4349ZM46.1231 78.2959L89.3428 19.4241L88.5367 18.8324L45.317 77.7041L46.1231 78.2959ZM89.4389 19.1571C89.6497 15.5065 89.3373 11.468 88.1549 8.00538C86.9724 4.54261 84.8962 1.59606 81.5435 0.25964C78.1953 -1.07503 73.7041 -0.751255 67.8074 2.03113C61.9083 4.81467 54.5387 10.0869 45.3762 18.7652L46.0638 19.4913C55.1893 10.8481 62.4704 5.65518 68.2342 2.93551C74.0004 0.214693 78.1844 -0.00282651 81.1733 1.18856C84.1577 2.3782 86.0805 5.02507 87.2086 8.32854C88.3367 11.6321 88.6465 15.5326 88.4405 19.0994L89.4389 19.1571Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 19.1283C3.81 6.06558 18.288 -12.2222 45.72 19.1283C82.296 -15.5149 89.7731 4.69362 88.9397 19.1283L45.72 78L0 19.1283Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="-22.71px"
        left="667px"
        transformOrigin="top left"
        transform="rotate(20deg)"
        {...getOverrideProps(overrides, "Vector 12")}
      ></Icon>
      <Icon
        width="161px"
        height="141px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 211.820068359375,
          height: 205.939453125,
        }}
        paths={[
          {
            d: "M82.707 34.578L82.3308 34.9074L82.6732 35.2984L83.0507 34.9411L82.707 34.578ZM0 34.578L-0.479972 34.4379L-0.551546 34.6831L-0.394794 34.8848L0 34.578ZM82.707 141L82.3122 141.307L82.7182 141.829L83.1099 141.296L82.707 141ZM160.891 34.578L161.294 34.874L161.382 34.7547L161.39 34.6068L160.891 34.578ZM83.0832 34.2486C58.2368 5.87352 39.0912 -0.229352 25.1838 3.99261C11.3269 8.19923 2.98238 22.5756 -0.479972 34.4379L0.479972 34.7181C3.90987 22.9671 12.1068 9.00752 25.4743 4.94949C38.7912 0.906794 57.553 6.61058 82.3308 34.9074L83.0832 34.2486ZM-0.394794 34.8848L82.3122 141.307L83.1018 140.693L0.394794 34.2712L-0.394794 34.8848ZM83.1099 141.296L161.294 34.874L160.488 34.282L82.304 140.704L83.1099 141.296ZM161.39 34.6068C161.769 28.0416 161.206 20.7969 159.088 14.6017C156.971 8.40628 153.277 3.20093 147.361 0.844445C141.45 -1.51027 133.45 -0.967971 122.836 4.03683C112.219 9.04279 98.9233 18.5413 82.3633 34.2149L83.0507 34.9411C99.5735 19.3027 112.781 9.88347 123.262 4.94133C133.746 -0.00196738 141.439 -0.438167 146.991 1.77346C152.539 3.98331 156.08 8.88914 158.142 14.925C160.205 20.9611 160.766 28.0677 160.392 34.5492L161.39 34.6068Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 34.578C6.89225 10.9647 33.0828 -22.0939 82.707 34.578C148.873 -28.0461 162.399 8.48463 160.891 34.578L82.707 141L0 34.578Z",
            fill: "rgba(255,124,148,0.17)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="240.69px"
        left="-73px"
        transformOrigin="top left"
        transform="rotate(-33deg)"
        {...getOverrideProps(overrides, "Vector 731523909")}
      ></Icon>
      <Icon
        width="161px"
        height="141px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 191.0445556640625,
          height: 202.09765625,
        }}
        paths={[
          {
            d: "M82.707 34.578L82.3308 34.9074L82.6732 35.2984L83.0507 34.9411L82.707 34.578ZM0 34.578L-0.479972 34.4379L-0.551546 34.6831L-0.394794 34.8848L0 34.578ZM82.707 141L82.3122 141.307L82.7182 141.829L83.1099 141.296L82.707 141ZM160.891 34.578L161.294 34.874L161.382 34.7547L161.39 34.6068L160.891 34.578ZM83.0832 34.2486C58.2368 5.87352 39.0912 -0.229352 25.1838 3.99261C11.3269 8.19923 2.98238 22.5756 -0.479972 34.4379L0.479972 34.7181C3.90987 22.9671 12.1068 9.00752 25.4743 4.94949C38.7912 0.906794 57.553 6.61058 82.3308 34.9074L83.0832 34.2486ZM-0.394794 34.8848L82.3122 141.307L83.1018 140.693L0.394794 34.2712L-0.394794 34.8848ZM83.1099 141.296L161.294 34.874L160.488 34.282L82.304 140.704L83.1099 141.296ZM161.39 34.6068C161.769 28.0416 161.206 20.7969 159.088 14.6017C156.971 8.40628 153.277 3.20093 147.361 0.844445C141.45 -1.51027 133.45 -0.967971 122.836 4.03683C112.219 9.04279 98.9233 18.5413 82.3633 34.2149L83.0507 34.9411C99.5735 19.3027 112.781 9.88347 123.262 4.94133C133.746 -0.00196738 141.439 -0.438167 146.991 1.77346C152.539 3.98331 156.08 8.88914 158.142 14.925C160.205 20.9611 160.766 28.0677 160.392 34.5492L161.39 34.6068Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 34.578C6.89225 10.9647 33.0828 -22.0939 82.707 34.578C148.873 -28.0461 162.399 8.48463 160.891 34.578L82.707 141L0 34.578Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="433.73px"
        left="455.98px"
        transformOrigin="top left"
        transform="rotate(-68deg)"
        {...getOverrideProps(overrides, "Vector 431523915")}
      ></Icon>
      <Icon
        width="89px"
        height="78px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 116.9595947265625,
          height: 118.314453125,
        }}
        paths={[
          {
            d: "M45.72 19.1283L45.3437 19.4575L45.6862 19.8489L46.0638 19.4913L45.72 19.1283ZM0 19.1283L-0.479999 18.9883L-0.551478 19.2333L-0.394901 19.4349L0 19.1283ZM45.72 78L45.3251 78.3067L45.7312 78.8296L46.1231 78.2959L45.72 78ZM88.9397 19.1283L89.3428 19.4241L89.4304 19.3048L89.4389 19.1571L88.9397 19.1283ZM46.0963 18.799C32.3461 3.08472 21.6766 -0.380797 13.8564 1.99493C6.08687 4.35527 1.44118 12.4014 -0.479999 18.9883L0.479999 19.2683C2.36882 12.7924 6.86713 5.16336 14.1471 2.95176C21.3764 0.755552 31.6619 3.82137 45.3437 19.4575L46.0963 18.799ZM-0.394901 19.4349L45.3251 78.3067L46.1149 77.6933L0.394901 18.8216L-0.394901 19.4349ZM46.1231 78.2959L89.3428 19.4241L88.5367 18.8324L45.317 77.7041L46.1231 78.2959ZM89.4389 19.1571C89.6497 15.5065 89.3373 11.468 88.1549 8.00538C86.9724 4.54261 84.8962 1.59606 81.5435 0.25964C78.1953 -1.07503 73.7041 -0.751255 67.8074 2.03113C61.9083 4.81467 54.5387 10.0869 45.3762 18.7652L46.0638 19.4913C55.1893 10.8481 62.4704 5.65518 68.2342 2.93551C74.0004 0.214693 78.1844 -0.00282651 81.1733 1.18856C84.1577 2.3782 86.0805 5.02507 87.2086 8.32854C88.3367 11.6321 88.6465 15.5326 88.4405 19.0994L89.4389 19.1571Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 19.1283C3.81 6.06558 18.288 -12.2222 45.72 19.1283C82.296 -15.5149 89.7731 4.69362 88.9397 19.1283L45.72 78L0 19.1283Z",
            fill: "rgba(255,233,237,1)",
            fillRule: "nonzero",
          },
        ]}
        position="absolute"
        top="275.18px"
        left="639px"
        transformOrigin="top left"
        transform="rotate(-50deg)"
        {...getOverrideProps(overrides, "Vector 11")}
      ></Icon>
    </View>
  );
  
}
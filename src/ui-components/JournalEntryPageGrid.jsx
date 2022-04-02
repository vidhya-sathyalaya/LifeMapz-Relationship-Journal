/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Ampligram from "./Ampligram";
import { Collection } from "@aws-amplify/ui-react";
export default function JournalEntryPageGrid(props) {
  const { items, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <Ampligram
          margin="1rem 0 1rem 0"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Ampligram[0]")}
        ></Ampligram>
      )}
    </Collection>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Images } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Frame417 from "./Frame417";
import { Collection } from "@aws-amplify/ui-react";
export default function NewCard(props) {
  const { image, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Images,
        }).items;
  return (
    <Collection
      type="list"
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <Frame417
          image={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Frame417[0]")}
        ></Frame417>
      )}
    </Collection>
  );
}

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Images, JournalEntry, TextEntry, User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type AmpligramProps = React.PropsWithChildren<Partial<FlexProps> & {
    journalEntry?: JournalEntry;
    user?: User;
    textEntry?: TextEntry;
    images?: Images;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Ampligram(props: AmpligramProps): React.ReactElement;

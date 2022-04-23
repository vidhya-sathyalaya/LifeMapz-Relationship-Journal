import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ReactionValue {
  HAPPY = "HAPPY",
  SAD = "SAD",
  LOVE = "LOVE"
}

export enum GenderValue {
  MALE = "MALE",
  FEMALE = "FEMALE",
  NONBINARY = "NONBINARY"
}



type ImagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TextEntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JournalEntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JournalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Images {
  readonly id: string;
  readonly images?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Images, ImagesMetaData>);
  static copyOf(source: Images, mutator: (draft: MutableModel<Images, ImagesMetaData>) => MutableModel<Images, ImagesMetaData> | void): Images;
}

export declare class TextEntry {
  readonly id: string;
  readonly content: string;
  readonly journalentryID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TextEntry, TextEntryMetaData>);
  static copyOf(source: TextEntry, mutator: (draft: MutableModel<TextEntry, TextEntryMetaData>) => MutableModel<TextEntry, TextEntryMetaData> | void): TextEntry;
}

export declare class JournalEntry {
  readonly id: string;
  readonly date_created: number;
  readonly date_modified: number;
  readonly reaction_id: ReactionValue | keyof typeof ReactionValue;
  readonly entry_type: string;
  readonly is_memorable: boolean;
  readonly userID: string;
  readonly journalID: string;
  readonly TextEntries?: (TextEntry | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<JournalEntry, JournalEntryMetaData>);
  static copyOf(source: JournalEntry, mutator: (draft: MutableModel<JournalEntry, JournalEntryMetaData>) => MutableModel<JournalEntry, JournalEntryMetaData> | void): JournalEntry;
}

export declare class Journal {
  readonly id: string;
  readonly date_created: string;
  readonly is_active: boolean;
  readonly Users?: (User | null)[];
  readonly JournalEntries?: (JournalEntry | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Journal, JournalMetaData>);
  static copyOf(source: Journal, mutator: (draft: MutableModel<Journal, JournalMetaData>) => MutableModel<Journal, JournalMetaData> | void): Journal;
}

export declare class User {
  readonly id: string;
  readonly cognito_username?: string;
  readonly fname: string;
  readonly lname: string;
  readonly email: string;
  readonly dob?: string;
  readonly gender?: GenderValue | keyof typeof GenderValue;
  readonly JournalEntries?: (JournalEntry | null)[];
  readonly journalID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
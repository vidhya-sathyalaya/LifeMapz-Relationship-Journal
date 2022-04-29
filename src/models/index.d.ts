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
  readonly images?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Images, ImagesMetaData>);
  static copyOf(source: Images, mutator: (draft: MutableModel<Images, ImagesMetaData>) => MutableModel<Images, ImagesMetaData> | void): Images;
}

export declare class TextEntry {
  readonly id: string;
  readonly content: string;
  readonly journalentryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TextEntry, TextEntryMetaData>);
  static copyOf(source: TextEntry, mutator: (draft: MutableModel<TextEntry, TextEntryMetaData>) => MutableModel<TextEntry, TextEntryMetaData> | void): TextEntry;
}

export declare class JournalEntry {
  readonly id: string;
  readonly date_created: number;
  readonly date_modified: number;
  readonly reaction_id?: ReactionValue | keyof typeof ReactionValue | null;
  readonly entry_type: string;
  readonly is_memorable?: boolean | null;
  readonly userID: string;
  readonly journalID: string;
  readonly TextEntries?: (TextEntry | null)[] | null;
  readonly user_fname?: string | null;
  readonly is_secret?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<JournalEntry, JournalEntryMetaData>);
  static copyOf(source: JournalEntry, mutator: (draft: MutableModel<JournalEntry, JournalEntryMetaData>) => MutableModel<JournalEntry, JournalEntryMetaData> | void): JournalEntry;
}

export declare class Journal {
  readonly id: string;
  readonly date_created: string;
  readonly name: string;
  readonly is_active: boolean;
  readonly Users?: (User | null)[] | null;
  readonly JournalEntries?: (JournalEntry | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Journal, JournalMetaData>);
  static copyOf(source: Journal, mutator: (draft: MutableModel<Journal, JournalMetaData>) => MutableModel<Journal, JournalMetaData> | void): Journal;
}

export declare class User {
  readonly id: string;
  readonly cognito_username?: string | null;
  readonly fname: string;
  readonly lname: string;
  readonly email: string;
  readonly dob?: string | null;
  readonly gender?: GenderValue | keyof typeof GenderValue | null;
  readonly JournalEntries?: (JournalEntry | null)[] | null;
  readonly journalID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
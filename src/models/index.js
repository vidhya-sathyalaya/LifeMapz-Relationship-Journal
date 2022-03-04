// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ReactionValue = {
  "HAPPY": "HAPPY",
  "SAD": "SAD",
  "LOVE": "LOVE"
};

const GenderValue = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "NONBINARY": "NONBINARY"
};

const { Images, TextEntry, JournalEntry, Journal, User } = initSchema(schema);

export {
  Images,
  TextEntry,
  JournalEntry,
  Journal,
  User,
  ReactionValue,
  GenderValue
};
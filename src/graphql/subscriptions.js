/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateImages = /* GraphQL */ `
  subscription OnCreateImages {
    onCreateImages {
      id
      images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateImages = /* GraphQL */ `
  subscription OnUpdateImages {
    onUpdateImages {
      id
      images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteImages = /* GraphQL */ `
  subscription OnDeleteImages {
    onDeleteImages {
      id
      images
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateTextEntry = /* GraphQL */ `
  subscription OnCreateTextEntry {
    onCreateTextEntry {
      id
      content
      journalentryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTextEntry = /* GraphQL */ `
  subscription OnUpdateTextEntry {
    onUpdateTextEntry {
      id
      content
      journalentryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTextEntry = /* GraphQL */ `
  subscription OnDeleteTextEntry {
    onDeleteTextEntry {
      id
      content
      journalentryID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateJournalEntry = /* GraphQL */ `
  subscription OnCreateJournalEntry {
    onCreateJournalEntry {
      id
      date_created
      date_modified
      reaction_id
      entry_type
      is_memorable
      userID
      journalID
      TextEntries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateJournalEntry = /* GraphQL */ `
  subscription OnUpdateJournalEntry {
    onUpdateJournalEntry {
      id
      date_created
      date_modified
      reaction_id
      entry_type
      is_memorable
      userID
      journalID
      TextEntries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteJournalEntry = /* GraphQL */ `
  subscription OnDeleteJournalEntry {
    onDeleteJournalEntry {
      id
      date_created
      date_modified
      reaction_id
      entry_type
      is_memorable
      userID
      journalID
      TextEntries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateJournal = /* GraphQL */ `
  subscription OnCreateJournal {
    onCreateJournal {
      id
      date_created
      is_active
      Users {
        nextToken
        startedAt
      }
      JournalEntries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateJournal = /* GraphQL */ `
  subscription OnUpdateJournal {
    onUpdateJournal {
      id
      date_created
      is_active
      Users {
        nextToken
        startedAt
      }
      JournalEntries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteJournal = /* GraphQL */ `
  subscription OnDeleteJournal {
    onDeleteJournal {
      id
      date_created
      is_active
      Users {
        nextToken
        startedAt
      }
      JournalEntries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      cognito_username
      fname
      lname
      email
      dob
      gender
      JournalEntries {
        nextToken
        startedAt
      }
      journalID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      cognito_username
      fname
      lname
      email
      dob
      gender
      JournalEntries {
        nextToken
        startedAt
      }
      journalID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      cognito_username
      fname
      lname
      email
      dob
      gender
      JournalEntries {
        nextToken
        startedAt
      }
      journalID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

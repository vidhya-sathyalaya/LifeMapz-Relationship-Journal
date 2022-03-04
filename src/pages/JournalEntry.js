import { render } from '@testing-library/react';
import React from 'react';
import "./JournalEntry.css"
import { DataStore } from '@aws-amplify/datastore';
import { TextEntry } from '../models';
import { JournalEntry, ReactionValue } from '../models';

import AWSDateUtil from '../util'

{/*import { Link } from 'react-router-dom';*/}

const initialState = { Entry: '' }


class JournalEntryPage extends React.Component {

    constructor()
    {
        super();
        this.state = { Entry : ""};
        this.changeEntry = this.changeEntry.bind(this);
        this.saveEntry = this.saveEntry.bind(this);
    };

    changeEntry(value)
    {
        this.setState({ Entry: value });
    }
    

    async saveEntry(){
        const jentry = await DataStore.save(
            new JournalEntry({
                "date_created": AWSDateUtil.getAWSTimeStamp(),
                "date_modified": AWSDateUtil.getAWSTimeStamp(),
                "reaction_id": ReactionValue.HAPPY,
                "entry_type": "Text",
                "is_memorable": false, //default, needs to change later
                "userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "journalID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
            })
        );

        await DataStore.save(
            new TextEntry({
                "content": this.state.Entry,
                "journalentryID": jentry.id
            })
        );
    }

    render() {
        return (
            <div>
                <h1> Journal Entry page </h1>
                <textarea className='journaltext' onChange={event => this.changeEntry(event.target.value)}/>
                <div>Here goes old entry!&#10;</div>
                <button onClick={this.saveEntry}> Save </button>
            </div>
        );
    }
}

export default JournalEntryPage;



import { render } from '@testing-library/react';
import React from 'react';
import "./JournalEntry.css"
import { DataStore } from '@aws-amplify/datastore';
import { TextEntry } from '../models';
import { JournalEntry, ReactionValue } from '../models';

import "@aws-amplify/ui-react/styles.css";
import { NavBar, Writeajournal, JP as EntryCard } from '../ui-components'

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

    componentDidMount()
    {
        this.listEntries();
    }
    
    async listEntries(){

        const tentries = [];
        var txtentry = {};

        const journalentries = await DataStore.query(JournalEntry,
            c => c.date_created('gt', AWSDateUtil.getStartOfDayAsTimeStamp())
            .date_created('le', AWSDateUtil.getEndOfDayAsTimeStamp())
            .entry_type('eq', "Text"));
        
        for(var i = 0; i< journalentries.length; i++)
        {
            txtentry = await DataStore.query(TextEntry,
                c => c.journalentryID('eq', journalentries[i].id));
            for(var j =0; j<txtentry.length; j++)
            {
                //console.log(txtentry[j].content);
                tentries.push(txtentry[j].content);
            }
        }

        console.log(tentries);
        this.setState( { PreviousEntries: tentries});

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

        this.listEntries();
        this.setState({
            Entry: ''
          });
    }

    render() {
          const tentries = this.state.PreviousEntries?.map((te, i) => (
            <EntryCard key={i} overrides={
                {
                    "write here": {
                        children: te
                    }
                }
            } />
          ));
        return (
            <div>
                <NavBar/>
                <Writeajournal overrides={{
                    
                    "Button": {
                        onClick: this.saveEntry
                    },
                    "TextField": {
                        onChange: event => this.changeEntry(event.target.value)
                    }
                }} />
                <div className='previous-entry-section1'>
                    {//<ul className='previous-entry-list'>
    }   
                        {tentries}
                    
                </div>
            </div>
        );
    }
}

export default JournalEntryPage;



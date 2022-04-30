import { render } from '@testing-library/react';
import React from 'react';
import "./JournalEntry.css"
import { DataStore } from '@aws-amplify/datastore';
import { TextEntry } from '../models';
import { JournalEntry, ReactionValue } from '../models';

import "@aws-amplify/ui-react/styles.css";
import {  Writeajournal, JP as EntryCard } from '../ui-components'
import { NavBar } from '../ui-components_frontpage';

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
            .entry_type('eq', "Text")
            .userID('eq', sessionStorage.getItem("userID")));
        
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
                "userID": sessionStorage.getItem("userID"),
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

        const username = {
            name : sessionStorage.getItem('userFname') + " " + sessionStorage.getItem('userLname'),
         }
         const imageOverrides = {
            "image":{
               src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
            },
           }
          const tentries = this.state.PreviousEntries?.map((te, i) => (
            <EntryCard key={i} overrides={
                {
                    "write here": {
                        children: te
                    },
                    "2nd December 2021": {children: ""},
                    "Nikhil S": {children: sessionStorage.getItem("userFname")}
                }
            } />
          ));
          
        return (
            <div>
                
                <NavBar overrides={[imageOverrides, username]} />
                <Writeajournal overrides={{
                    
                    "Button": {
                        onClick: this.saveEntry
                    },
                    "TextField": {
                        onChange: event => this.changeEntry(event.target.value),
                        isDisabled: false
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


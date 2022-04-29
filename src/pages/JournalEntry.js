import { render } from '@testing-library/react';
import React from 'react';
// import "./JournalEntry.css"
import { DataStore } from '@aws-amplify/datastore';
import { TextEntry } from '../models';
import { JournalEntry, ReactionValue } from '../models';

import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from 'aws-amplify';
import { Writeajournal } from '../ui-components'
// import { Writeajournal, JP as EntryCard } from '../ui-components'
import {JP as EntryCard} from '../ui-components_frontpage';
import NavBar from '../ui-components_frontpage/NavBar';

import AWSDateUtil from '../util'

{/*import { Link } from 'react-router-dom';*/}

const initialState = { Entry: '' }

const listJournalEntries = /* GraphQL */ `
query listJournalEntries($eq: ID) {
    listJournalEntries(filter: {journalID: {eq: $eq}}) {
      items {
        entry_type
        id
        is_secret
        is_memorable
        journalID
        userID
        user_fname
        date_created
        TextEntries {
          items {
            content
            id
            journalentryID
          }
        }
      }
    }
  }  
  `;

class JournalEntryPage extends React.Component {


    constructor()
    {
        super();
        // console.log("In the constructor");
        this.state = { Entry : ""};
        this.changeEntry = this.changeEntry.bind(this);
        this.saveEntry = this.saveEntry.bind(this);

        this.username = {
            name : sessionStorage.getItem('userFname') + " " + sessionStorage.getItem('userLname'),
         }

        this.imageOverrides = {
            "image":{
               src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png",
            },
        }
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

        // console.log(sessionStorage.getItem("journalID"));

        const queryData = await API.graphql({ query: listJournalEntries , variables: { eq : sessionStorage.getItem('journalID') }});

        const journalentries = queryData.data.listJournalEntries.items;

        // console.log(queryData);

        // const journalentries = await DataStore.query(JournalEntry,
        //     c => c
        //     // .date_created('gt', AWSDateUtil.getStartOfDayAsTimeStamp())
        //     // .date_created('le', AWSDateUtil.getEndOfDayAsTimeStamp())
        //     // .entry_type('eq', "Text"));
        //     .journalID('eq', sessionStorage.getItem('journalID')));

        // console.log(journalentries);

        var desiredData = [];
        
        for(var i = 0; i< journalentries.length; i++)
        {
            // console.log(journalentries[i].TextEntries.items[0].content);
            const obj = { 'text' : journalentries[i].TextEntries.items[0].content, 'date' : journalentries[i].date_created 
                        , 'username' : journalentries[i].user_fname, 'userid' : journalentries[i].userID  }

            desiredData.push(journalentries[i].TextEntries.items[0].content);
            // desiredData.push(obj);

            // txtentry = await DataStore.query(TextEntry,
            //     c => c.journalentryID('eq', journalentries[i].id));
            // for(var j =0; j<txtentry.length; j++)
            // {
            //     //console.log(txtentry[j].content);
            //     tentries.push(txtentry[j].content);
            // }
        }

        console.log(desiredData);
        this.setState( { PreviousEntries: desiredData});

    }

    async saveEntry(){
        const jentry = await DataStore.save(
            new JournalEntry({
                "date_created": AWSDateUtil.getAWSTimeStamp(),
                "date_modified": AWSDateUtil.getAWSTimeStamp(),
                "reaction_id": ReactionValue.HAPPY,
                "entry_type": "Text",
                "is_memorable": false, //default, needs to change later
                "userID": sessionStorage.getItem('userID'),
                "journalID": sessionStorage.getItem('journalID'),
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
                    "write here": { children: te }
                }
            }
            />
          ));
        return (
            <div>
                <NavBar overrides={[this.imageOverrides, this.username]} />
                <Writeajournal overrides={{
                    "Button": {
                        onClick: this.saveEntry
                    },
                    "TextField": {
                        onChange: event => this.changeEntry(event.target.value)
                    }
                }} />
                <div className='previous-entry-section'>
                    <ul className='previous-entry-list'>
                        {tentries}
                    </ul>
                </div>
            </div>
        );
    }
}

export default JournalEntryPage;
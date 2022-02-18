import { render } from '@testing-library/react';
import React from 'react';
import "./JournalEntry.css"

{/*import { Link } from 'react-router-dom';*/}


class JournalEntry extends React.Component {
    render() {
        return (
            <div>
                <h1> Journal Entry page </h1>
                <textarea className='journaltext'> Here goes old entry!&#10;</textarea>
            </div>
        );
    }
}

export default JournalEntry;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JournalEntry from './pages/JournalEntry.js';  

{/* Referred from https://stackoverflow.com/a/56588937 */}


const Router = () => {

    return (
        <Routes>
           <Route path='/journalentry' element={<JournalEntry />} /> {/* React v6 supports only this format */}
        </Routes>
    );
}

export default Router;
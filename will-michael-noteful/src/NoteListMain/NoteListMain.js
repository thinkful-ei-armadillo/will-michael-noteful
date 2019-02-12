import React from "react";
import { Link } from 'react-router-dom';
import Note from './Note/Note';
import './NoteListMain.css';

function NoteListMain(props) {
    return(
        <section className='NoteListMain' >
            <ul>
                {props.notes.map(note =>
                    <li key={note.id}>
                        <Note 
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />
                    </li>
                )}
            </ul>
            <button tag={Link} to="/addNote" type="button" className="addNoteBtn">
                Note
            </button>
        </section>
    )
}

NoteListMain.defaultProps = {
    notes: []
}

export default NoteListMain;
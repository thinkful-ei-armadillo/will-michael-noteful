import React from "react";
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import Button from '../Button/Button';
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

            <Button tag={Link} to="../AddNote" type="button" className="addNoteBtn">
                Add Note
            </Button>
        </section>
    )
}

NoteListMain.defaultProps = {
    notes: []
}

export default NoteListMain;
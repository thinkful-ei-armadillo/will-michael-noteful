import React from "react";
// import { Link } from 'react-router-dom';
import Note from './Note/Note';
import './NoteListMain.css';

// this is for notes on main page
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
            <button>

            </button>
        </section>
    )
}

export default NoteListMain;
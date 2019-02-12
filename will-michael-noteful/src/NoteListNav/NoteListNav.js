import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './NoteListNav.css';

const countNotesForFolder = (notes=[], folderId) =>
    notes.filter(note => note.folderId === folderId).length

function NoteListNav(props) {
    return(
        <section className='NoteListNav' >
            <ul>
                {props.notes.map(folder =>
                    <li key={folder.id}>
                        <NavLink 
                            className="folderLinkNav"
                            to={`/folder/${folder.id}`}
                        >
                            <span className="navNotes">
                                {countNotesForFolder(props.notes, folder.id)}
                            </span>
                            {folder.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <button tag={Link} to="/addNote" type="button" className="addNoteBtn">
                Note
            </button>
        </section>
    )
}

NoteListNav.defaultProps = {
    notes: []
}

export default NoteListNav;
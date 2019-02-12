import React from "react";
import { NavLink, Link } from 'react-router-dom';
import Button from '../Button/Button';
import './NoteListNav.css';

const countNotesForFolder = (notes=[], folderId) =>
    notes.filter(note => note.folderId === folderId).length

function NoteListNav(props) {
    return(
        <section className='NoteListNav' >
            <ul>
                {props.folders.map(folder =>
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
            <br />
            <Button tag={Link} to="/addFolder" type="button" className="addNFolderBtn">
                Add Folder
            </Button>
        </section>
    )
}

NoteListNav.defaultProps = {
    notes: []
}

export default NoteListNav;
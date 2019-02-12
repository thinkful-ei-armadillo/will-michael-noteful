import React, { Component } from "react";


// This section is for the folders list
class NoteListNav extends Component {
    render() {
        return (
            <section className='NoteListNav'>
                <ul className='NoteListNav'>
                    {props.folders.map(folders => {
                        <li>
                            {/* Some folder component */}
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default NoteListNav;
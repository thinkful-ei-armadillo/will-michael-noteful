import React, { Component } from "react";


class NotePageNav extends Component {
    render() {
        return (
            // Back button to go to previous page
            <section className="NotePageNav">
                <button className='NotePageNav-back'>
                    Go Back
                </button>
                
            {/* Folder the current notes are in */}
            <h2>
                {/* Name of folder that it is in */}
            </h2>

            </section>
        )
    }
}

export default NotePageNav;
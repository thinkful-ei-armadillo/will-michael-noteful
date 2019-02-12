import React, { Component } from "react";


// this is for notes on main page
class NoteListMain extends Component {
    render() {
        return (
            <section className='NoteListMain'>
                <ul>
                    {props.notes.map(note => {
                        <li>
                            {/* Some note component */}
                        </li>
                    })}

                </ul>
            </section>
        )
    }
}

export default NoteListMain;
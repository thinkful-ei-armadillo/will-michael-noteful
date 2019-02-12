import React, { Component } from "react";

class AddNote extends Component {
    static defaultProps = {
        folders: []
    };

    render() {
        return (
            <section className='AddNote'>
                <form>
                    <h2>Create a note</h2>
                    <label>
                        Name
                        <input type='text' id='nameInput' />
                    </label>
                    <label>
                        Content
                        <input type='text' id='nameInput' />
                    </label>
                    <label for='selectFolder'>Folder</label>
                    <select id='selectFolder'>
                        <option>
                            {folders.map(folder => (
                                <option> {folder.name} </option>
                            ))}
                        </option>
                    </select>
                    <div className='button'>
                        <button type='submit'>Add note</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default AddNote;
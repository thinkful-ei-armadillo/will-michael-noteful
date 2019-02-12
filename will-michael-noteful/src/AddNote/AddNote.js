import React, { Component } from "react";
import './AddNote.css';

class AddNote extends Component {
    static defaultProps = {
        folders: []
    };

    render() {
        const { folders } = this.props;
        return (
            <section className='AddNote'>
                <h2>Create a note</h2>
                <form>
                    <label>
                        Name
                        <input type='text' id='nameInput' />
                    </label>
                    <label>
                        Content
                        <input type='text' id='contentInput' />
                    </label>
                    <label for='selectFolder'>Folder</label>
                    <select id='selectFolder'>
                        <option value={null}>...</option>
                            {folders.map(folder => (
                                <option key={folder.id} value={folder.id}>
                                    {folder.name}
                                </option>
                            ))}
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
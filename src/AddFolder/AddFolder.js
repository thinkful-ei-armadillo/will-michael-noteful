import React, { Component } from "react";

class AddFolder extends Component {
    render() {
        return (
            <section className='AddFolder'>
                <form>
                    <h2>Create a folder</h2>
                    <label>
                        Name:
                        <input type='text' id='nameInput' />
                    </label>
                    <div className='button'>
                        <button type='submit'>Add folder</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default AddFolder;
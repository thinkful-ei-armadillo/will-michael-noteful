import React, { Component } from 'react';
// import AddFolder from './AddFolder/AddFolder';
// import AddNote from './AddNote/AddNote';
// import NoteListMain from './NoteListMain/NoteListMain';
// import NoteListNav from './NoteListNav/NoteListNav';
// import NotePageMain from './NotePageMain/NoteListMain';
// import NotePageNav from './NotePageNav/NotePageNav';
import Link from 'react-router-dom';
import dummyStore from './dummy-store';


class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  componentDidMount(){
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderNavRouting(){}

  renderMainRouting(){}

  render(){
    return(
      <div className="container">
        <nav className="contNav">
          {this.renderNavRouting()}
        </nav>
        <header role="heading" className="contHeader">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main role="main" className="contMain">
          {this.renderMainRouting()}
        </main>
      </div>
    )
  }
}

export default App;
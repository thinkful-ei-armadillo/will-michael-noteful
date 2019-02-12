import React, { Component } from 'react';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import NoteListMain from '../NoteListMain/NoteListMain';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageMain from '../NotePageMain/NotePageMain';
import NotePageNav from '../NotePageNav/NotePageNav';
import { Route, Link } from 'react-router-dom';
import dummyStore from '../dummy-store';

function findNote(notes = [], noteId) {
  notes.find(note => note.id === noteId)
}

function findFolder(folders = [], folderId) {
  folders.find(folder => folder.id === folderId)
}

const getNotesForFolder = (notes=[], folderId) =>
  (!folderId) ? notes : notes.filter(note => note.folderId === folderId)

class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  componentDidMount() {
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderNavRouting() {
    const { notes, folders } = this.state;
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <NoteListNav
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            return (
              <NotePageNav
                {...routeProps}
                folder={folder}
              />
            )
          }}
        />
        <Route
          path="/addFolder"
          component={NotePageNav}
        />
        <Route
          path="/add-note"
          component={NotePageNav}
        />
      </>
    )
  }

  renderMainRouting() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params
              const notesForFolder = getNotesForFolder(notes, folderId)
              return (
                <NoteListMain
                  {...routeProps}
                  notes={notesForFolder}
                />
              )
            }}
          />
        )}
        <Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId)
            return (
              <NotePageMain
                {...routeProps}
                note={note}
              />
            )
          }}
        />
        <Route
          path='/add-folder'
          component={AddFolder}
        />
        <Route
          path='/add-note'
          render={routeProps => {
            return (
              <AddNote
                {...routeProps}
                folders={folders}
              />
            )
          }}
        />
      </>
    )
  }

  render() {
    return (
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
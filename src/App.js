import { NotesList } from "./components/notes/NotesList";
import { useState, useEffect } from 'react';
import { Container } from './components/styles/style'
import {nanoid} from 'nanoid'
import { Header } from "./components/notes/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from './components/styles/globalStyle'

const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes)
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes)
    }

    const handleThemeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />

        <Container>
            <Header 
                handleSearchNote={setSearchText}
                handleThemeToggler={handleThemeToggler}
            />
            <NotesList 
                notes={notes.filter((note) =>
                    note.text.toLowerCase().includes(searchText)
                )} 
                handleAddNote={addNote} 
                handleDeleteNote={deleteNote}
            />
        </Container>
      </ThemeProvider>
  )
}

export default App;
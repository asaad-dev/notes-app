import { Button, StyledNewNote, StyledNoteFooter } from '../styles/style'
import { useState } from 'react'

export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const characterLimit = 200;

  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value)
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('');
    }

  }

  return (
    <StyledNewNote>
      <textarea 
        cols="30" 
        rows="10"
        value={noteText}
        placeholder='Type to add a new note...'
        onChange={handleChange}
      >
      </textarea>
      <StyledNoteFooter>
        <small>{characterLimit - noteText.length} Remaining</small>
        <Button onClick={handleSaveClick}>Save</Button>
      </StyledNoteFooter>
    </StyledNewNote>
  )
}

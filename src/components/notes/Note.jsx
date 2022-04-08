import { StyledNote, StyledNoteFooter, DeleteIcon } from '../styles/style'

export const Note = ({ id, text, date, handleDeleteNote}) => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <StyledNote style={{background: `${randomColor}`}}>
        <span>{text}</span>
        <StyledNoteFooter>
            <small>{date}</small>
            <DeleteIcon onClick={() => handleDeleteNote(id)}/>
        </StyledNoteFooter>
    </StyledNote>
  )
}

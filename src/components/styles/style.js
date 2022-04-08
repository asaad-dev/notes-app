import styled from "styled-components";
import { MdDeleteForever, MdSearch  } from "react-icons/md";
import { FaToggleOn } from 'react-icons/fa'
import NoteBook from '../../assets/note-book.svg'

export const StyledNotesList = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const StyledNote = styled.div`
    color: ${props => props.theme.textPrimary};
    border-radius: 10px;
    padding: 1rem;
    min-height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: pre-wrap;
`;

export const StyledNoteFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DeleteIcon = styled(MdDeleteForever)`
    cursor: pointer;
    font-size: 30px;
`;

export const ToggleIcon = styled(FaToggleOn)`
    cursor: pointer;
    font-size: 30px;
    color: ${props => props.theme.primary};
`;

export const StyledNewNote = styled(StyledNote)`
    background: ${(props) => props.theme.primary};

    textarea {
        border: none;
        resize: none;
        background: ${(props) => props.theme.primary};
    };

    textarea::placeholder {
        color: ${props => props.theme.textPrimary};
    }

    &:focus {
        outline: none;
    }
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
`;

export const Button = styled.button`
    background-color: #e1e1e1;
    border-radius: 10px;
    border: none;
    padding: 6px 10px;
    &:hover {
        background-color: #ededed;
        cursor: pointer;
    }
`;

export const SearchIcon = styled(MdSearch)`
    font-size: 2rem;
`;

export const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #E9E9E9;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 1.5em;
    
    input {
        background-color: #E9E9E9;
    }
`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom:  20px;
    margin-bottom: 1.3rem;
    color: ${props => props.theme.textPrimary};
    background-image: url(${NoteBook});
    background-repeat: no-repeat;
    background-position: center top;
`;


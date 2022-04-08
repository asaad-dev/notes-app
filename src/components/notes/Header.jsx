import { ToggleIcon, SearchIcon, StyledHeader, StyledSearch } from '../styles/style'

export const Header = ({ handleSearchNote, handleThemeToggler }) => {
  return (
    <>
      <StyledHeader>
        <h1>Notes</h1>
        <ToggleIcon 
          onClick={handleThemeToggler}
        />
      </StyledHeader>
      <StyledSearch>
        <SearchIcon />
        <input 
          type="text" 
          placeholder='Type to search...' 
          onChange={(e) => handleSearchNote(e.target.value)}
        />
      </StyledSearch>
    </>
  )
}

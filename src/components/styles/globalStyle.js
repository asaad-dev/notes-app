import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style:none;
        border: none;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${(props) => props.theme.body};
    }
`;


// Themes
export const lightTheme = {
    body: '#fff',
    textPrimary: '#000',
    primary: '#845EC2',
};

export const darkTheme = {
    body: '#000',
    textPrimary: '#fff',
    primary: '#845EC2',
}




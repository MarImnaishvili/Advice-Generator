import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
};
body{
    font-family: "Manrope", sans-serif;
    background-color: hsl(218, 23%, 16%);
    min-height: 100vh;
}
html {
    font-size: 62.5%;
}
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root{
    /* light theme */
    --theme-primary: #FB9300;
    --theme-second: #010103;
    --text-gray: #333333;
    --text-gray-less: #888888;

    --bg-color: #F3F4F6;
  }
  body{
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }
`
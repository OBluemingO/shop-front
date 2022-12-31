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
    user-select: none;

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #FB9300; 
      border-radius: 50px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #be6f00; 
    }
  }
`;

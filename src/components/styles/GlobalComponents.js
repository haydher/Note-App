import { createGlobalStyle } from "styled-components";

export const GlobalComponents = createGlobalStyle`
* {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: "Montserrat", sans-serif;
}

a, a:hover, a:visited,a:focus, a:active  {
  text-decoration: none;
  color: inherit;
  outline: 0;
}

.App {
 display: flex;
}

`;

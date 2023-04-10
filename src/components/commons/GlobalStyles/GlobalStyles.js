import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --clr-primary-800: #000000;
  --clr-primary-600: #7D7D7D;
  --clr-primary-400: #E5E5E5;
  --clr-primary-200: #F3F3F3;
  --clr-white: #FFFFFF;
}

html,
body {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Libre Baskerville', serif;
}

#root {
  max-width: 100%;
  overflow-x: hidden;
  padding-left: 1.5rem; 
    padding-right: 1.5rem;
  margin: auto;
 
  @media(min-width: 576px){
    padding-left: 2.5rem; 
    padding-right: 2.5rem;
    max-width: 540px;
  }
  @media(min-width: 768px){
    max-width: 740px;
  }
  @media(min-width: 992px){
    max-width: 960px;
  }
  @media(min-width: 1200px){
    max-width: 1140px;
  }
  @media(min-width: 1400px){
    max-width: 1300px;
  }
}

a {
  text-decoration: none;
  color: inherit;
}

`;

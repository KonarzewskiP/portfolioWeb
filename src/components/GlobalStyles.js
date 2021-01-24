import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a{
    text-decoration: none;
  }
  
  ul{
    list-style: none;
  }

  body {
    background: #fff;
    font-family: 'Open Sans', sans-serif;
   
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 4rem;
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 3rem;
  }

`

export default GlobalStyle;
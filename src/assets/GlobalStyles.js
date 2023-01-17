import {createGlobalStyle} from "styled-components";
import vars from "./variables";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gray: ${vars.gray};
    --yellow: ${vars.yellow};
    --blue: ${vars.blue};
    --red: ${vars.red};
    --pink: ${vars.pink};
    --purple: ${vars.purple};
    --black: ${vars.black};
    --white: ${vars.white};
    --font-heading: ${vars.fontHeading};
    --font-body: ${vars.fontBody};
    --font-code: ${vars.fontCode};
    //font-size: 10px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 1.7rem;
  }

  body {
    font-size: 2rem;
    line-height: 1.6;
    font-family: var(--font-code);
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    font-weight: 800;
  }
  

  //h2 {
  //  font-family: 'Montserrat', sans-serif;
  //  font-weight: bold;
  //  font-size: 4rem;
  //}
  //
  //h4 {
  //  font-family: 'Montserrat', sans-serif;
  //  font-weight: bold;
  //  font-size: 3rem;
  //}

`

export default GlobalStyle;
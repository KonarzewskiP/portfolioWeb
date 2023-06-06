import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledNav = styled(motion.nav)`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1rem;

  @media (max-width: 1100px) {
    padding:  1rem 5rem;
  }
  @media (max-width: 800px) {
   padding:  1rem 2rem;
  }

  ul {
    display: flex;
  }

  li {
    margin-left: 5rem;
    position: relative;
    @media (max-width: 1100px) {
      margin-left: 4rem;
    }
    @media (max-width: 800px) {
      margin-left: 2rem;
    }
  }

  #logo {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
`
export const Line = styled(motion.div)`
  height: 0.1rem;
  width: 0;
  position: absolute;
  bottom: -10%;
  left: -1%;
  @media (max-width: 1300px) {
    left: 0;
  }
`
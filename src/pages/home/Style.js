import styled, {css} from "styled-components";
import {motion} from "framer-motion";

export const StyledAbout = styled(motion.div)`
  text-align: left;
  padding: 15rem 10rem;
  color: #23d997;
  margin-top: -5vh;

  @media (max-width: 1100px) {
    padding: 13rem 6rem;
  }
  @media (max-width: 800px) {
    padding: 10rem 2rem;
  }
  
  h2 {
    @media (max-width: 1430px) {
      font-size: 3rem;
    }
    
    @media (max-width: 1150px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  p {
    color: #898f96;
    font-size: 1.7rem;
    
    @media (max-width: 1430px) {
      font-size: 1.5rem;
    }
    @media (max-width: 1150px) {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      font-size: 1.1rem;
      padding-right: 2rem;
    }
  }
`
export const StyledInfo = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`

export const StyledSpan = styled(motion.span)`
  color: #23d997;
`

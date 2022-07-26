import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledExperience = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  h4 {
    padding: 2rem;
    @media (max-width: 1100px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }
  
  h3 { 
    padding: 4rem 0;
    font-size: 2rem;
    
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
`

export const TechnicalSkills = styled.div`
  width: 90%;
  
  a {
    text-decoration: underline;
    color: #000;
   
  }
`
export const Icons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  img {
    height: 100px;
    margin: 7px;
    @media (max-width: 800px) {
      height: 70px;
    }
  }
`

export const Icon = styled.div`
  justify-content: center;
  padding: 0.7rem;
`
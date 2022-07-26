import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledProjects = styled(motion.div)`
  height: 100%;
  padding: 5rem 2rem;
  color: #fff;
  background: #1E1E1E;
  margin-top: -5vh;

  @media (max-width: 1100px) {
    padding: 5rem 1rem;
  }
  @media (max-width: 800px) {
    padding: 5rem 0;
  }

  h2 {
    @media (min-width: 1100px) {
      padding-left: 10rem;

    }
    @media (max-width: 1100px) {
      display: flex;
      justify-content: center;
      font-size: 3rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
`
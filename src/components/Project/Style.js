import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledProject = styled.div`
  padding: 2rem 0;
  //width: 90%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;


  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  h4 {
    font-size: 2.5rem;
    @media (max-width: 1100px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  p {
    padding: 1rem 0;
    font-size: 1.7rem;
    width: 70%;
    line-height: 2.5rem;
    @media (max-width: 1100px) {
      font-size: 1.7rem;
      width: 100%;
    }
    @media (max-width: 800px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

`

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media (max-width: 480px) {
    width: 90%;
  }

  img {;
    margin: 1rem 0;
    height: 65px;
    @media (max-width: 800px) {
      height: 50px;
    }
  }


`
export const StyledImage = styled.div`
  //padding: 1rem;
  width: 50%;
  position: relative;
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 80%;
  }

  img {
    display: block;
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`

export const StyledOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;

  h4 {
    margin: 2rem;
  }

  p {
    line-height: 3rem;
  }
`
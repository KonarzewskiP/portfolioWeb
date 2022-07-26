import styled from "styled-components";
import {motion} from "framer-motion";

export const StyledContacts = styled(motion.div)`
  height: 100%;
  padding: 5rem 0;
  color: #565656;
  background: #e5e5e5;
  margin-top: -5vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;

  h2 {
    color: #000000;
    @media (max-width: 1100px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1.5rem;
    padding: 2rem;
    @media (max-width: 800px) {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
  a {
    margin: 2.5rem;
  }
  span {
    color: #000000;
  }
`

export const StyledContactInfo = styled.div`
  width: 30%;
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }

  img {
    height: 65px;
    @media (max-width: 800px) {
      height: 55px;
    }
  }
`

export const StyledImage = styled.div`
  img{
    width: 70%;
    @media (max-width: 1100px) {
      width: 80%;
    }
    @media (max-width: 800px) {
      width: 90%;
    }
  }

`
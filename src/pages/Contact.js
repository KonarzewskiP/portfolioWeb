import React from 'react';
import styled from "styled-components";
//Import Animations
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import {animateView} from "../animations";
//Import Pages
import Nav from "../components/Nav";

//Import image
import image from "../img/ran_3.png";
import git from "../img/git_black_1.png";
import linkedIn from "../img/linkedIn_black_1.png";

const Contact = () => {
    return (
        <motion.div variants={animateView} initial="start" animate="end" exit="start">
            <Frame/>
            <Nav/>
            <StyledContacts>
                <h2>Contact</h2>
                <StyledContactInfo>
                    <p>
                        Feel free to send me an email
                        <span> pawelkonarzewski13@gmail.com </span>or connect and message me on:
                    </p>
                    <a href="https://github.com/KonarzewskiP" target="_blank" rel="noreferrer"><img src={git}
                                                                                                    alt="git logo"/></a>
                    <a href="https://www.linkedin.com/in/pawe%C5%82-konarzewski-181617194/" target="_blank"
                       rel="noreferrer"><img src={linkedIn} alt="linked in logo"/></a>
                </StyledContactInfo>
                <StyledImage>
                    <img src={image} alt="man behind computer"/>
                </StyledImage>
            </StyledContacts>
        </motion.div>
    );
};

const StyledContacts = styled(motion.div)`
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

const StyledContactInfo = styled.div`
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

const StyledImage = styled.div`
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
export default Contact;
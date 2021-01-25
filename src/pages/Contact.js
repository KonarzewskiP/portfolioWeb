import React, {Fragment} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import {animateView} from "../animations";

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
                <StyledContact>
                    <StyledContactInfo>
                        <p>
                            Feel free to send me an email
                            <span> pawelkonarzewski13@gmail.com </span>or connect and message me on:
                        </p>
                        <a href="/"><img src={git} alt="git logo"/></a>
                        <a href="/"><img src={linkedIn} alt="linked in logo"/></a>
                    </StyledContactInfo>
                </StyledContact>
                <StyledContact>
                    <StyledImage>
                        <img src={image} alt="man behind computer"/>
                    </StyledImage>
                </StyledContact>
            </StyledContacts>
        </motion.div>
    );
};

const StyledContacts = styled(motion.div)`
  padding: 5rem 10rem;
  color: #565656;
  background: #e5e5e5;
  margin-top: -5vh;
  text-align: center;

  h2 {
    display: flex;
    justify-content: center;
    color: #000000;
  }

`

const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledContactInfo = styled.div`
  width: 600px;

  p {
    font-size: 2rem;
    padding: 2rem;
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-align: center;
    margin: 3rem;
  }

  img {
    height: 75px;
    @media (max-width: 800px) {
      height: 65px;
    }
  }

  span {
    color: #000000;
    text-align: center;
  }
`

const StyledImage = styled.div`
  img {
    height: 600px;
    @media (max-width: 800px) {
      height: 400px;
    }
  }
`
export default Contact;
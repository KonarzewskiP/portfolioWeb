import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import {animView} from "../animations";


const About = () => {
    return (
        <motion.div variants={animView} initial="start" animate="end" exit="start">
            <Frame/>
            <Nav/>
            <AboutStyled>
            </AboutStyled>
        </motion.div>
    );
};

const AboutStyled = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  background: #0BE5BC;
  background-size: cover;
  margin-top: -5vh;
  //z-index: 2;
`

const startFrame = styled(motion.div)`
  background: greenyellow;
  //z-index: 101;
`

export default About;
import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import {animateView} from "../animations";
import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import RandomFacts from "../components/RandomFacts";


const About = () => {
    return (
        <motion.div variants={animateView} initial="start" animate="end" exit="start">
            <Frame/>
            <Nav/>
            <AboutStyled>
                <AboutMeSection/>
                <ExperienceSection/>
                <RandomFacts/>
            </AboutStyled>
        </motion.div>
    );
};

const AboutStyled = styled(motion.div)`
  min-height: 100vh;
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  background: #3bf6d4;
  background-size: cover;
  margin-top: -5vh;


`

export default About;
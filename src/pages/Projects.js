import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import {animView} from "../animations";

const Projects = () => {
    return (
        <motion.div variants={animView} initial="start" animate="end" exit="start">
            <Frame/>
            <Nav/>
            <StyledProjects>
            </StyledProjects>
        </motion.div>
    );
};

const StyledProjects = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #23d997;
  background: #1E1E1E;
  margin-top: -5vh;
`

export default Projects;
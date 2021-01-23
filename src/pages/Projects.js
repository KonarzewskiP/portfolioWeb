import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const Projects = () => {
    return (
        <StyledProjects>

        </StyledProjects>
    );
};

const StyledProjects = styled(motion.div)`
  min-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #23d997;
  background: #1E1E1E;
`

export default Projects;
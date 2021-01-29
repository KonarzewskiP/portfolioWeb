import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import {animateView} from "../animations";

//Import Project Data
import data from "../data/ProjectsData";
import ProjectComponent from "../components/ProjectComponent";

const Projects = () => {
    const [...projects] = data();
    console.log(projects);

    return (
        <motion.div variants={animateView} initial="start" animate="end" exit="start">
            <Frame/>
            <Nav/>
            <StyledProjects>
                <h2>Projects</h2>
                {projects.map(
                    project => (<ProjectComponent project={project} key={project.id}/>))
                }
            </StyledProjects>
        </motion.div>
    );
};

const StyledProjects = styled(motion.div)`
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


export default Projects;
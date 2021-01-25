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
  min-height: 100vh;
  //display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
  background: #1E1E1E;
  margin-top: -5vh;
`


export default Projects;
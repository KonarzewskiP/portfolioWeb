import React from 'react';
import {motion} from "framer-motion";
import NavBar from "../../components/NavBar/index";
import {animateView} from "../../animations";

//Import Project Data
import data from "../../assets/projectsData/ProjectsData";
import {StyledProjects} from "./Style";
import Project from "../../components/Project";

const Projects = () => {
    const [...projects] = data();
    console.log(projects);

    return (
        // <motion.div variants={animateView} initial="start" animate="end" exit="start">
        <>
            <NavBar/>
            <StyledProjects>
                {projects.map(
                    project => (<Project project={project} key={project.id}/>))
                }
            </StyledProjects>
        </>
        // </motion.div>
    );
};

export default Projects;
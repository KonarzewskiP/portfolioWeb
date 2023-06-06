import React from 'react';
import NavBar from "../../components/NavBar/index";
//Import Project Data
import data from "../../assets/projectsData/ProjectsData";
import {StyledProjects} from "./Style";
import Project from "../../components/Project";

const Projects = () => {
    const [...projects] = data();
    console.log(projects);

    return (
        <>
            <NavBar/>
            <StyledProjects>
                {projects.map(
                    project => (<Project project={project} key={project.id}/>))
                }
            </StyledProjects>
        </>
    );
};

export default Projects;
import React from 'react';
import gitLogo from '../../assets/img/git_small_1.png';
import {StyledDescription, StyledImage, StyledOverlay, StyledProject} from "./Style";

const Project = ({project}) => {
    return (
        <StyledProject>
            <StyledDescription>
                <h4>{`${project.name}`}</h4>
                <p>{`${project.description}`}</p>
                <a href={project.gitHubLink} target="_blank" rel="noreferrer"><img src={gitLogo} alt="GitHub logo"/></a>
            </StyledDescription>
            <StyledImage>
                <img src={project.image} alt="project"/>
                <StyledOverlay whileHover={{opacity: 1}}>
                    <h4>TECH USED:</h4>
                    <p>{project.technology.join(", ")}</p>
                </StyledOverlay>
            </StyledImage>
        </StyledProject>
    );
};


export default Project;
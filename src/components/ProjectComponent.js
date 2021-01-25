import React from 'react';
import styled from "styled-components";
import mySQL from '../img/mySQL_1.png'
import gitLogo from '../img/git_small_1.png';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const ProjectComponent = ({project}) => {
    return (
        <StyledProject>
            <StyledInfo>
                <h4>{`${project.name}`}</h4>
                <p>{`${project.description}`}</p>
                <a href={project.gitHubLink}><img src={gitLogo} alt="GitHub logo"/></a>
            </StyledInfo>
            <StyledImg>
                <Shadow>
                    <img src={project.image} alt="project"/>
                    <StyledOverlay whileHover={{opacity:1}}>
                        <h4>TECH USED:</h4>
                        <p>{project.technology.join(", ")}</p>
                    </StyledOverlay>
                </Shadow>
            </StyledImg>
        </StyledProject>
    );
};
const StyledProject = styled.div`
  min-height: 30vh;
  display: flex;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;

  p {
    text-align: left;
    padding: 1rem 2rem 1rem 0;
    font-size: 2rem;
    line-height: 2rem;
  }

`
const StyledInfo = styled.div`
  flex: 1;
  background: transparent;
  text-align: center;
  

  h4 {
    text-align: left;
  }

  img {
    margin: 1rem;
    height: 50px;
  }
`

const StyledImg = styled.div`
  flex: 1;
  //background: transparent;
`
const Shadow = styled(motion.div)`
  position: relative;
  //
  //opacity: 1;
  //transition: 1s;
  //filter: opacity(1);

  img {
    display: block;
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  //:hover {
  //  transition: 1s;
  //  filter: opacity(0.2);
  //}
  p{
    text-align: center;
  }
`

const StyledOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.9);
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  
  h4{
   margin: 2rem;
  }
  p{
    line-height: 3rem;
  }
  
`

export default ProjectComponent;
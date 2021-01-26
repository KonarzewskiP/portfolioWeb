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
                <Test>
                    <h4>{`${project.name}`}</h4>
                    <p>{`${project.description}`}</p>
                    <a href={project.gitHubLink}><img src={gitLogo} alt="GitHub logo"/></a>
                </Test>
            </StyledInfo>
            <StyledInfo>
                <Test>
                    <Shadow>
                        <img src={project.image} alt="project"/>
                        <StyledOverlay whileHover={{opacity: 1}}>
                            <h4>TECH USED:</h4>
                            <p>{project.technology.join(", ")}</p>
                        </StyledOverlay>
                    </Shadow>
                </Test>
            </StyledInfo>
        </StyledProject>
    );
};
const StyledProject = styled.div`
  //min-height: 50vh;
  
  //flex-wrap: wrap;
  padding: 2rem 0;
  //margin: auto;
  //display: flex;
  text-align: center;
  //align-items: center;
  //justify-content: center;
  @media (min-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  p {
    padding: 1rem 0;
    font-size: 1.7rem;

    line-height: 2.5rem;
    @media (max-width: 1100px) {
      font-size: 1.7rem;
    }
    @media (max-width: 800px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`
const StyledInfo = styled.div`
  
  img {;
    margin: 1rem 0;
    height: 65px;
    @media (max-width: 800px) {
      height: 50px;
    }
  }
`

const Test = styled.div`
  padding: 1rem;
  flex: 1;
  width: 700px;
  @media (max-width: 1100px) {
    width: 700px;
    margin: auto;
  }
  @media (max-width: 800px) {
    width: 460px;
    margin: auto;
  }
  
  h4{
    font-size: 2.5rem;
    @media (max-width: 1100px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }
`





const Shadow = styled(motion.div)`
  position: relative;

  img {
    display: block;
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  p {
    text-align: center;
  }
`

const StyledOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;

  h4 {
    margin: 2rem;
  }

  p {
    line-height: 3rem;
  }

`

export default ProjectComponent;
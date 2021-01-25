import React from 'react';
import styled from "styled-components";
//Images
import react from '../img/react_black_2.png'
import html from '../img/HTML_1.png'
import java2 from '../img/java_2.png'
import css from '../img/CSS_1.png'
import js from '../img/js_3.png'
import mySQL from '../img/mySQL_1.png'
import jUnit from '../img/JUnit5_1.png'
import hibernate from '../img/Hibernate_1.png'
import git from '../img/Git_1.png'
import bootstrap from '../img/Bootstrap_1.png'
import spring2 from '../img/spring_2.png'
import thymeleaf from '../img/thymeleaf_1.png'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const ExperienceSection = () => {
    return (
        <StyledExperience>
            <TechnicalSkills>
                <h4>Technical Skills</h4>
                <Icons>
                    <Icon>
                        <div className="logo">
                            <motion.img src={react} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>

                    <Icon>
                        <div className="logo">
                            <motion.img src={html} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={js} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={css} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={java2} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={mySQL} alt="react logo" whileHover={{scale: 1.2}} />
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={jUnit} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={hibernate} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={spring2} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={git} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={bootstrap} alt="react logo" whileHover={{scale: 1.2}}/>
                        </div>
                    </Icon>
                    <Icon>
                        <div className="logo">
                            <motion.img src={thymeleaf} alt="react logo" whileHover={{scale: 1.2}} />
                        </div>
                    </Icon>

                <h3>To see my skills in action, check out my <Link to="/projects"  ><motion.span whileHover={{scale: 1.2,color: "#fff"}}>projects.</motion.span></Link></h3>
                </Icons>
                </TechnicalSkills>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  h4 {
    padding: 2rem;
    @media (max-width: 1100px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 1.8rem;
      //padding: 2rem 0;
    }
  }
  
  h3 { 
    padding: 4rem 0;
    font-size: 2rem;
    
    @media (max-width: 800px) {
      font-size: 1.5rem;
      //padding: 2rem 0;
    }
  }
`

const TechnicalSkills = styled.div`
  a {
    text-decoration: underline;
    color: #000;
  }
`
const Icons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1000px;
  
  @media (max-width: 1100px) {
    width: 700px;
    margin: auto;
  }
  @media (max-width: 800px) {
    width: 500px;
    margin: auto;
  }

  img {
    height: 100px;
    margin: 7px;
    @media (max-width: 800px) {
      height: 80px;
    }
  }
`

const Icon = styled.div`
  justify-content: center;
  padding: 1rem;

`


export default ExperienceSection;
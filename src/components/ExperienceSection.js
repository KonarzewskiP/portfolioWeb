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
        <StyledMainDiv>
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
                </Icons>
                <h3>To see my skills in action, check out my <Link to="/projects"  ><motion.span whileHover={{scale: 1.2,color: "#fff"}}>projects.</motion.span></Link></h3>
            </TechnicalSkills>
        </StyledMainDiv>
    );
};

const StyledMainDiv = styled.div`
  display: flex;
  //height: 100vh;
  //width: 100%;
  overflow: hidden;

  h4 {
    text-align: center;
    padding: 4rem 0;
  }
  
  h3 { 
    padding: 4rem 0;
    text-align: center;
    font-size: 2rem;
    //font-weight: lighter;
  }
`

const TechnicalSkills = styled.div`
  flex: 1;
  background: transparent;
  overflow: hidden;
  
  a {
    text-decoration: underline;
    color: #000;
  }
`

const Icons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //width: 12.5%;

  img {
    width: 100%;
    height: 100px;
    margin: 7px;
  }

`

const Icon = styled.div`
  padding: 1rem;

  .logo {
    display: flex;

  }
`


export default ExperienceSection;
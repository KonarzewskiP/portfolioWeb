import React from 'react';
//Images
import react from '../../assets/img/react_black_2.png'
import html from '../../assets/img/HTML_1.png'
import java2 from '../../assets/img/java_2.png'
import css from '../../assets/img/CSS_1.png'
import js from '../../assets/img/js_3.png'
import mySQL from '../../assets/img/mySQL_1.png'
import jUnit from '../../assets/img/JUnit5_1.png'
import hibernate from '../../assets/img/Hibernate_1.png'
import git from '../../assets/img/Git_1.png'
import bootstrap from '../../assets/img/Bootstrap_1.png'
import spring2 from '../../assets/img/spring_2.png'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {Icon, Icons, StyledExperience, TechnicalSkills} from "./Style";

const Experience = () => {
    const displayImage = (srcImage) => {
        return <Icon>
            <div className="logo">
                <motion.img src={srcImage} alt="react logo" whileHover={{scale: 1.2}}/>
            </div>
        </Icon>
    }
    return (
        <StyledExperience>
            <TechnicalSkills>
                <h4>Technical Skills</h4>
                <Icons>
                    {displayImage(react)}
                    {displayImage(html)}
                    {displayImage(js)}
                    {displayImage(css)}
                    {displayImage(java2)}
                    {displayImage(mySQL)}
                    {displayImage(jUnit)}
                    {displayImage(hibernate)}
                    {displayImage(spring2)}
                    {displayImage(git)}
                    {displayImage(bootstrap)}
                </Icons>
                <h3>To see my skills in action, check out my <Link to="/projects">
                    <motion.span whileHover={{scale: 1.2, color: "#23d997"}}>projects.</motion.span>
                </Link></h3>
            </TechnicalSkills>
        </StyledExperience>
    );
};

export default Experience;
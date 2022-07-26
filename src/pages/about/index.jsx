import React from 'react';
//Animations
import {motion} from "framer-motion";
import {animateView} from "../../animations";
//Styles
import {AboutStyled} from "./Style";
//Import Pages
import NavBar from "../../components/NavBar/index";
import AboutMe from "../../components/AboutMe/index";
import Experience from "../../components/Experiance/index";

const About = () => {
    return (
        <motion.div variants={animateView} initial="start" animate="end" exit="start">
            <NavBar/>
            <AboutStyled>
                <AboutMe/>
                <Experience/>
            </AboutStyled>
        </motion.div>
    );
};

export default About;
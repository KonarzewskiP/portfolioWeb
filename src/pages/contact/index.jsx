import React from 'react';
//Import Animations
import {motion} from "framer-motion";
// import Frame from "../components/Frame";
import {animateView} from "../../animations";
//Import Pages
import Nav from "../../components/NavBar";
//Import Styles
import {StyledContactInfo, StyledContacts, StyledImage} from "./Style";
//Import image
import image from "../../assets/img/ran_3.png";
import git from "../../assets/img/git_black_1.png";
import linkedIn from "../../assets/img/linkedIn_black_1.png";


const Contact = () => {
    return (
        <motion.div variants={animateView} initial="start" animate="end" exit="start">
            {/*<Frame/>*/}
            <Nav/>
            <StyledContacts>
                <h2>Contact</h2>
                <StyledContactInfo>
                    <p>
                        Feel free to send me an email
                        <span> pawelkonarzewski13@gmail.com </span>or connect and message me on:
                    </p>
                    <a href="https://github.com/KonarzewskiP" target="_blank" rel="noreferrer">
                        <img src={git} alt="git logo"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pawe%C5%82-konarzewski-181617194/" target="_blank"
                       rel="noreferrer">
                        <img src={linkedIn} alt="linked in logo"/>
                    </a>
                </StyledContactInfo>
                <StyledImage>
                    <img src={image} alt="man behind computer"/>
                </StyledImage>
            </StyledContacts>
        </motion.div>
    );
};


export default Contact;
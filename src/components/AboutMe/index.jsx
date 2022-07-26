import React from 'react';
import {StyledAbout, StyledAboutMe} from "./Style";

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <StyledAbout>
                <h2>About me</h2>
                <p> My name is Pawel, and I am a Junior Software Developer based in London. I am currently looking
                    for a new career opportunity which allow me to fully utilise my knowledge and skills,
                    and further grow and develop my programming skills.
                </p>
                <br/>
                <p>
                    My goal is to join an open and collaborative team of software engineers, where I can continue to learn,
                    challenge myself and contribute energy and knowledge to the success of the Company.
                </p>
            </StyledAbout>
        </StyledAboutMe>
    );
};

export default AboutMe;
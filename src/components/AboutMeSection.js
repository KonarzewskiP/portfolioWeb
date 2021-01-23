import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";

const AboutMeSection = () => {
    return (
        <StyledAboutMe>
            <h2>About me</h2>
            <p> My name is Pawel, and I am Junior Full Stack Developer based in London. I am currently looking for an
                opportunity to join a team of experienced developers and build great software together.
            </p>
            <p>
                I started learning computer programing at 2019 and since then i develop passion for creating software.
                I started learning computer programing at 2019 and since then i develop passion for creating software.
            </p>
            <p>
                I Spend my time designing experiances for mobile and web applications, creating helpful illustrations,
                and writing desing code to bring my work to life.
            </p>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`
  min-height: 60vh;
  width: 100%;
  overflow: hidden;
  display: block;
  padding: 3rem 12rem;
  color: black;
  align-items: center;

  h2 {
    text-align: center;
    padding-bottom: 4rem;
  }
  
  p{
    padding: 1rem;
    font-size: 2rem;
    line-height: 2rem;
  }
`

export default AboutMeSection;
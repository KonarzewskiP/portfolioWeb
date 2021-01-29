import React from 'react';
import styled from "styled-components";

const AboutMeSection = () => {
    return (
        <StyledAboutMe>
            <StyledAbout>
                <h2>About me</h2>
                <p> My name is Pawel, and I am a Junior Full Stack Developer based in London. I am currently looking
                    for a new career opportunity which allow me to fully utilise my knowledge and skills,
                    and further grow and develop my programming abilities.
                </p>
                <br/>
                <p>
                    I possess highly-developed analytical and interpersonal skills, and I adapt to new conditions
                    quickly and easily. I constantly develop my programming skills through online courses, tech blogs
                    and private classes with a tutor. My aim is to become a professional developer and create fully usable and secure software.
                </p>
            </StyledAbout>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`
  
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
  color: black;

  h2 {
    padding-bottom: 4rem;
    @media (max-width: 1100px) {
      font-size: 3rem;
      padding-bottom: 3rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
      padding-bottom: 2rem;
    }
  }

  p {
    line-height: 2.5rem;
    font-weight: lighter;
    @media (max-width: 800px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`

const StyledAbout = styled.div`
  width:60%;
  @media (max-width: 1100px) {
    width:70%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`

export default AboutMeSection;
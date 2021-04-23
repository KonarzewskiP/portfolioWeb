import React from 'react';
import styled from "styled-components";

const AboutMeSection = () => {
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
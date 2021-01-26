import React from 'react';
import styled from "styled-components";

const AboutMeSection = () => {
    return (
        <StyledAboutMe>
            <StyledAbout>
                <h2>About me</h2>
                <p> My name is Pawel, and I am Junior Full Stack Developer based in London. I am currently looking for
                    professional development opportunity that match my interest and competencies. My goal is to make
                    use of my knowledge and skills, connecting the next stages of my professional career with your
                    company.
                </p>
                <br/>
                <p>
                    I possess highly-developed analytical and interpersonal skills and I adapt to new conditions quickly
                    and very well.
                    I constantly develop my programing skills through online courses, tech blogs and private classes
                    with Tutor.
                    My ambition is to join a team in which I could make use of the skills that i possess while having
                    the opportunity to develop alongside more experienced developers.
                </p>
            </StyledAbout>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
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
    //font-size: 1.5rem;
    text-align: left;
    font-weight: lighter;
    @media (max-width: 800px) {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`

const StyledAbout = styled.div`
  width: 1000px;
  @media (max-width: 1100px) {
    width: 700px;
  }
  @media (max-width: 800px) {
    width: 460px;
  }
`

export default AboutMeSection;
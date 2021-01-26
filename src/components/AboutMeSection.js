import React from 'react';
import styled from "styled-components";

const AboutMeSection = () => {
    return (
        <StyledAboutMe>
            <StyledAbout>
                <h2>About me</h2>
                <p> My name is Pawel, and I am Junior Full Stack Developer based in London. I am currently looking for
                    an opportunity to join a team of experienced developers and build great software together.
                </p>
                <p>
                    I started learning computer programing at 2019 and since then i develop passion for creating
                    software.
                    I started learning computer programing at 2019 and since then i develop passion for creating
                    software.
                </p>
                <p>
                    I Spend my time designing experiances for mobile and web applications, creating helpful
                    illustrations,
                    and writing desing code to bring my work to life.
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
    @media (max-width: 1100px) {
      font-size: 1.7rem;
    }
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
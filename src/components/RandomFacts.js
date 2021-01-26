import React from 'react';
import styled from "styled-components";

const RandomFacts = () => {
    return (
        <StyledRandomFacts>
            <RandomFact>
                <h4>3 random facts about me:</h4>
                <p>1. I come from Poland.</p>
                <p>2. When I was younger, I wanted to be a professional skateboarder. In fact I used to skate for 6 years.</p>
                <p>3. On my free time, I learn how to play bass guitar, read books and train boxing.</p>
            </RandomFact>
        </StyledRandomFacts>
    );
};

const StyledRandomFacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h4 {
    padding-bottom: 2rem;
    @media (max-width: 1100px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  p {
    padding: 1rem 0;
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

const RandomFact = styled.div`
  width: 1000px;
  @media (max-width: 1100px) {
    width: 700px;
  }
  @media (max-width: 800px) {
    width: 460px;
  }
`

export default RandomFacts;
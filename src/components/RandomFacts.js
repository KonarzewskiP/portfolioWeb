import React from 'react';
import styled from "styled-components";

const RandomFacts = () => {
    return (
        <StyledRandomFacts>
            <RandomFact>
                <h4>3 random facts about me:</h4>
                <p><b>1.</b> When I was younger, I wanted to become a professional skateboarder. In fact, I used to skate for 6 years.</p>
                <p><b>2.</b> In my free time, I am learning to play the bass guitar, and I enjoy reading books and I train boxing.</p>
                <p><b>3.</b> I used to dance professionally for four years and once the team I was on won Polish Championship.</p>
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
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`

const RandomFact = styled.div`
  width:60%;
  @media (max-width: 1100px) {
    width:70%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`

export default RandomFacts;
import React from 'react';
import styled from "styled-components";

const RandomFacts = () => {
    return (
        <StyledRandomFacts>
            <RandomFact>
                <h4>3 random facts about me:</h4>
                <p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, provident!</p>
                <p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, provident!</p>
                <p>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, provident!</p>
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
      //padding: 2rem 0;
    }
  }
  p{
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
    width:480px;
  }


`

export default RandomFacts;
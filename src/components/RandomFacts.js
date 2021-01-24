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

  h4 {
    text-align: center;
    padding-bottom: 4rem ;
  }
  p{
    text-align: center;
    padding: 1rem;
    font-size: 2rem;
    line-height: 2rem;
  }
`

const RandomFact = styled.div`
  flex: 1;


`

export default RandomFacts;
import React from 'react';
import styled from "styled-components";

const ExperienceSection = () => {
    return (
        <StyledMainDiv>
            <WorkExperience>
                <h4>Work Experience</h4>
            </WorkExperience>
            <TechnicalSkills>
                <h4>Technical Skills</h4>
            </TechnicalSkills>
        </StyledMainDiv>
    );
};

const StyledMainDiv = styled.div`
  display: flex;
  height: 100vh;

`

const WorkExperience = styled.div`
  flex: 1;
  background: yellowgreen;
`

const TechnicalSkills = styled.div`
  flex: 1;
  background: pink;
`

export default ExperienceSection;
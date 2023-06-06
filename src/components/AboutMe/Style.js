import styled from "styled-components";

export const StyledAboutMe = styled.div`
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

export const Container = styled.section`
  padding: 6rem 6rem 8rem;
  margin: 0 auto;
  max-width: 80rem;

  @media (max-width: 1430px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1150px) {
    font-size: 1.3rem;
  }
  @media (max-width: 800px) {
    font-size: 1.1rem;
    padding-right: 2rem;
  }
`;

export const Paragraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Heading = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  line-height: 1.4;
  margin-bottom: 1.5em;
  max-width: 30ch;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1100px) {
    width:50%;
  }

`;
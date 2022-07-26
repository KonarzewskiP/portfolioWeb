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

export const StyledAbout = styled.div`
  width:60%;
  @media (max-width: 1100px) {
    width:70%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
`
import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
//Import Animations
import {motion} from "framer-motion";
import {sentence, letter, animateView, animateTitle} from "../animations";
//Import Pages
import Nav from "../components/Nav";

const MainPage = () => {
    const part1 = "Hi there, I'm ";
    const name = "Pawel Konarzewski. ";
    const part2 = "Full stack developer. ";
    return (
        <motion.div variants={animateView} initial="hidden" animate="show" exit="hidden">
            <Nav/>
            <StyledAbout>
                <StyledInfo>
                        <motion.h2 variants={sentence}>
                            {
                                part1.split("").map((char, index) => {
                                    return (
                                        <motion.span key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}{
                            name.split("").map((char, index) => {
                                return (
                                    <motion.span key={char + "-" + index} variants={letter} style={{color: '#898f96'}}>
                                        {char}
                                    </motion.span>
                                )
                            })}
                            <br/>
                            {
                                part2.split("").map((char, index) => {
                                    return (
                                        <motion.span key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                        </motion.h2>
                <br/>
                    <motion.p variants={animateTitle}>To find more about me go to
                        <Link to="/about"><StyledSpan> about </StyledSpan></Link>
                         section or check my projects<Link to="/projects"><StyledSpan> here.</StyledSpan></Link>
                    </motion.p>
                </StyledInfo>
            </StyledAbout>
        </motion.div>
    );
};


const StyledAbout = styled(motion.div)`
  text-align: left;
  padding: 15rem 10rem;
  color: #23d997;
  margin-top: -5vh;

  @media (max-width: 1100px) {
    padding: 13rem 6rem;
  }
  @media (max-width: 800px) {
    padding: 10rem 2rem;
  }
  
  h2 {
    @media (max-width: 1430px) {
      font-size: 3rem;
    }
    
    @media (max-width: 1150px) {
      font-size: 2.5rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  p {
    color: #898f96;
    font-size: 1.7rem;
    
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
  }
`
const StyledInfo = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 400px;
`

const StyledSpan = styled(motion.span)`
  color: #23d997;
`

export default MainPage;
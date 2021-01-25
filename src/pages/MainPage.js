import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {sentence, letter, animateView, animateTitle} from "../animations";
import Nav from "../components/Nav";
import {Link} from "react-router-dom";

const MainPage = () => {
    const part1 = "Hi there, I'm ";
    const name = "Pawel Konarzewski. ";
    const part2 = "Full stack developer. Recent graduate of ";
    const part3 = "Software Development Bootcamp.";
    return (
        <motion.div variants={animateView} initial="hidden" animate="show" exit="hidden">
            <Nav/>
            <About>
                <Info>
                    {/*<motion.h2 variants={sentence} initial="hidden" animate="show">*/}
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
                            })}{
                        part3.split("").map((char, index) => {
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
                        section or check my projects <Link to="/projects"><StyledSpan>here.</StyledSpan></Link>
                    </motion.p>
                </Info>
                <EmptyDiv></EmptyDiv>
            </About>
        </motion.div>
    );
};


const About = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #23d997;
  margin-top: -5vh;

  p {
    color: #898f96;
    font-size: 1.7rem;
  }
`
const Info = styled(motion.div)`
  flex: 3;
`

const EmptyDiv = styled.div`
  flex: 1;
`

const StyledSpan = styled(motion.span)`
  color: #23d997;
`

export default MainPage;
import React from 'react';
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {sentence, letter, animView} from "../animations";
import Nav from "../components/Nav";
import Frame from "../components/Frame";

const MainPage = () => {
    const part1 = "Hi there, I'm ";
    const name = "Pawel Konarzewski. ";
    const part2 = "Full stack developer. Recent graduate of ";
    const part3 = "Software Development Bootcamp.";
    return (
        <motion.div variants={animView} initial="start" animate="end" exit="start">
            {/*<Frame/>*/}
            <Nav/>
            <About>
                <Info>
                    <motion.h2 variants={sentence} initial="hidden" animate="show">
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
  //background: #C1C1C1;
`
const Info = styled.div`

  flex: 3;
`

const EmptyDiv = styled.div`
  flex: 1;
`


export default MainPage;
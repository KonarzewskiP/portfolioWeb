import React from 'react';
import {Link} from "react-router-dom";
//Import Animations
import {motion} from "framer-motion";
import {sentence, letter, animateView, animateTitle} from "../../animations";
//Import Pages
import NavBar from "../../components/NavBar/index";
import {StyledAbout, StyledInfo, StyledSpan} from "./Style";

const Home = () => {
    const part1 = "Hi there, I'm ";
    const name = "Pawel Konarzewski. ";
    const part2 = "Software developer. ";

    const splitWord = (str, color) => {
        return str.split("").map((char, index) => {
            return (
                <motion.span key={char + "-" + index} variants={letter} style={{color: `${color}`}}>
                    {char}
                </motion.span>
            )
        })
    };

    return (
        <motion.div variants={animateView} initial="hidden" animate="show" exit="hidden">
            <NavBar/>
            <StyledAbout>
                <StyledInfo>
                    <motion.h2 variants={sentence}>
                        {splitWord(part1)}
                        {splitWord(name,'#898f96')}
                        <br/>
                        {splitWord(part2)}
                    </motion.h2>
                    <motion.p variants={animateTitle}>
                        To find more about me go to
                        <Link to="/about">
                            <StyledSpan> about </StyledSpan>
                        </Link>
                        section or check my projects
                        <Link to="/projects">
                            <StyledSpan> here.</StyledSpan>
                        </Link>
                    </motion.p>
                </StyledInfo>
            </StyledAbout>
        </motion.div>
    );
};

export default Home;
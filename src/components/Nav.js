import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Nav = ({pathname, currentColors}) => {

    return (
        <StyledNav style={{background: `${currentColors.background}`}}>
            {console.log(currentColors)}
            <h1><Link to="/" id="logo" style={{color: `${currentColors.hover}`}}>PK</Link></h1>
            <ul>
                <li>
                    <Link to="/about" style={{color: `${currentColors.color}`}}>
                        <motion.span
                            whileHover={{color: `${currentColors.hover}`}}
                            style={{color: pathname === '/about' ? `${currentColors.hover}` : `${currentColors.color}`}}
                        >About
                        </motion.span>
                        <Line style={{background: `${currentColors.hover}`}}
                              transition={{duration: 0.75}}
                              initial={{width: "0%"}}
                              animate={{width: pathname === '/about' ? "100%" : "0%"}}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/projects" style={{color: `${currentColors.color}`}}>
                        <motion.span
                            whileHover={{color: `${currentColors.hover}`}}
                            style={{color: pathname === '/projects' ? `${currentColors.hover}` : `${currentColors.color}`}}
                        >Projects
                        </motion.span>

                        <Line style={{background: `${currentColors.hover}`}}
                              transition={{duration: 0.75}}
                              initial={{width: "0%"}}
                              animate={{width: pathname === '/projects' ? "100%" : "0%"}}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{color: `${currentColors.color}`}}>
                        <motion.span
                            whileHover={{color: `${currentColors.hover}`}}
                            style={{color: pathname === '/contact' ? `${currentColors.hover}` : `${currentColors.color}`}}
                        >Contact
                        </motion.span>

                        <Line style={{background: `${currentColors.hover}`}}
                              transition={{duration: 0.75}}
                              initial={{width: "0%"}}
                              animate={{width: pathname === '/contact' ? "100%" : "0%"}}
                        />
                    </Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  //background: bisque;
  position: sticky;
  top: 0;
  //color: #6B7176;

  a {
    //color: #6B7176;
  }

  ul {
    display: flex;
  }

  li {
    padding-top: 1rem;
    margin-left: 5rem;
    position: relative;
  }

  #logo {
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
`
const Line = styled(motion.div)`
  height: 0.1rem;
  width: 0%;
  position: absolute;
  bottom: -10%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav;
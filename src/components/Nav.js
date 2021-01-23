import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Link,useLocation} from "react-router-dom";
import {motion} from "framer-motion";

const Nav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [colors, changeColors] = useState({});

    useEffect(() => {
        console.log(currentPath);
        if (currentPath === '/contact') {
            changeColors({background: "#C1C1C1", color: "#6B7176", hover: "#000"})
        } else if (currentPath === '/about') {
            changeColors( {background: "#0BE5BC", color: "#6B7176", hover: "#000"})
        } else if (currentPath === '/projects') {
            changeColors({background: "#1E1E1E", color: "#c6c6c6", hover: "#ffffff"})
        } else {
            changeColors({background: "#fff", color: "#6B7176", hover: "#000000"})
        }
        // return colors;
    }, [currentPath]);


    return (
        <StyledNav >
            {console.log(colors)}
            <h1><Link to="/" id="logo"
                      style={{color: `${colors.hover}`}}>PK</Link></h1>
            <ul>
                <li>
                    <Link to="/about"
                          style={{color: `${colors.color}`}}>
                        <motion.span
                            style={{color: currentPath === '/about' ? `${colors.hover}` : `${colors.color}`}}
                        >About
                        </motion.span>
                        <Line style={{background: `${colors.hover}`}}
                              transition={{duration: 0.75}}
                              initial={{width: "0%"}}
                              animate={{width: currentPath === '/about' ? "100%" : "0%"}}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/projects"
                          style={{color: `${colors.color}`}}>
                        <motion.span
                            style={{color: currentPath === '/projects' ? `${colors.hover}` : `${colors.color}`}}
                        >Projects
                        </motion.span>

                        <Line style={{background: `${colors.hover}`}}
                              transition={{duration: 0.75}}
                              initial={{width: "0%"}}
                              animate={{width: currentPath === '/projects' ? "100%" : "0%"}}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/contact"
                          style={{color: `${colors.color}`}}>
                        <motion.span
                            style={{color: currentPath === '/contact' ? `${colors.hover}` : `${colors.color}`}}
                        >Contact
                        </motion.span>

                        <Line style={{background: `${colors.hover}`}}
                              transition={{duration: 0.75}}
                              initial={{width: "0%"}}
                              animate={{width: currentPath === '/contact' ? "100%" : "0%"}}
                        />
                    </Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled(motion.nav)`
  height: 5vh;
  display: flex;
  //margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  //background: rgba(195, 17, 17, 0.0);
  background: transparent;
  position: sticky;
  top: 0;
  //z-index: 10;
  //color: #6B7176;

  a {
    //color: #6B7176;
    text-decoration: none;
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
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
`
const Line = styled(motion.div)`
  height: 0.1rem;
  width: 0%;
  position: absolute;
  bottom: -10%;
  left: -1%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`

export default Nav;
import React, {useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
//Import Animations
import {motion} from "framer-motion";
import {Line, StyledNav} from "./Style";

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [colors, changeColors] = useState({});
    const [navSolid, setNavSolid] = useState(false);

    useEffect(() => {
        if (currentPath === '/projects') {
            changeColors({background: "#1E1E1E", color: "#c6c6c6", hover: "#ffffff"})
        } else {
            changeColors({background: "#E5E5E5", color: "#000000" , hover: "#15a775"})
        }
        // return colors;
    }, [currentPath]);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavSolid(true);
        } else {
            setNavSolid(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <StyledNav style={{background: navSolid ? `${colors.background}` : "transparent"}}>
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

export default NavBar;
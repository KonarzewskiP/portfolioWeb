import React, {Fragment} from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import Frame from "../components/Frame";
import Nav from "../components/Nav";
import {animView} from "../animations";

const Contact = () => {
    return (
        <motion.div variants={animView} initial="start" animate="end" exit="start">
            <Frame/>
            <Nav/>
            <StyledContact>
            </StyledContact>
        </motion.div>
    );
};

const StyledContact = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #23d997;
  background: #C1C1C1;
  margin-top: -5vh;
`

export default Contact;
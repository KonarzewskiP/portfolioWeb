import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <StyledContact>

        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
  min-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #23d997;
  background: #C1C1C1;
`

export default Contact;
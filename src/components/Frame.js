import React, {useEffect} from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";

const slider = {
    hidden: {
        y: '0%',
        width: "500%"
        /*, skew: "45deg"*/
    },
    show: {
        y: "-130%",

        // skew: "0deg",
        transition: {ease: "easeIn", duration: 1}
    }
}

const slider2 = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 0,
        transition: {
            duration: 5
        }
    }
}

const sliderContainer = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.10,
            ease: "easeOut",
        }
    }
}

const Frame = () => {

    return (
        <motion.div>
            <StyledFrame
                variants={slider}
                initial="hidden"
                animate="show">

            </StyledFrame>
        </motion.div>
    );
};

const StyledFrame = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 10;
`

export default Frame;
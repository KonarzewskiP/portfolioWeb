import React from 'react';
import {Container, Heading, Paragraph, StyledAboutMe} from "./Style";

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <Heading>
                    Backend Focused, Java Nerd, Javascript Enthusiast
                </Heading>
                <Paragraph>
                    Hi there, I'm Pawel. I've been professionally coding since 2020. In my
                    career, I had opportunity to be involved in various aspects of the product
                    development process. From software requirements analysis, to implementing
                    front-end solutions, delving into the complexities of back-end development,
                    database management, and ensuring quality of the code through testing
                    and debugging.
                </Paragraph>
                <Paragraph>
                    Currently I am working at TRC as fullstack developer. I am lucky to be part
                    of a team of 5 developers and work on applications related to IoT,
                    micro-mobility and smart parking solutions. My main goal is to create
                    maintainable and scalable software which is pleasure to use.
                </Paragraph>
            </Container>
        </StyledAboutMe>
    );
};

export default AboutMe;
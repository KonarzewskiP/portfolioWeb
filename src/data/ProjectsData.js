import {v4 as uuidv4} from 'uuid';
//Import Images
import Crypto from "../img/projects/Cryptocurrency.png";
import Cashpoint from "../img/projects/Cashpoint.png"
import Portfolio from "../img/projects/Portfolio.png"

const ProjectsData = () => {
    return [
        {  name: "Portfolio Website",
            id: uuidv4(),
            description: "My portfolio website, which I build using React JS, Styled components and Framer " +
                "Motion library. ",
            gitHubLink: "https://github.com/KonarzewskiP/portfolioWeb",
            technology: [
                "HTML",
                "Styled components",
                "React JS",
                "Framer Motion",
            ],
            image: Portfolio,

        },
        {
            name: "Cashpoint",
            id: uuidv4(),
            description: "Cashpoint is a simple ATM simulator. The app is using two CSV files to read accounts and user " +
                "details. Projects was implemented using Java and Command Design Pattern.",
            gitHubLink: "https://github.com/KonarzewskiP/cashpoint",
            technology: [
                "Java",
                "Junit 5",
            ],
            image: Cashpoint,
        },
        {
            name: "Cryptocurrency Wallet",
            id: uuidv4(),
            description: "Cryptocurrency wallet is a final project of Java software development bootcamp. It fetches " +
                "exchange rates from external API, consume JSON and enable registered users to buy or sell" +
                "cryptocurrencies.",
            gitHubLink: "https://github.com/ProjektGrupowyJavalon3/Cryptocurrencywallet",
            technology: [
                "Spring Boot",
                "Spring Security",
                "Junit 5",
                "Mockito",
                "JavaScript",
                "MySQL",
                "Hibernate",
            ],
            image: Crypto,
        },

    ]
};

export default ProjectsData;
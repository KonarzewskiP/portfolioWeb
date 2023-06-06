import {v4 as uuidv4} from 'uuid';
//Import Images
import Crypto from "../img/projects/Cryptocurrency.png";
import Cashpoint from "../img/projects/Cashpoint.png"
import Rover from "../img/projects/MarsRover.png"
import BlackScreen from "../img/projects/BlackScreen.jpg"

const ProjectsData = () => {
    return [
        {
            name: "StorageSpace",
            id: uuidv4(),
            description: "Storage Space is a REST application for renting storage space in " +
                "different warehouses. It is built with Java and Spring Framework. " +
                "It enables to reserve a storage room at the specific warehouse and " +
                "receive a quotation for a chosen room.",
            gitHubLink: "https://github.com/KonarzewskiP/StorageSpace",
            technology: [
                "Spring Boot",
                "Spring Security",
                "Junit 5",
                "Mockito",
                "Java",
                "MySQL",
                "Docker"
            ],
            image: BlackScreen,
        },
        {
            name: "Mars Rover Photos",
            id: uuidv4(),
            description: "Mars Rover is Web Application that integrates with the NASA API. You can choose between 3 different " +
                "Mars Rovers and check pictures from selected cameras and specific day",
            gitHubLink: "https://github.com/KonarzewskiP/NasaRover",
            technology: [
                "HTML",
                "Styled components",
                "React JS",
            ],
            image: Rover,
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
                "exchange rates from external API, consume JSON and enable registered users to buy or sell " +
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
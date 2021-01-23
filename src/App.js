import React, {useState, useEffect} from 'react';
//Global style
import GlobalStyle from "./components/GlobalStyles";
//Import Pages
import MainPage from "./pages/MainPage";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
//Animation

function App() {
    const location = useLocation();
    const currentPath = location.pathname;
    //State
    const [currentColors, setCurrentColors] = useState({
        /*        background: "",
                color: "",
                hover: ""*/
    });

    useEffect(() => {
        console.log(currentPath);
        if (currentPath === '/contact') {
            setCurrentColors({background: "#C1C1C1", color: "#6B7176", hover: "#000"})
        } else if (currentPath === '/about') {
            setCurrentColors( {background: "#0BE5BC", color: "#6B7176", hover: "#000"})
        } else if (currentPath === '/projects') {
            setCurrentColors({background: "#1E1E1E", color: "#c6c6c6", hover: "#ffffff"})
        } else {
            setCurrentColors({background: "#fff", color: "#6B7176", hover: "#000"})
        }
        // return currentColors;
    }, [currentPath]);

    return (

        <div className="App">
            <GlobalStyle/>
            <Nav pathname={currentPath} currentColors={currentColors}/>
            <Switch location={location} key={currentPath}>
                <Route path="/" exact>
                    <MainPage/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/projects" exact>
                    <Projects/>
                </Route>
                <Route path="/contact" exact>
                    <Contact/>
                </Route>
            </Switch>

        </div>
    );
}

export default App;

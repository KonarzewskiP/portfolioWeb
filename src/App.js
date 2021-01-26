import React from 'react';
//Global style
import GlobalStyle from "./components/GlobalStyles";
//Import Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
//Animation

function App() {
    const location = useLocation();
    //State

    return (

        <div className="App">

            <GlobalStyle/>
            <AnimatePresence exitBeforeEnter>
                <ScrollToTop/>
            <Switch location={location} key={location.pathname}>
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
            </AnimatePresence>

        </div>
    );
}


export default App;

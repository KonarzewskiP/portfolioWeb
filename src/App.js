import React from 'react';
//Global style
import GlobalStyle from "./assets/GlobalStyles";
//Import Pages
import About from "./pages/about/index";
import Projects from "./pages/projects/index";
import Contact from "./pages/contact/index";
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/home";


function App() {
    const location = useLocation();
    return (
        <div className="App">
            <GlobalStyle/>
            <AnimatePresence>
                <ScrollToTop/>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <Home/>
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

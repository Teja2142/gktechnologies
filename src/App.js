import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Mobile from "./Mobile";
import Footer from "./Footer";
import Web from "./Web";
import Api from "./Api";
import Cloud from "./Cloud";
import Ai from "./Ai";
import Data from "./Data"
import Contact from "./Contact";
import Careers from "./Careers";
import About from "./About";


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mobile" element={<Mobile/>}/>
                <Route path="/Web" element={<Web/>}/>
                <Route path="/Api" element={<Api/>}/>
                <Route path="/Cloud" element={<Cloud/>}/>
                <Route path="/Ai" element={<Ai/>}/>
                <Route path="/Data" element={<Data/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Careers" element={<Careers/>}/>
                <Route path="/About" element={<About/>} />
                </Routes>
            <Footer/>
        </Router>
    );
};

export default App;

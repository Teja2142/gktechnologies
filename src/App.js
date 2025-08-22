import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Mobile from "./Mobile";
import Footer from "./Footer";
import Web from "./Web";
import Api from "./Api";
import Cloud from "./Cloud";
import IoT from "./IoT";
import Data from "./Data"
import Contact from "./Contact";
import Careers from "./Careers";
import About from "./About";
import Digital from "./Digital";
import Training from "./Training";
import PostJobs from "./PostJobs"; // Importing PostJobs component
import CareersPage from "./CareersPage"; // Importing CareersPage component


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
                <Route path="/IoT" element={<IoT/>}/>
                <Route path="/Data" element={<Data/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Careers" element={<Careers/>}/>
                <Route path="/About" element={<About/>} />
                <Route path="/Digital" element={<Digital/>}/>
                <Route path="/Training" element={<Training/>} />
                <Route path="/PostJobs" element={<PostJobs />} /> {/* Route for posting jobs */}
                <Route path="/CareersPage" element={<CareersPage />} /> {/* Route for viewing careers */}
                <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            <Footer/>
        </Router>
    );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Studio from "./pages/Studio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    // <Router>

    //   <Header />

    //   <Routes>

    //     <Route path="/home" element={<Home />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/studio" element={<Studio />} />
    //     <Route path="/about" element={<About />} />
    //     {/*
    //     <Route path="/contact" element={<Contact />} /> */}
        
    //   </Routes>
    // </Router>
    
    <>
<div id="header"><Header /></div>
<div id="home"><Home /></div>
<div id="services"><Services /></div>
<div id="studio"><Studio /></div>
<div id="about"><About /></div>
<div id="footer"><Footer /></div>

    
    </>

  );
}

export default App;

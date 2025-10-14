import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Studio from "./pages/Studio";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>

      <Routes>
        {/* 🌍 Page principale : le site scrollable */}
        <Route
          path="/"
          element={
            <>

              <Header />
              <div id="home"><Home /></div>
              <div id="services"><Services /></div>
              <div id="studio"><Studio /></div>
              <div id="about"><About /></div>
              <div id="footer"><Footer /></div>
            </>
          }
        />

        {/* 📩 Page contact séparée */}
        <Route path="/home" element={<Home />}/>
        <Route path="/services" element={
          <>
            <Header />
            <Services />
            <Footer />
          </>
          } />
        <Route path="/studio" element={
          <>
            <Header />
            <Studio />
            <Footer />
          </>
          } />
        <Route path="/about" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
          } />
        <Route path="/contact" element={
          <>
            <Header />
            <Contact />
          </>
          } />
      </Routes>
    </Router>
  );
}

export default App;

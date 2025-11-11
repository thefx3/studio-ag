import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Studio from "./pages/Studio";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Space from "./components/Space";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="services"><Services /></div>
              <div id="footer"><Footer /></div>
            </>
          }
        />

        {/* 📩 Page contact séparée */}
        <Route path="/" element={<Home />} />

        <Route
          path="/services"
          element={
            <>
              <Space height={"20vh"} />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/studio"
          element={
            <>
              <Space height={"20vh"} />
              <Studio />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Space height={"20vh"} />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

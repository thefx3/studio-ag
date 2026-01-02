import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Studio from "./pages/Studio";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Space from "./components/Space";
import "./App.css";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;
    if (!hash) return;

    const id = hash.replace("#", "");
    // Petit délai pour laisser le DOM monter la section avant de scroller
    const timeout = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
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

        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route
          path="/studio"
          element={
            <>
              <Space height={"15vh"} />
              <Studio />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Space height={"15vh"} />
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

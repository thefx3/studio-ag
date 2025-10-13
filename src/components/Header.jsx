// Header.jsx
import { useState } from "react";
import Button from "./Button";
import "./Header.css";
import logo from "../images/logo.png";
import send from "../images/send.png";
import menu from "../images/menu.png";
import close from "../images/close.png";
import { Button_contact } from "./Button";
import { Button2 } from "./Button";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Studio AG Logo" className="logo-image" />
        <Button text="STUDIO AG" to="/" />
      </div>

      {/* Bouton burger visible sur mobile */}
      <div className="burger" onClick={toggleMenu}>
        <img
          src={menuOpen ? close : menu}
          alt="Menu"
          className="burger-icon"
        />
      </div>

      <nav className={`header-middle ${menuOpen ? "active" : ""}`}>
        <Button text="Services et Tarifs" to="services" />
        <Button text="La Brique Studio" to="studio" />
        <Button2 text="Qui suis-je ?" to="about" />
      </nav>

      <nav className="header-right">
        <img src={send} alt="Send Logo" className="icon" />
        <Button_contact text="Contact" to="/contact" />
      </nav>
    </header>
  );
}

export default Header;

function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Studio AG Logo" className="logo-image" />
        <Button2 text="STUDIO AG" to="/" />
      </div>

      {/* Bouton burger visible sur mobile */}
      <div className="burger" onClick={toggleMenu}>
        <img
          src={menuOpen ? close : menu}
          alt="Menu"
          className="burger-icon"
        />
      </div>

      <nav className={`header-middle ${menuOpen ? "active" : ""}`}>
        <Button2 text="Services et Tarifs" to="/services" />
        <Button2 text="La Brique Studio" to="/studio" />
        <Button2 text="Qui suis-je ?" to="/about" />
      </nav>

      <nav className="header-right">
        <img src={send} alt="Send Logo" className="icon" />
        <Button_contact text="Contact" to="/contact" />
      </nav>
    </header>
  );
}

export {Header2};
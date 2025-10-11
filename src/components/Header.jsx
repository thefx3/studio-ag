// Header.jsx
import { useState } from "react";
import Button from "./Button";
import "./Header.css";
import logo from "../images/logo.png";
import send from "../images/send.png";
import menu from "../images/menu.png";
import close from "../images/close.png";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Studio AG Logo" className="logo-image" />
        <Button text="STUDIO AG" to="home" />
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
        <Button text="Qui suis-je ?" to="about" />
      </nav>

      <div className="header-right">
        <img src={send} alt="Send Logo" className="icon" />
        <Button text="Contact" to="contact" />
      </div>
    </header>
  );
}

export default Header;

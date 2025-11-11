import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button, { Button2, Button_contact } from "./Button";
import "./Header.css";

import logo from "../images/logo.png";
import send from "../images/send.png";
import menu from "../images/menu.png";
import close from "../images/close.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isContactPage = location.pathname === "/contact";

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Studio AG Logo" className="logo-image" />
        <Button2 text="STUDIO AG" to="/" />
      </div>

      <div className="burger" onClick={toggleMenu}>
        <img src={menuOpen ? close : menu} alt="Menu" className="burger-icon" />
      </div>

      {/* Si on n’est PAS sur la page Contact */}
      {!isContactPage && (
        <>
          <nav className={`header-middle ${menuOpen ? "active" : ""}`}>
            <Button text="Services et Tarifs" to="services" />
            <Button text="La Brique Studio" to="studio" />
            <Button text="Qui suis-je ?" to="about" />
          </nav>

          <nav className="header-right">
            <img src={send} alt="Send Logo" className="icon" />
            <Button_contact text="Contacter" to="/contact" />
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;

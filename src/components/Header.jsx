import { Link } from "react-router-dom";
import Button from "./Button";
import "./Header.css";
import logo from "../images/logo.png";
import send from "../images/send.png";


function Header() {
  return (
    <header className="header">
      <nav className="header-left">
        <img src={logo} alt="Studio AG Logo" className="logo-image" />
        <Button text="STUDIO AG" to="home" />
      </nav>
      <nav className="header-middle">
        <Button text="Services et Tarifs" to="services" />
        <Button text="La Brique Studio" to="studio" />
        <Button text="Qui suis-je ?" to="about" />
      </nav>
      <nav className="header-right">
        <img src={send} alt="Send Logo" className="icon" />
        <Button text="Contact" to="contact" />
      </nav>
    </header>
  );
}

export default Header;

// src/components/Button.jsx

import { Link } from "react-router-dom";
import "./Button.css";

// 🔹 Bouton de navigation interne (scroll)
export default function Button({ text, to }) {
  const handleClick = () => {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${to}`); // met à jour l'URL sans recharger
    }
  };

  return (
    <button className="nav-button" onClick={handleClick}>
      {text}
    </button>
  );
}

// 🔹 Bouton de lien externe ou page séparée
export function Button2({ text, to }) {
  return (
    <Link to={to} className="nav-button">
      {text}
    </Link>
  );
}

// 🔹 Bouton de contact (style différent)
export function Button_contact({ text, to }) {
  return (
    <Link to={to} className="contact-button nav-button">
      {text}
    </Link>
  );
}
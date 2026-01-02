// src/components/Button.jsx

import { Link, useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import "./Button.css";

// 🔹 Bouton de navigation interne (scroll)
export default function Button({ text, to }) {
  const location = useLocation();

  const scrollToSection = useCallback(() => {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [to]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash === `#${to}`) {
      scrollToSection();
    }
  }, [location.hash, location.pathname, scrollToSection, to]);

  return (
    <button className="nav-button" onClick={scrollToSection}>
      {text}
    </button>
  );
}



// 🔹 Bouton de lien externe ou page séparée
export function Button2({ text, to }) {
  const isServicesLink = ["/services", "services", "#services"].includes(
    (to || "").toString().toLowerCase()
  );
  const resolvedTo = isServicesLink ? "/#services" : to;

  return (
    <Link to={resolvedTo} className="nav-button">
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

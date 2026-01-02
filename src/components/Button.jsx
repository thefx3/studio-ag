// src/components/Button.jsx

import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const normalizedTo = (to || "").toString().toLowerCase();
  const isServicesLink = ["/services", "services", "#services"].includes(normalizedTo);
  const resolvedTo = isServicesLink ? "/#services" : to;

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  const handleClick = (e) => {
    if (!isServicesLink) return;

    e.preventDefault();

    // Si on est déjà sur la home, scroll directement sans recharger la page
    if (location.pathname === "/") {
      scrollToServices();
      return;
    }

    // Sinon, navigation vers la home avec hash ; on force un scroll après navigation au cas où
    navigate(resolvedTo);
    // Plusieurs tentatives pour laisser le temps au DOM de monter la section
    [30, 80, 150].forEach((delay) => {
      setTimeout(() => {
        scrollToServices();
      }, delay);
    });
  };

  return (
    <Link to={resolvedTo} className="nav-button" onClick={handleClick}>
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

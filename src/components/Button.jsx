// src/components/Button.jsx

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import "./Button.css";

// 🔹 Bouton de navigation interne (scroll)
export default function Button({ text, to }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (updateHash = false) => {
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        if (updateHash && location.hash !== `#${to}`) {
          window.history.pushState(null, "", `#${to}`);
        }
      }
    },
    [location.hash, to]
  );

  useEffect(() => {
    if (location.pathname === "/" && location.hash === `#${to}`) {
      scrollToSection();
    }
  }, [location.hash, location.pathname, scrollToSection, to]);

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate(`/#${to}`);
      return;
    }
    scrollToSection(true);
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

// src/components/Button.jsx

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import "./Button.css";

function useSectionNavigation(to) {
  const location = useLocation();
  const navigate = useNavigate();
  const normalizedTo = (to || "").toString().trim();
  const lowerTo = normalizedTo.toLowerCase();

  let sectionId = null;
  if (["/services", "services", "#services"].includes(lowerTo)) {
    sectionId = "services";
  } else if (normalizedTo.startsWith("/#")) {
    sectionId = normalizedTo.slice(2);
  } else if (normalizedTo.startsWith("#")) {
    sectionId = normalizedTo.slice(1);
  }

  const resolvedTo = sectionId ? `/#${sectionId}` : to;

  const scrollToSection = useCallback(() => {
    if (!sectionId) return false;

    const section = document.getElementById(sectionId);
    if (!section) return false;

    section.scrollIntoView({ behavior: "smooth" });
    return true;
  }, [sectionId]);

  const handleClick = useCallback(
    (e) => {
      if (!sectionId) return;

      e.preventDefault();

      if (location.pathname === "/") {
        scrollToSection();
        window.history.replaceState(null, "", `/#${sectionId}`);
        return;
      }

      navigate(`/#${sectionId}`);
      [30, 80, 150].forEach((delay) => {
        setTimeout(() => {
          scrollToSection();
        }, delay);
      });
    },
    [location.pathname, navigate, scrollToSection, sectionId]
  );

  return { resolvedTo, handleClick };
}

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
  const { resolvedTo, handleClick } = useSectionNavigation(to);

  return (
    <Link to={resolvedTo} className="nav-button" onClick={handleClick}>
      {text}
    </Link>
  );
}

// 🔹 Bouton de contact (style différent)
export function Button_contact({ text, to }) {
  const isExternalUrl =
    typeof to === "string" && /^(https?:)?\/\//i.test(to);
  const { resolvedTo, handleClick } = useSectionNavigation(to);

  if (isExternalUrl) {
    return (
      <a
        href={to}
        className="contact-button nav-button"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={resolvedTo} className="contact-button nav-button" onClick={handleClick}>
      {text}
    </Link>
  );
}

export function Button_booking({ text, to }) {
  const isExternalUrl =
    typeof to === "string" && /^(https?:)?\/\//i.test(to);
  const { resolvedTo, handleClick } = useSectionNavigation(to);

  if (isExternalUrl) {
    return (
      <a
        href={to}
        className="booking-button nav-button"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={resolvedTo} className="booking-button nav-button" onClick={handleClick}>
      {text}
    </Link>
  );
}

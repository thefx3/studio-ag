// src/components/Button.jsx
import { Link } from "react-router-dom";
import "./Button.css";

//SCROLLING

export default function Button({ text, to}) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // ✅ Met à jour l’URL sans recharger la page
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <button className="nav-button" onClick={() => scrollToSection(to)}>
      {text}
    </button>
  );

}

export function Button_contact({ text, to }) {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="nav-button contact-button" onClick={() => scrollToSection(to)}>
      {text}
    </button>
  );
}

// function Button({ text, to }) {
//   return (
//     <Link to={to} className="nav-button">
//       {text}
//     </Link>
//   );
// }

// export default Button;


// function Button_contact ({ text, to }) {
//   return (
//     <Link to={to} className="nav-button contact-button">
//       {text}
//     </Link>
//   )
// }

// export { Button_contact };

// Button.jsx
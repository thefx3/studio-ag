// src/components/Button.jsx
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ text, to }) {
  return (
    <Link to={to} className="nav-button">
      {text}
    </Link>
  );
}

export default Button;


function Button_contact ({ text, to }) {
  return (
    <Link to={to} className="nav-button contact-button">
      {text}
    </Link>
  )
}

export { Button_contact };
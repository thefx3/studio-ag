import { Link as RouterLink } from "react-router-dom";
import "./Footer-section.css";

function Link({ href, text }) {
  if (!href) return null;

  const normalized = href.toLowerCase().replace(/\/+$/, "");
  const isServicesLink = ["/services", "services", "#services"].includes(normalized);
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    const to = isServicesLink ? "/#services" : href;
    return (
      <RouterLink className="links" to={to}>
        {text}
      </RouterLink>
    );
  }

  return (
    <a className="links" href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

function Footersection({ title, links }) {
  return (
    <div className="footer-section">
      <p className="section-title">{title}</p>

      {links.map((link, index) => (
        <Link key={index} href={link.href} text={link.text} />
      ))}
    </div>
  );
}

export default Footersection;

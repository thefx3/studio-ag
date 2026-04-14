import { useLocation } from "react-router-dom";
import Button, { Button2, Button_contact } from "./Button";
import "./Header.css";

import { client } from "../sanityClient";
import { useEffect, useState } from "react";
import { getContactPageType, resolveContactCtaUrl } from "../constants/contact";


import logo from "../images/logo.png";
import send from "../images/send.png";
import menu from "../images/menu.png";
import close from "../images/close.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  //Sanity data fetching
  const [nav, setNav] = useState(null);
  const [contactDestination, setContactDestination] = useState("form");

  const location = useLocation();

  useEffect(() => {
    client
      .fetch(`*[_type == "navigation"][0]{
        brandName,
        menuItems[]{label, href},
        ctaLabel
      }`)
      .then(setNav);
  }, []);

  useEffect(() => {
    const pageType = getContactPageType(location.pathname);

    client
      .fetch(
        `*[_type == $pageType][0]{
          contactCtaDestination
        }`,
        { pageType }
      )
      .then((res) => {
        setContactDestination(res?.contactCtaDestination || "form");
      })
      .catch(() => {
        setContactDestination("form");
      });
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";

  if (!nav) return <header className="header">Chargement...</header>;

  return (
    <header className="header">

      <div className="header-left">
        <img src={logo} alt="Studio AG Logo" className="logo-image" />

        {/* <Button2 text="STUDIO AG" to="/" /> */}
        {nav && <Button2 text={nav.brandName} to="/" />}

      </div>

      <div className="burger" onClick={toggleMenu}>
        <img src={menuOpen ? close : menu} alt="Menu" className="burger-icon" />
      </div>

      {/* Si on n’est PAS sur la page Contact */}
      {!isContactPage && (
        <>
          <nav className={`header-middle ${menuOpen ? "active" : ""}`}>
            {isHomePage ? (
              <>
                {/* <Button text="Services et Tarifs" to="services" />
                <Button2 text="La Brique Studio" to="/studio" />
                <Button2 text="Qui suis-je ?" to="/about" /> */}

                {nav && nav.menuItems.map(item => (
                  <Button2 key={item.href} text={item.label} to={item.href} />
                ))}

              </>
            ) : (
              <>
                {/* <Button2 text="Services et Tarifs" to="/services" />
                <Button2 text="La Brique Studio" to="/studio" />
                <Button2 text="Qui suis-je ?" to="/about" /> */}

                {nav && nav.menuItems.map(item => (
                  <Button2 key={item.href} text={item.label} to={item.href} />
                ))}
              </>
            )}
          </nav>

          <nav className="header-right">
            <img src={send} alt="Send Logo" className="icon" />

            {/* <Button_contact text="Contacter" to="/contact" /> */}
            {nav && (
              <Button_contact
                text={nav.ctaLabel}
                to={resolveContactCtaUrl(contactDestination)}
              />
            )}
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;

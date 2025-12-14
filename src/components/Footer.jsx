

import "./Footer.css";
import Footersection from "./Footer-section";
import "./Footer.css";
import logo from "../images/logo2.png";
import insta from "../images/insta.png";
import thread from "../images/@.png";
import twitter from "../images/x.png";
import youtube from "../images/youtube.png";

import { client } from "../sanityClient";
import { useEffect, useState } from "react";

function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "footer"][0]{
        brandName,
        description,
        columns[]{title, links[]{label, href}},
        socials[]{label, url},
        legalLinks[]{label, href}
      }`)
      .then(setData);
  }, []);

  if (!data) return <p>Chargement...</p>;

  // Sanity may return null arrays; default to empty lists to keep the UI rendering.
  const columns = data.columns || [];
  const legalLinks = data.legalLinks || [];

  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-topleft">
          <img src={logo} alt="Logo" className="footer-logo" />
          <div className="footer-text">
            <p>{data.brandName}</p>
            <p>{data.description}</p>
          </div>
        </div>

        <div className="footer-topright">
          {columns.map(col => (
            <Footersection
              key={col.title}
              title={col.title}
              links={(col.links || []).map(l => ({ href: l.href, text: l.label }))}
            />
          ))}
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-socials">
                 <img src={insta} alt="Instagram" className="social-icon" />
                 <img src={thread} alt="Threads" className="social-icon" />
                 <img src={twitter} alt="X" className="social-icon" />
                 <img src={youtube} alt="YouTube" className="social-icon" />
        </div>

        <div className="footer-bottomright">
          <ul className="footer-links">
            {legalLinks.map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

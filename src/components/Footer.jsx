
import "./Footer.css";
import Footersection from "./Footer-section";
import logo from "../images/logo2.png";
import insta from "../images/insta.png";
import thread from "../images/@.png";
import twitter from "../images/x.png";
import youtube from "../images/youtube.png";

import { client } from "../sanityClient";
import { useEffect, useState } from "react";

const socialIcons = {
  instagram: { src: insta, alt: "Instagram" },
  threads: { src: thread, alt: "Threads" },
  x: { src: twitter, alt: "X" },
  twitter: { src: twitter, alt: "X" },
  youtube: { src: youtube, alt: "YouTube" },
};

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
  const socials = (data.socials || [])
    .map((social) => {
      const icon = socialIcons[social.label?.trim().toLowerCase()];
      if (!icon) return null;

      return {
        ...icon,
        label: social.label,
        url: social.url,
      };
    })
    .filter(Boolean);

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
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <img src={social.src} alt={social.alt} className="social-icon" />
            </a>
          ))}
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

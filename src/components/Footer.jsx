import "./Footer.css";
import logo from "../images/logo2.png";
import Footersection from "./Footer-section";
import insta from "../images/insta.png";
import thread from "../images/@.png";
import twitter from "../images/x.png";
import youtube from "../images/youtube.png";

import { useEffect, useState } from "react";
import { client } from "../sanityClient";


function Footer () {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
    client.fetch(`*[_type == "footer"][0]{
        brandName,
        description,
        columns[]{ title, links[]{label, href} },
        socials[]{label, url},
        legalLinks[]{label, href}
    }`).then(setFooterData);
    }, []);

    if (!data) return <p>Chargement...</p>;

  return (
    <footer className="footer">
        
        <div className ="footer-top">
            <div className="footer-topleft">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className ="footer-text">
                    {/* <p>STUDIO AG</p>
                    <p>Professional mixing and mastering studio dedicated to helping artists overcome
                    the frustration of unpolished, unbalanced, or lifeless mixes.
                    </p> */}
                    <p>{data.brandName}</p>
                    <p>{data.description}</p>
                </div>
            </div>

            <div className="footer-topright">
                {/* <Footersection
                title="Mix and Mastering"
                links={[
                { href: "/", text: "Présentation" },
                { href: "/services", text: "Services et Tarifs" },
                { href: "/about", text: "Qui suis-je ?" },
                ]}
            />
            <Footersection
                title="Studio Brique"
                links={[
                { href: "/software", text: "Software" },
                { href: "/hardware", text: "Hardware" },
                { href: "/booking", text: "Booking" },
                ]}
            /> */}

                {footerData && footerData.columns.map(col => (
                <Footersection
                    key={col.title}
                    title={col.title}
                    links={col.links.map(l => ({href: l.href, text: l.label}))}
                />
                ))}

            </div>
        </div>

        <hr></hr>

        <div className="footer-bottom">
            <div className="footer-socials">
                {/* <img src={insta} alt="Instagram" className="social-icon" />
                <img src={thread} alt="Threads" className="social-icon" />
                <img src={twitter} alt="X" className="social-icon" />
                <img src={youtube} alt="YouTube" className="social-icon" /> */}

                {data.socials.map(s => (
                    <a key={s.label} href={s.url} target="_blank">
                    <img src={/* tu peux laisser tes icônes statiques */ insta} className="social-icon" />
                    </a>
                ))}
            </div>

            <div className="footer-bottomright">
                <ul className="footer-links">
                    {/* <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookies Setting</a></li> */}

                     {data.legalLinks.map(l => (
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
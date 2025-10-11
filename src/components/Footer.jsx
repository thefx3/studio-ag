import "./Footer.css";
import logo from "../images/logo2.png";
import Footersection from "./Footer-section";
import insta from "../images/insta.png";
import thread from "../images/@.png";
import twitter from "../images/x.png";
import youtube from "../images/youtube.png";


function Footer () {
  return (
    <footer className="footer">
        <div className ="footer-top">
            <div className="footer-topleft">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className ="footer-text">
                    <p>STUDIO AG</p>
                    <p>Professional mixing and mastering studio dedicated to helping artists overcome
                    the frustration of unpolished, unbalanced, or lifeless mixes.
                    </p>
                </div>
            </div>

            <div className="footer-topright">
                <Footersection
                title="Mix and Mastering"
                links={[
                { href: "#home", text: "Présentation" },
                { href: "#services", text: "Services et Tarifs" },
                { href: "#about", text: "Qui suis-je ?" },
                ]}
            />
            <Footersection
                title="Studio Brique"
                links={[
                { href: "#software", text: "Software" },
                { href: "#hardware", text: "Hardware" },
                { href: "#booking", text: "Booking" },
                ]}
            />
            </div>
        </div>

        <hr></hr>

        <div className="footer-bottom">
            <div className="footer-socials">
                <img src={insta} alt="Instagram" className="social-icon" />
                <img src={thread} alt="Threads" className="social-icon" />
                <img src={twitter} alt="X" className="social-icon" />
                <img src={youtube} alt="YouTube" className="social-icon" />
            </div>

            <div className="footer-bottomright">
                <ul className="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookies Setting</a></li>
                </ul>
            </div>

        </div>
    </footer>
  );
}

export default Footer;
import "./Footer-section.css";

function Link ({href, text}) {
    return (
        <a className="links" href={href}> {text}</a>
    )
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

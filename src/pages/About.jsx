import "./About.css";
import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import { useEffect, useState } from "react";
import { Button_contact } from "../components/Button";
import aldric from "../images/aldric.png";
import aldric2 from "../images/aldric-2.png";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "aboutPage"][0]{
        title,
        subtitle,
        paragraphs,
        secondaryParagraph,
        ctaLabel,
        imageMain,
        imageSecondary
      }`)
      .then(setData);
  }, []);

  if (!data) return <p>Chargement...</p>;

  return (
    <div className="about-page">

      <div className="about-title">
        <p>{data.title}</p>
        <h2 className="aldric">{data.subtitle}</h2>
      </div>

      <div className="about-content">
        <div className="about-content1">
          <div className="container-content1">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <img
            src={data.imageMain ? urlFor(data.imageMain).url() : aldric}
            alt="Portrait"
          />
        </div>

        <hr />

        <div className="about-content2">
          <img
            src={data.imageSecondary ? urlFor(data.imageSecondary).url() : aldric2}
            alt="Portrait"
          />

          <div className="container-content2">
            <p>{data.secondaryParagraph}</p>
            <Button_contact text={data.ctaLabel} to="/contact" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;

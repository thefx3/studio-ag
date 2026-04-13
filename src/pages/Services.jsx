import "./Services.css";
import { Button_booking, Button_contact } from "../components/Button";
import Cards from "../components/Services-cards";
import image from "../images/services-image.png";
import vector from "../images/vector.png";
import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import { useEffect, useState } from "react";
import { GOOGLE_BOOKING_URL } from "../constants/booking";


function Services() {
    const [data, setData] = useState(null);

    useEffect(() => {
        client.fetch(`*[_type == "servicesPage"][0]{
          title,
          subtitle,
          description,
          image,
          serviceCards[]{title, description, icon},
          ctaLabel
        }`).then(setData);
      }, []);

      if (!data) return <p>Chargement...</p>;
      


    return (
        <div className="services-page">

            <div className="services-top">
        <div className="services-text">
          <p className="services-title">{data.title}</p>
          <h2 className="services-subtitle">
            {data.subtitle.split("<br/>").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="services-p">{data.description}</p>
        </div>

        <img
          src={image}
          alt="Image Studio AG"
          className="services-image"
        />
      </div>

            <div className="services-bottom">
                <div className="container-cards">
                {data.serviceCards.map((card) => (
                    <Cards
                    key={card.title}
                    logo={card.icon ? urlFor(card.icon).url() : vector}
                    title={card.title}
                    description={card.description}
                    />
                ))}
                </div>
            </div>

            <div className="services-cta-row">
              <Button_contact text={data.ctaLabel} to="/contact" />
              <Button_booking text="Reserver un appel" to={GOOGLE_BOOKING_URL} />
            </div>

        </div>
    )
}

export default Services;

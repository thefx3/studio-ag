import "./Services.css";
import { Button_contact } from "../components/Button";
import Space from "../components/Space";
import Cards from "../components/Services-cards";
import image from "../images/services-image.png";
import audio from "../images/audio.png";
import vector from "../images/vector.png";
import mix from "../images/mix.png"
import vol from "../images/vol.png"
import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import { useEffect, useState } from "react";


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


            {/* <div className="services-top">
                <div className="services-text">
                    <p className="services-title">Services et Tarifs</p>
                    <h2 className="services-subtitle">Votre musique, <br></br>perfectionnée.</h2>
                    <p className="services-p">Nous ne nous contentons pas d'améliorer votre musique -
                    nous créons un son professionnel et convaincant qui capte
                    l'attention des auditeurs et les maintient engagés.
                    Un mixage soigné qui sonne bien partout, des AirPods aux stades.</p>
                </div>
                    <img src={image} alt="Image Studio AG" />
            </div> */}

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
          src={urlFor(data.image).url()}
          alt="Image Studio AG"
          className="services-image"
        />
      </div>

            {/* <div className="services-bottom">
                <div className="container-cards">
                    <Cards 
                        logo={vector}
                        title="Editing"
                        description="Vous venez d'enregistrer votre projet et avez besoin d'un nettoyage des prises, remise en phase ou bien une balance des niveaux ?
                        Mon service d'editing est ce qu'il vous faut, je m'occupe de transformer votre projet brut en support idéal pour un mixage dans les meilleures conditions."
                    />
                    <Cards 
                        logo={mix}
                        title="Mixage"
                        description="Le mixage est une étape cruciale dans la production d'un projet musical avant le mastering. Il transforme un multipiste en morceau structuré et équilibré"
                    />
                    <Cards 
                        logo={vol}
                        title="Mastering"
                        description="Indispensable, le mastering est la dernière couche de vernis, la cerise sur la gâteau qui donnera une cohérence entre vos titres. Il permettra à votre projet d'être compétitif en s'alignant avec les standards de l'industrie musicale."
                    />         
                </div>
            </div> */}

            <div className="services-bottom">
                <div className="container-cards">
                {data.serviceCards.map((card) => (
                    <Cards
                    key={card.title}
                    logo={urlFor(card.icon).url()}
                    title={card.title}
                    description={card.description}
                    />
                ))}
                </div>
            </div>

            {/* <Button_contact text="Contacter" to="/contact" /> */}
            <Button_contact text={data.ctaLabel} to="/contact" />

        </div>
    )
}

export default Services;
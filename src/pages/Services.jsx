import "./Services.css";
import { Button_contact } from "../components/Button";
import Space from "../components/Space";
import Cards from "../components/Services-cards";
import image from "../images/services-image.png";
import audio from "../images/audio.png";
import vector from "../images/vector.png";

function Services() {
    return (
        <div className="services-page">

            <hr></hr>

            <div className="services-top">
                <div className="services-text">
                    <p className="services-title">Services et Tarifs</p>
                    <h2 className="services-subtitle">Votre musique, <br></br>perfectionnée.</h2>
                    <p className="services-p">Nous ne nous contentons pas d'améliorer votre musique -
                    nous créons un son professionnel et convaincant qui capte
                    l'attention des auditeurs et les maintient engagés.
                    Un mixage soigné qui sonne bien partout, des AirPods aux stades.</p>
                </div>
                    <img src={image} alt="Image Studio AG" />

            </div>

            <div className="services-bottom">
                <div className="container-cards">
                    <Cards 
                        logo={vector}
                        title="Editing"
                        description="Vous venez d'enregistrer votre projet et avez besoin d'un nettoyage des prises, remise en phase ou bien une balance des niveaux ?
                        Mon service d'editing est ce qu'il vous faut, je m'occupe de transformer votre projet brut en support idéal pour un mixage dans les meilleures conditions."
                        price="À partir de 10€"
                    />
                    <Cards 
                        logo={audio}
                        title="Mixage"
                        description="Le mixage est une étape cruciale dans la production d'un projet musical avant le mastering. Il transforme un multipiste en morceau structuré et équilibré"
                        price="À partir de 75€"
                    />
                    <Cards 
                        logo={audio}
                        title="Mastering"
                        description="Indispensable, le mastering est la dernière couche de vernis, la cerise sur la gâteau qui donnera une cohérence entre vos titres. Il permettra à votre projet d'être compétitif en s'alignant avec les standards de l'industrie musicale."
                        price="À partir de 25€"
                    />
                </div>
            </div>

            <Button_contact text="Contact" to="/contact" />
        </div>
    )
}

export default Services;
import "./Services.css";
import Button_contact from "../components/Button";
import image from "../images/services-image.png";

function Services() {
    return (
        <div className="services-page">

            <div className="services-top">
                <div className="services-text">
                    <h1>Services et Tarifs</h1>
                    <h2>Votre musique, <br></br>perfectionnée.</h2>
                    <p>Nous ne nous contentons pas d'améliorer votre musique -
                    nous créons un son professionnel et convaincant qui capte
                    l'attention des auditeurs et les maintient engagés.
                    Un mixage soigné qui sonne bien partout, des AirPods aux stades.</p>
                </div>
                <div className="services-image">
                    <img src={image} alt="Image Studio AG" />
                </div>
            </div>

            <div className="services-bottom">
                
            
            </div>




            <Button_contact text="Contact" to="/contact" />
        </div>
    )
}

export default Services;
import "./About.css";
import Space from "../components/Space";
import { Button_contact } from "../components/Button";
import aldric from "../images/aldric.png";
import aldric2 from "../images/aldric-2.png";


function About () {
    return (
        <div className="about-page">
            <Space height={"3vh"} />

            <hr></hr>

            <div className="about-title">
                <p>Qui suis-je ?</p>
                <h2 className="aldric">Aldric Granger</h2>
            </div>

            <div className="about-content">
                <div className="about-content1">
                    <div className="container-content1">
                        <p> Je suis Aldric, ingénieur du son diplômé de l’école EMC Malakoff et passionné par
                            l'art de la musique sous toutes ses formes depuis toujours.
                        </p>
                        <p>
                            Basé à Saint-Germain-en-Laye, je propose des services professionnels d’enregistrement,
                            de mixage et de mastering pour les artistes solo ou groupes en tous genre.
                        </p>
                        <p>
                            J’accompagne les artistes en concert comme en studio, en mettant un point d’honneur
                            à sublimer leur identité musicale. Je propose également du beatmaking avec une
                            approche à la fois technique et artistique, pour des productions sur mesure.
                        </p>
                    </div>
                    <img src={aldric} alt="Portrait Aldric Granger" />
                </div>
                <hr></hr>
                <div className="about-content2">
        
                    <img src={aldric2} alt="Portrait Aldric Granger" />

                    <div className="container-content2">
                        
                        <p>Que vous ayez besoin d’un son prêt à diffuser, d’un mix professionnel,
                        ou d’un environnement de travail créatif pour enregistrer vos idées,
                        je vous offre un accompagnement personnalisé à chaque étape de votre projet.</p>
                        <Button_contact text="Demander un avis" to="/contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
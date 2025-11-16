// import "./About.css";
// import Space from "../components/Space";
// import { client } from "../sanityClient";
// import { urlFor } from "../sanityImage";
// import { useEffect, useState } from "react";
// import { Button_contact } from "../components/Button";
// import aldric from "../images/aldric.png";
// import aldric2 from "../images/aldric-2.png";

// function About () {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//       client
//         .fetch(`*[_type == "aboutPage"][0]{
//           title,
//           subtitle,
//           paragraphs,
//           secondaryParagraph,
//           ctaLabel,
//           imageMain,
//           imageSecondary
//         }`)
//         .then(setData);
//     }, []);
  
//     if (!data) return <p>Chargement...</p>;

//     return (
//         <>
//         <div className="about-page">
//             <div className="about-title">
//                 {/* <p>Qui suis-je ?</p>
//                 <h2 className="aldric">Aldric Granger</h2> */}

//                 <p>{data.title}</p>
//                 <h2 className="aldric">{data.subtitle}</h2>
//             </div>

//             <div className="about-content">
//                 <div className="about-content1">
//                     <div className="container-content1">
//                         <p> Je suis Aldric, ingénieur du son diplômé de l’école EMC Malakoff et passionné par
//                             l'art de la musique sous toutes ses formes depuis toujours.
//                         </p>
//                         <p>
//                             Basé à Saint-Germain-en-Laye, je propose des services professionnels d’enregistrement,
//                             de mixage et de mastering pour les artistes solo ou groupes en tous genre.
//                         </p>
//                         <p>
//                             J’accompagne les artistes en concert comme en studio, en mettant un point d’honneur
//                             à sublimer leur identité musicale. Je propose également du beatmaking avec une
//                             approche à la fois technique et artistique, pour des productions sur mesure.
//                         </p>
//                     </div>
//                     <img src={aldric} alt="Portrait Aldric Granger" />
//                 </div>
//                 <hr></hr>
//                 <div className="about-content2">
        
//                     <img src={aldric2} alt="Portrait Aldric Granger" />

//                     <div className="container-content2">
                        
//                         <p>Que vous ayez besoin d’un son prêt à diffuser, d’un mix professionnel,
//                         ou d’un environnement de travail créatif pour enregistrer vos idées,
//                         je vous offre un accompagnement personnalisé à chaque étape de votre projet.</p>
//                         <Button_contact text="Demander un avis" to="/contact" />
//                     </div>
//                 </div>
//             </div>

//         </div>

//         </>
//     )
// }

// export default About;


import "./About.css";
import { client } from "../sanityClient";
import { urlFor } from "../sanityImage";
import { useEffect, useState } from "react";
import { Button_contact } from "../components/Button";

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
          <img src={urlFor(data.imageMain).url()} alt="Portrait" />
        </div>

        <hr />

        <div className="about-content2">
          <img src={urlFor(data.imageSecondary).url()} alt="Portrait" />

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

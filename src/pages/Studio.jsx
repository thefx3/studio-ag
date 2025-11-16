import "./Studio.css";
import Space from "../components/Space";
import { client } from "../sanityClient";
import { useEffect, useState } from "react";

function Studio () {
    const [data, setData] = useState(null);

    useEffect(() => {
      client
        .fetch(`*[_type == "studioPage"][0]{
          title,
          description
        }`)
        .then(setData);
    }, []);
  
    if (!data) return <p>Chargement...</p>;

    return (
        <div className="studio-page">
            <div className="studio-text">
                <h2 className="studio-title">{data.title}</h2>
                <p className="studio-p">{data.description}</p>
            </div>

        </div>
    )
}

export default Studio;
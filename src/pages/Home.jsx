// /src/Home.jsx
import "./Home.css";
import { Button_contact } from "../components/Button";
import Space from "../components/Space";
import { useState, useEffect } from "react";
import { client } from "../sanityClient";

const query = `*[_type == "homePage"][0]{
  titleLine1,
  titleLine2,
  description,
  ctaLabel
}`;

function Home () {
  //Sanity data fetching
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(query)
      .then((res) => {
        console.log("SANITY HOME RESPONSE: ", res);
        setData(res);
      })
      .catch((err) => console.error("SANITY ERROR: ", err));
  }, []);

  if (!data) return <p>Chargement...</p>;
  
  // 

  return (

    <div className="home-page">
    <Space height="30vh" />
    
    {!data ? (
      <p>Chargement...</p>
    ) : (
      <>
        <h1>
          {data.titleLine1} <br /> {data.titleLine2}
        </h1>

        <p>{data.description}</p>

        <Button_contact text={data.ctaLabel} to="/contact" />

        <hr />
      </>
    )}
  </div>
    


  )
}
export default Home
// /src/Home.jsx
import "./Home.css";
import { Button_booking, Button_contact } from "../components/Button";
import Space from "../components/Space";
import { useState, useEffect } from "react";
import { client } from "../sanityClient";
import { GOOGLE_BOOKING_URL } from "../constants/booking";

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

        <div className="home-cta-row">
          <Button_contact text={data.ctaLabel} to="/contact" />
          <Button_booking text="Reserver un appel" to={GOOGLE_BOOKING_URL} />
        </div>

        <hr />
      </>
    )}
  </div>
    


  )
}
export default Home

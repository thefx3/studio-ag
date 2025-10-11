// /src/Home.jsx
import "./Home.css";
import { Button_contact } from "../components/Button";
import Space from "../components/Space";

function Home () {
  return (
    <div className="home-page">
      <Space height="20vh" />
      <h1>Crafted <br></br>for impact</h1>
      <p>Professional mixing and mastering studio dedicated to helping artists overcome the frustration of unpolished, unbalanced, or lifeless mixes.</p>
      <Button_contact text="Contact" to="/contact" />
    </div>
  )
}
export default Home
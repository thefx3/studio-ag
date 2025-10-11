import "./Studio.css";
import Space from "../components/Space";

function Studio () {
    return (
        <div className="studio-page">

            <div className="studio-text">
                <h2 className="studio-title">Studio AG</h2>
                <p className="studio-p">Un espace professionnel et convivial pour donner vie à vos projets musicaux.</p>
            </div>

            <Space height={"3vh"} />
        </div>
    )
}

export default Studio;
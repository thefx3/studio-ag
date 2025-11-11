// Services-cards.css
import "./Services-cards.css";

function Cards ({logo, title, description, price}) {
    return (
        <div className="card">
            <img src={logo} alt="Logo Service" className="card-logo" />
            <p className="card-title">{title}</p>
            <p className="card-description">{description}</p>
        </div>
    )
}

export default Cards;
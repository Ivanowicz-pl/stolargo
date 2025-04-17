import React from "react";
import { Link } from "react-router-dom"; // Jeśli korzystasz z React Router

const OptionCard = ({ title, description, img, button }) => (
    <div className="option-card">
        <img src={img} alt={title} className="option-card-img" />
        <h3 className="option-card-title">{title}</h3>
        <p className="option-card-description">{description}</p>
        {button && (
            <Link to={button.link} className="option-card-button">
                {button.text}
            </Link>
        )}
    </div>
);

export default OptionCard;
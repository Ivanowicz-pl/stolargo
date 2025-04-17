import React from "react";
import { Link } from "react-router-dom"; // Import Link z React Router

function FeatureCard({ feature: { title, description, img, button } }) {
    return (
        <div className="aximo-iconbox-wrap2">
            <div className="aximo-iconbox-icon2">
                <img src={img} alt="pricing-icon3" />
            </div>
            <div className="aximo-iconbox-data2">
                <h3>
                    {button ? (
                        <Link to={button.link} className="feature-card-title-link">
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h3>
                <p>{description}</p>
                {button && (
                    <Link to={button.link} className="feature-card-button">
                        {button.text}
                    </Link>
                )}
            </div>
        </div>
    );
}

export default FeatureCard;

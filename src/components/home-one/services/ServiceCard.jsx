import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
import FadeInLeft from "../../animation/FadeInLeft";

function ServiceCard({ service: { title, description, icon, link } }) {
  return (
    <div className="aximo-iconbox-wrap">
      <div className="aximo-iconbox-icon">
        <i className={`${icon}`}></i>
      </div>
      <div className="aximo-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="aximo-icon fade-in-on-hover">
          <img src={ArrowRightImg} alt="arrow right" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
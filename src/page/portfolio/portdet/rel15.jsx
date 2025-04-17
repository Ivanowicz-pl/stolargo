
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"; // Nowy hook do nawigacji
import rel1 from "../../../assets/images/portfolio/rel16/rel1.jpg";
import rel2 from "../../../assets/images/portfolio/rel16/rel2.jpg";
import rel3 from "../../../assets/images/portfolio/rel16/rel3.jpg";
import rel4 from "../../../assets/images/portfolio/rel16/rel4.jpg";
import rel5 from "../../../assets/images/portfolio/rel16/rel5.jpg";
import rel6 from "../../../assets/images/portfolio/rel16/rel6.jpg";
import rel7 from "../../../assets/images/portfolio/rel16/rel7.jpg";
import rel8 from "../../../assets/images/portfolio/rel16/rel8.jpg";
import rel9 from "../../../assets/images/portfolio/rel16/rel9.jpg";


import './rel1.css'; // Jeśli masz osobny plik CSS


function Rel1Gallery() {
  const navigate = useNavigate(); // Hook do nawigacji

  const handleGoBack = () => {
    navigate(-1); // Funkcja wracania do poprzedniej strony
  };

  return (
    <div>
      <Helmet>
        <meta name="description" content="Zobacz naszą galerię zdjęć" />
      </Helmet>
      <div className="rel1-gallery">
        <div className="rel1-gallery-item">
          <img src={rel1} alt="Galeria 1" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel2} alt="Galeria 2" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel3} alt="Galeria 3" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel4} alt="Galeria 4" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel5} alt="Galeria 5" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel6} alt="Galeria 6" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel7} alt="Galeria 7" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel8} alt="Galeria 8" />
        </div>
        <div className="rel1-gallery-item">
          <img src={rel9} alt="Galeria 8" />
        </div>
       
      </div>
      <button className="back-btn" onClick={handleGoBack}>
        &#8592; {/* Strzałka w lewo */}
      </button>
    </div>
  );
}

export default Rel1Gallery;

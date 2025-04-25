import React from "react";
import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";
import FadeInLeft from "../animation/FadeInLeft";
import kobax from "../../assets/images/v1/7.png";
import pfl from "../../assets/images/v1/pfl.png";

function ServiceDetails() {
  return (
    <section className="section aximo-section-padding2 pb-0">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="d-flex align-items-center gap-2">
              <FadeInUp>Płyty meblowe</FadeInUp>
              <img src={Star2Img} alt="Star" style={{ height: "1.5em" }} />
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                color: "#444",
                maxWidth: "900px",
              }}
            >
              Wiemy, że kuchnie tworzy się na lata, dlatego używamy wyłącznie
              płyt <strong>Pfleiderer</strong> – materiałów klasy premium, które
              przewyższają jakością powszechnie stosowane płyty innych
              producentów, takich jak Kronospan czy Kronopol. Dzięki
              zaawansowanemu procesowi produkcji, płyty te wyróżniają się
              wyjątkową trwałością oraz eleganckim wykończeniem, co pozwala nam
              oferować rozwiązania na najwyższym poziomie.
            </p>
          </div>
        </div>

        <div className="row align-items-center gx-5 gy-4">
          <div className="col-lg-6">
            <div className="bg-light rounded p-4 h-100 shadow-sm">
              <h4 className="fw-bold mb-3">Dlaczego Pfleiderer?</h4>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "1.5rem",
                  fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
                }}
              >
               <li>Najwyższa jakość</li>
<li>Odporność na drobne zarysowania</li>
<li>Eleganckie wykończenie</li>
<li>Płyty po latach wyglądają jak nowe</li>
<li>Szeroka gama kolorów i wzorów</li>
<li>Powierzchnie łatwe w czyszczeniu</li>
<li>Trwałość nawet przy intensywnym użytkowaniu</li>
<li>Bezpieczne i certyfikowane materiały</li>
<li>Odporność na wilgoć i wysokie temperatury</li>
<li>Stabilność wymiarowa – nie odkształcają się</li>
<li>Idealne do nowoczesnych i klasycznych projektów</li>
<li>Przyjazne dla środowiska (certyfikaty EPD, FSC)</li>
<li>Nowoczesna technologia produkcji</li>
              </ul>
              <div className="mt-4">
                <img src={pfl} alt="Pfleiderer" style={{ height: "40px" }} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <FadeInLeft>
              <img
                src={kobax}
                alt="Kuchnia z płyt"
                style={{ maxHeight: "800px", objectFit: "cover" }}
              />
            </FadeInLeft>
          </div>
        </div>

        <div className="aximo-faq-wrap mt-5">
          <WorkingApproach />
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;

import React from "react";
import { Link } from "react-router-dom";
import AboutImg from "../../../assets/images/v1/about-img.png"; // Poprawiony path

function AboutUs() {
  return (
    <section className="about-section pt-120 pb-120" id="o-nas">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img
                src={AboutImg}
                alt="O nas"
                className="img-fluid w-100 h-auto rounded shadow"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content pl-lg-5 mt-5 mt-lg-0">
              <div className="section-title mb-4">
                <h2 className="text-dark" style={{ fontSize: "clamp(1.8rem, 2.5vw, 3rem)" }}>O nas</h2>
              </div>
              <p className="mb-4 text-secondary" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                Nasza firma specjalizuje się w projektowaniu i produkcji mebli
                na wymiar, które łączą funkcjonalność z estetyką. Dzięki
                wieloletniemu doświadczeniu oraz pasji do tworzenia unikatowych
                rozwiązań, jesteśmy w stanie sprostać nawet najbardziej
                wymagającym oczekiwaniom naszych klientów.
              </p>
              <p className="mb-4 text-secondary" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                Zaufaj nam, jeśli szukasz mebli kuchennych, łazienkowych czy
                biurowych, które będą nie tylko praktyczne, ale również będą
                wyrażać Twój styl.
              </p>
              <Link
                to="/kontakt"
                className="btn btn-primary mt-3"
                aria-label="Przejdź do sekcji kontakt"
              >
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

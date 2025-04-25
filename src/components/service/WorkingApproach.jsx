import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import akryl6 from "../../assets/images/v1/6.png";
import rehau from "../../assets/images/v1/rehau.png";
import FadeInLeft from "../animation/FadeInLeft";

const workingApprochData = [
  {
    id: crypto.randomUUID(),
    title: "Najnowsza technologia Oklejania Laserem!",
    description:
      "Precyzyjne oklejenie brzegów technologą laserową zapewnia estetyczne wykończenie bez widocznych łączeń.",
  },
  {
    id: crypto.randomUUID(),
    title: "Trwałość i odporność",
    description:
      "Kolory zachowują intensywność i odporność na promieniowanie UV przez długi czas.",
  },
  {
    id: crypto.randomUUID(),
    title: "Różnorodność kolorów",
    description:
      "Szeroka gama odcieni, od ponadczasowej bieli po modne kolory, dopasowane do różnych stylów wnętrz.",
  },
  {
    id: crypto.randomUUID(),
    title: "Odporność na zarysowania",
    description:
      "Wersja z powłoką hardcoat zapewnia zwiększoną odporność na zarysowania i chemikalia, idealna do domów z małymi dziećmi.",
  },
];

function WorkingApproach() {
  return (
    <div className="row">
      <div className="col-lg-5 offset-lg-1 order-lg-1 mb-4 mb-lg-0">
        <FadeInRight className="aximo-service-details-thumb2">
          <div
            style={{
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src={akryl6}
              alt="Fronty akrylowe"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "16px",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
          </div>
        </FadeInRight>
      </div>
      <div className="col-lg-6">
        <div className="aximo-default-content">
          <h2>
            <span className="aximo-title-animation">
              Fronty Akrylowe
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star" />
              </span>
            </span>
          </h2>
          <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.2rem)", color: "#333" }}>
            „Fronty akrylowe to synonim nowoczesności i trwałości. Dzięki wyjątkowemu połyskowi lub matowej powierzchni, w połączeniu z szeroką paletą kolorów, stają się eleganckim i funkcjonalnym rozwiązaniem dla każdego wnętrza. Akrylowe fronty RAUVISIO brilliant zachowują swoje estetyczne walory przez długi czas – kolory są odporne na promieniowanie UV, co sprawia, że fronty wyglądają jak nowe, nawet po wielu latach użytkowania. Oferujemy bogatą gamę odcieni, od ponadczasowych bieli i szarości po modne kolory, takie jak ciepła magnolia, które pozwolą na nieograniczone możliwości aranżacji. Dodatkowo, wersja z powłoką hardcoat zapewnia zwiększoną odporność na zarysowania oraz działanie środków chemicznych, co czyni je idealnym rozwiązaniem w domach z małymi dziećmi.”
          </p>
          <FadeInLeft>
            <img
              src={rehau}
              alt="Rehau"
              style={{ width: "50%", height: "auto", marginTop: "1rem" }}
            />
          </FadeInLeft>
        </div>
        <div className="aximo-our-approach">
          {workingApprochData.map((item) => (
            <div className="aximo-iconbox-wrap5" key={item.id}>
              <div className="aximo-iconbox-icon5">
                <i className={`${item.icon}`}></i>
              </div>
              <div className="aximo-iconbox-data5">
                <h3>{item.title}:</h3>
                <div className="aximo-user-interface">
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkingApproach;


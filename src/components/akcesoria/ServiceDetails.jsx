import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";
import FadeInLeft from "../animation/FadeInLeft"
import kobax from "../../assets/images/v1/hafpik1.png";
import haflogo from "../../assets/images/v1/haflogo.png";

function ServiceDetails() {
	return (
		<div className="section aximo-section-padding2 pb-0">
			<div className="container">
				<div className="aximo-service-details-wrap">
					
						
				
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								
								<h2>
									<span className="aximo-service-increase-title"><FadeInUp>
                  Akcesoria Hafele    <img src={Star2Img} alt="star" />  </FadeInUp>
										<span className="aximo-service-increase-title">
                    
										
                      
										</span>
									</span>
									
								</h2>
								<p>
								
								</p>
							</div>
						</div>
						
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="aximo-user-interface">
							<FadeInLeft className="aximo-service-details-thumb2 ">
					<img src={kobax} alt="service" />
				</FadeInLeft>
								
								
							</div>
						</div>
						<div className="col-lg-6">
							<div className="aximo-service-increase-title">
								<h3>Dlaczego Hafele:</h3>
								<ul>
									<br></br>
									W naszych projektach stawiamy wyłącznie na najlepsze rozwiązania, dlatego korzystamy z akcesoriów Hafele 
                  – światowego lidera w branży meblarskiej. Szuflady, zawiasy, podnośniki i inne komponenty tej marki wyróżniają się nie tylko precyzyjnym wykonaniem,
                  ale także trwałością i niezawodnością, które gwarantują bezproblemowe użytkowanie przez wiele lat.
									<br></br>
									<li>
                  Hafele to połączenie innowacyjnych technologii z najwyższą estetyką, co czyni je idealnym wyborem dla wymagających użytkowników. Produkty tej marki oferują płynność ruchu, 
                  ciche domykanie i niezrównany komfort użytkowania. Dzięki zastosowaniu zaawansowanych materiałów i najnowszych technologii, akcesoria Hafele są odporne na zużycie,
                  a ich funkcjonalność spełnia oczekiwania najbardziej wymagających klientów.
									</li><br></br>
									<li>
									</li>     <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          <strong>Niezrównana jakość</strong> – Precyzyjne wykonanie i trwałość gwarantują bezproblemowe użytkowanie przez wiele lat.
        </li>
        <li>
          <strong>Innowacyjne technologie</strong> – Ciche domykanie, płynny ruch i zaawansowane mechanizmy to standard w akcesoriach Hafele.
        </li>
        <li>
          <strong>5-letnia gwarancja</strong> – Długoletnia ochrona potwierdza niezawodność i wysoką jakość produktów.
        </li>
        <li>
          <strong>Lepsze niż standard</strong> – Wyjątkowa jakość przewyższa nawet uznane marki, takie jak Blum.
        </li>
        <li>
          <strong>Estetyka i styl</strong> – Akcesoria Hafele doskonale komponują się z nowoczesnymi aranżacjami, podkreślając ich wyjątkowy charakter.
        </li>
      </ul>
									<li> 
									</li><li></li><br></br><br></br><img src={haflogo} alt="Pfleiderer" style={{ width: '50%', height: 'auto' }} />
								</ul>
                
							</div>
						</div>
					</div>
					<div className="aximo-faq-wrap">
						<WorkingApproach />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServiceDetails;

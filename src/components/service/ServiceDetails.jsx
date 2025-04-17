import Star2Img from "../../assets/images/v1/star2.png";
import FadeInUp from "../animation/FadeInUp";
import WorkingApproach from "./WorkingApproach";
import FadeInLeft from "../animation/FadeInLeft"
import kobax from "../../assets/images/v1/7.png";
import pfl from "../../assets/images/v1/pfl.png";

function ServiceDetails() {
	return (
		<div className="section aximo-section-padding2 pb-0">
			<div className="container">
				<div className="aximo-service-details-wrap">
					
						
				
					<div className="row">
						<div className="col-lg-8">
							<div className="aximo-default-content">
								
								<h2>
									<span className="aximo-title-animation"><FadeInUp>
										Płyty meblowe
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span></FadeInUp>
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
							<div className="aximo-user-interface">
								<h3>Pfleiderer gwarancją jakości (UX):</h3>
								<ul>
									<br></br>
									Wiemy, że kuchnie tworzy się na lata, dlatego używamy wyłącznie płyt Pfleiderer – materiałów klasy premium, które przewyższają jakością powszechnie stosowane płyty innych producentów, takich jak Kronospan czy Kronopol. Dzięki zaawansowanemu procesowi produkcji, płyty te wyróżniają się wyjątkową trwałością oraz eleganckim wykończeniem, co pozwala nam oferować rozwiązania na najwyższym poziomie
									<br></br><br></br>
									<li>
										Najwyższa jakość
									</li>
									<li>
										Odporne na drobne zarysowania
									</li>
									<li> Elegnackie wykończenie
									</li><li>Płyty po latach wyglądają jak nowe</li><br></br><br></br><img src={pfl} alt="Pfleiderer" style={{ width: '50%', height: 'auto' }} />
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

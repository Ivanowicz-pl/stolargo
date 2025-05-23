import { Link } from "react-router-dom";
import ArrowRightImg from "../../assets/images/icon/arrow-right.svg";
import QuestionImg from "../../assets/images/icon/question.svg";
import StarImg from "../../assets/images/v1/star2.png";
import CallButton from "../CallButton";
function PricingFaq() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-pricing-border">
					<div className="row">
						<div className="col-lg-6">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
										Odpowiedź na
										<span className="aximo-title-icon">
											<img src={StarImg} alt="star" />
										</span>
									</span>
									częste pytania
								</h2>
								<p>
								Masz pytania? Sprawdź odpowiedzi na najczęściej zadawane! Nie znalazłeś informacji? Skontaktuj się z nami – chętnie pomożemy!
								</p>
							</div>
							<Link className="aximo-errors-btn contact-us" to="/kontakt">
								Napisz do nas!{" "}
								<span>
									<img src={ArrowRightImg} alt="arrow right" />
								</span>
							</Link><CallButton></CallButton>
						</div>
						<div className="col-lg-6">
							<div className="aximo-accordion-normal-wrap m_top_responsive">
								<div className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="question icon" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>Czy mogę samodzielnie złożyć kuchnię z Waszych korpusów?</h3>
										<p>
										Oczywiście! Nasze korpusy są już zmontowane i uzbrojone w akcesoria, dzięki czemu wystarczy je ustawić według projektu i skręcić. Do montażu potrzebujesz tylko śrubokręta, wkrętarki i poziomicy.
										</p>
									</div>
								</div>
								<div className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="question icon" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>Czy dokładny pomiar jest konieczny, jeśli samodzielnie dostarczyłem wymiary?</h3>
										<p>
										Tak, wykonujemy precyzyjny pomiar przed realizacją, aby mieć pewność, że wszystko będzie idealnie pasować. Twój wstępny pomiar służy jedynie do przygotowania wstępnej wyceny.
										</p>
									</div>
								</div>
								<div className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="question icon" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>Ile mogę zaoszczędzić, wybierając opcję "Zrób to sam"?</h3>
										<p>
										Dzięki naszej ofercie możesz zaoszczędzić nawet do 50% wartości kuchni w porównaniu do tradycyjnych rozwiązań oferowanych przez fachowców. To świetny sposób na piękną kuchnię w rozsądnej cenie!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PricingFaq;

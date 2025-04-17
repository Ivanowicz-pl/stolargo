import CheckImg from "../../../assets/images/v3/check.svg";
import Shape1Img from "../../../assets/images/v3/shape1.png";
import Thumb2Img from "../../../assets/images/v3/thumb2.png";
import FadeInRight from "../../animation/FadeInRight";
function AboutTwo() {
	return (
		<div className="section aximo-section-padding6 overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-1 offset-lg-1">
						<FadeInRight className="aximo-content-thumb ">
							<img src={Thumb2Img} alt="Thumb2Img" />
							<div className="aximo-thumb-shape2">
								<img src={Shape1Img} alt="Shape1Img" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="aximo-default-content familjen-grotesk">
							<h2>Wieloletnie doświadczenie</h2>
							<p>
								i znajomość rynku, pozwalają nam tworzyć meble, które spełniają najwyższe standardy jakości, funkcjonalności i designu, idealnie dopasowane do potrzeb Twojego biznesu.
							</p>
							<div className="aximo-list-icon">
								<ul>
									<li>
										<img src={CheckImg} alt="CheckImg" />
										<span>Trwałość na lata</span> – <span className="normal-text">Wybieramy materiały, które wytrzymają intensywne użytkowanie.</span>
									</li>
									<li>
										<img src={CheckImg} alt="CheckImg" />
										<span>Dopasowane do Ciebie</span> – <span className="normal-text">Projektujemy meble, które odpowiadają potrzebom Twojego biznesu.</span>
									</li>
									<li>
										<img src={CheckImg} alt="CheckImg" />
										<span>Na czas, bez stresu </span> – <span className="normal-text">– Dostarczamy bez opóźnień, bo czas to pieniądz!</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


export default AboutTwo;

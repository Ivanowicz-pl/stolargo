import { Link } from "react-router-dom";
import TitleShapImg from "../../../assets/images/v7/title-shape.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<FadeInStaggerTwo className="aximo-hero-content7">
			<FadeInStaggerTwoChildren>
				<h1>
				Uszyte na Twoją miarę
					<span className="aximo-hero-shape-title2">
						<img className="aximo-hero-wave-shape" src={TitleShapImg} alt="Shape Title" />
					</span>
				</h1>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<p>
				Niezależnie od tego, czy szukasz funkcjonalnej kuchni, pojemnej szafy, czy niestandardowego rozwiązania — z nami stworzysz meble dopasowane do Twojego życia.
				</p>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<div className="aximo-hero-btn-wrap m-0">
					<Link className="aximo-default-btn blue-btn2" to="/kontakt">
						<span className="aximo-label-up">Napisz</span>
						<span className="aximo-label-up">lub zadzwoń</span>
					</Link>
					<Link className="aximo-default-btn aximo-default-btn-outline outline-dark" to="/realizacje">
						<span className="aximo-label-up">Nasze projekty</span>
						<span className="aximo-label-up">Nasze realizację</span>
					</Link>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroContent;

import { Link } from "react-router-dom";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content2">
			<h1>Tworzymy meble, które wspierają rozwój Twojego biznesu</h1>
			<p>
			Nasze meble to połączenie funkcjonalności i estetyki, stworzone z myślą o potrzebach Twojej firmy. 
			Dzięki naszemu profesjonalizmowi, znajomości realiów biznesowych i bezwzględnej terminowości,
			 dostarczamy rozwiązania, na których możesz polegać.
			</p>
			<FadeInStaggerTwo className="aximo-hero-btn-wrap center">
				<FadeInStaggerTwoChildren>
				<a className="aximo-default-btn" href="tel:+48734705705">
	<span className="aximo-label-up">Zadzwoń teraz</span>
	<span className="aximo-label-up">Zadzwoń teraz</span>
</a>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<Link className="aximo-default-btn aximo-default-btn-outline" to="/realizacje">
						<span className="aximo-label-up">Nasze projekty</span>
						<span className="aximo-label-up">Nasze projekty</span>
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;

import Shape3Img from "../../../assets/images/v3/shape3.png";
import Thumb3Img from "../../../assets/images/v3/thumb3.png";
import FadeInUp from "../../animation/FadeInUp";
import StepsAccordion from "./StepsAccordion";
function SeoSteps() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="aximo-content-thumb-wrap">
							<FadeInUp className="aximo-content-thumb2">
								<img src={Thumb3Img} alt="Thumb3Img" />
							</FadeInUp>
							<div className="aximo-thumb-shape1">
								<img src={Shape3Img} alt="Shape3Img" />
							</div>
						</div>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content familjen-grotesk">
							<h2>Mamy wszystko, czego potrzebujesz.</h2>
							<p>
							Meble, które zmienią Twoje biuro w miejsce, w którym chce się pracować.
							</p>

							<StepsAccordion />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SeoSteps;

import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb1Img from "../../../assets/images/v3/thumb1.png";
import FadeInLeft from "../../animation/FadeInLeft";

function About() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb1Img} alt="Thumb1Img" />
							<div className="aximo-thumb-shape1">
								<img src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content familjen-grotesk">
							<h2>Wiemy, jak ważny jest czas dla Twojego biznesu.</h2>
							<p>
							Z tego powodu zapewniamy terminową realizację każdego projektu. Dotrzymujemy ustalonych terminów, byś mógł skupić się na tym,
							
							 co najważniejsze.
							</p>
						</div>
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

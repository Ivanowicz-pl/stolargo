import { Link } from "react-router-dom";
import FadeInUp from "./components/animation/FadeInUp";
import ErrorImg from "/src/assets/images/about/404.png";
import ArrowRightImg from "/src/assets/images/icon/arrow-right.svg";
import Star2Img from "/src/assets/images/v1/star2.png";
export default function ErrorPage() {
	return (
		<div className="section">
			<div className="container">
				<div className="aximo-errors-wrap">
					<div className="aximo-errors-thumb">
						<img src={ErrorImg} alt="Error" />
					</div>
					<div className="aximo-errors-title">
						<h2>
							Coś poszło nie tak
							<span className="aximo-title-animation">
								
								<span className="aximo-title-icon">
									<img src={Star2Img} alt="" />
								</span>
							</span>
						</h2>
					</div>
					<FadeInUp>
						<Link className="aximo-errors-btn" to="/">
							Wróć na stronę główną
							<span>
								<img src={ArrowRightImg} alt="arrow" />
							</span>
						</Link>
					</FadeInUp>
				</div>
			</div>
		</div>
	);
}

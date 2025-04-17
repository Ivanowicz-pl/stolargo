import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Zacznijmy
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				wspólny projekt
			</h2>
			<p>
			Jesteśmy nie tylko producentami, ale także pasjonatami, którzy wiedzą, jak sprawić, by Twoje marzenia stały się rzeczywistością.
			Jeśli szukasz czegoś więcej niż tylko mebli, szukasz partnera, który rozumie Twoje potrzeby, dobrze trafiłeś!
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Zadzwoń:</li>
						<li>
							<a href="tel:(+48) 734-705-705">(+48) 734-705-705</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Wyślij wiadomość email</li>
						<li>
							<a href="mailto:biuro@stolargo.pl">biuro@stolargo.pl</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://twitter.com/" target="_blank">
							<i className="icon-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://facebook.com/" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;

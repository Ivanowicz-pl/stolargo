import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Polecam z całego serca!",
		description:
			"Bardzo miła i fachowa obsługa. Oferują pomoc nawet w trudnych przypadkach które dla innych firm okazywały się nieopłacalne lub też niemożliwe do realizacji. Zdecydowanie polecam",
		author: "Filip",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Wszystko jak należy.",
		description:
			"Świetnie nawiązuje się z nimi współpracę, szybki czas realizacji nie wspominając o profesjonalnych materiałach w niewygórowanych cenach ! Bardzo wam dziękuje za piękne szafy, nic tylko polecać..",
		author: "Daria Smaga",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Profeska",
		description:
			"Profesjonalne podejście do klienta. Materialy najwyzszej jakości. Chlopaki wiedzą co robią. Kibicuje mocno !!",
		author: "Kacper Stanek",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Super!",
		description:
			"Fachowa obsługa, material świetnej jakości, meble na czas a nawet przed. Zadowolenie klienta to podstawa co sie ceni. 100 % polecam.",
		author: "Filip Myrlak",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Sprawdź opinie
						<span className="aximo-title-animation">
							naszych klientów
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;

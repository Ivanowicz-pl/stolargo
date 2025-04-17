import  Illustrator1Img from "../../../assets/images/v2/pricing-icon3.png";
import  Illustrator2Img from "../../../assets/images/v2/pricing-icon1.png";
import  Illustrator3Img from "../../../assets/images/v2/illustrator3.png";
import Shape2Img from "../../../assets/images/v2/shape2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		title: "100% dopasowania",
		description:
			"Zaprojektujemy i wykonamy meble na wymiar, które maksymalnie wykorzystają przestrzeń i spełnią wszystkie Twoje oczekiwania – zarówno pod względem estetyki, jak i funkcjonalności.",
		img: Illustrator1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "od A do Z",
		description:
			"Od pomiaru, przez projekt, aż po montaż – zajmujemy się wszystkim. Dzięki temu masz pewność, że każdy etap realizacji przebiegnie sprawnie, a Ty zaoszczędzisz czas i nerwy.",
		img: Illustrator2Img,
	},
	{
        id: crypto.randomUUID(),
        title: "Opcja Zrób to sam",
        description:
            "Gotowe, uzbrojone korpusy meblowe, które wystarczy ułożyć i skręcić. Prosty proces, który pozwala zaoszczędzić nawet do 50% wartości kuchni, bez potrzeby korzystania z kosztownych usług fachowców.",
        img: Illustrator3Img,
        button: {
            text: "Dowiedz się więcej",
            link: "/zrobtosam", 
        },
    },


];
function Features() {
	return (
		<div className="section bg-light1 aximo-section-padding3 position-relative">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="aximo-section-title clash-grotesk">
							<h2>Dlaczego warto wybrać nasze meble na wymiar?</h2>
						</div>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
			<div className="aximo-shape">
				<img src={Shape2Img} alt="Shape2Img" />
			</div>
		</div>
	);
}

export default Features;

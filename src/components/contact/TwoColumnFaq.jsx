import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "Jakie rodzaje mebli mogę zamówić?",
			text: "Oferujemy szeroki wybór mebli na wymiar, w tym szafy, biurka, stoły, krzesła, kuchnie oraz meble łazienkowe. Niezależnie od tego, czy potrzebujesz mebli do domu, biura, czy lokalu komercyjnego, z pewnością znajdziemy rozwiązanie idealne dla Ciebie!",
		},
		{
			id: crypto.randomUUID(),
			title: "Jak długo trwa proces realizacji zamówienia?",
			text: "Czas realizacji zależy od skomplikowania projektu oraz aktualnych zamówień. Zazwyczaj trwa to od 4 do 6 tygodni. Zapewniamy jednak, że zawsze informujemy naszych klientów o postępach!",
		},
		{
			id: crypto.randomUUID(),
			title: "Czy oferujecie pomoc w projektowaniu?",
			text: " Oczywiście! Nasz zespół projektantów chętnie pomoże Ci w stworzeniu idealnego projektu, który spełni Twoje oczekiwania i będzie harmonizować z przestrzenią, jaką dysponujesz.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "Czy mogę zobaczyć próbki materiałów przed podjęciem decyzji?",
			text: "Tak! Chętnie udostępnimy próbki materiałów i wykończeń, abyś mógł wybrać te, które najlepiej pasują do Twojego wnętrza.",
		},
		{
			id: crypto.randomUUID(),
			title: "Jak wygląda proces płatności? ",
			text: "Po zaakceptowaniu projektu wymagamy zaliczki na pokrycie kosztów materiałów. Resztę kwoty można uiścić przy odbiorze mebli.",
		},
		{
			id: crypto.randomUUID(),
			title: "Co się stanie, jeśli nie będę zadowolony z gotowego produktu?",
			text: "Naszym celem jest Twoje zadowolenie! Jeśli coś nie spełnia Twoich oczekiwań, skontaktuj się z nami, a postaramy się znaleźć rozwiązanie, które Cię usatysfakcjonuje.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Najczęsciej zadawane pytania.
						<span className="aximo-title-animation">
						
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;

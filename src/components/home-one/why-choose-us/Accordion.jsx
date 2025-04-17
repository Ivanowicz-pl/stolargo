import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";

function Accordion() {
	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Pomiar
					</button>
				</h3>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Nasi specjaliści przyjadą do Ciebie, aby dokładnie zmierzyć przestrzeń, w której mają się znaleźć meble. Precyzyjne pomiary są kluczowe, aby zapewnić perfekcyjne dopasowanie.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header" id="headingOne">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						02/ Projektowanie
					</button>
				</h3>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Teraz czas na magię! Wspólnie stworzymy projekt, który odzwierciedli Twój styl i potrzeby. Jesteśmy tu, aby spełnić Twoje marzenia o idealnym wnętrzu!
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						03/ Montaż
					</button>
				</h3>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Po zakończeniu produkcji naszych mebli, nasz wykwalifikowany zespół przystępuje do montażu kuchni. Dbamy o precyzyjne i terminowe wykonanie, zapewniając, 
					że każdy element, od szafek po blaty, jest starannie zainstalowany zgodnie z najwyższymi standardami jakości. Dzięki naszemu doświadczeniu możesz mieć pewność, że Twoja nowa kuchnia będzie funkcjonalna, estetyczna i gotowa do użytku.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;

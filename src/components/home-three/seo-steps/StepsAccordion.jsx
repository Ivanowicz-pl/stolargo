function StepsAccordion() {
	return (
		<div className="accordion aximo-accordion-wrap3" id="aximo-accordion">
			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
				>
					Lady recepcyjne
				</button>

				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Stworzymy elegancką i funkcjonalną przestrzeń na przywitanie każdego klienta. 
					Nasze lady recepcyjne są idealnie dopasowane do stylu Twojego biura i w pełni funkcjonalne.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseTwo"
				>
					Kuchnie biurowe
				</button>

				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Projektujemy kuchnie, które nie tylko są estetyczne, ale i bardzo praktyczne. Dzięki nim Twoi pracownicy zyskają przestrzeń do relaksu i regeneracji sił.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseThree"
				>
					Biurka
				</button>

				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Ergonomiczne biurka, które wspierają komfort pracy. Z nami stworzysz przestrzeń, która sprzyja produktywności, zdrowiu i dobremu samopoczuciu.
					</div>
					
				</div>
				
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapsefour"
				>
					Szafy i regały biurowe
				</button>

				<div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Przemyślane i funkcjonalne systemy przechowywania, które pomagają utrzymać porządek w biurze. Oferujemy różnorodne rozwiązania, które dostosujemy do Twoich potrzeb.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapsefive"
				>
					Biurka elektryczne
				</button>

				<div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Biurka, które możesz łatwo dostosować do swoich potrzeb za pomocą elektrycznego systemu regulacji wysokości. Dzięki temu możesz szybko przejść z pozycji siedzącej na stojącą, co wspiera komfort pracy i zdrowie.
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapsesix"
				>
					OpenSpace
				</button>

				<div id="collapsesix" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Meble, które są wygodne i stylowe, dostosowane do przestrzeni wspólnych w biurach. Dzięki nim każdy pracownik poczuje się komfortowo i zyska odpowiednie warunki do pracy.
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseseven"
				>
					Stoły konferencyjne
				</button>

				<div id="collapseseven" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Stoły, które są eleganckie i przestronne, idealne na spotkania biznesowe. Nasze stoły konferencyjne pomagają budować profesjonalny wizerunek Twojej firmy.
					</div>
				</div>
			</div>

			<div className="accordion-item">
				<button
					className="accordion-button"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseeight"
				>
					Twój projekt
				</button>

				<div id="collapseeight" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Jeśli masz pomysł na idealne meble dla swojej firmy, jesteśmy tu, by go zrealizować. Z pomocą naszego doświadczenia i wiedzy, stworzymy meble idealnie dopasowane do Twojego biura, przestrzeni i potrzeb.
					</div>
				</div>
			</div>
		</div>
	);
}

export default StepsAccordion;

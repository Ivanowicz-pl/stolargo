import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="aximo-counter-wrap">
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={7} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Lat doświadczenia</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
						<CountUp end={300} duration={3} redraw={true} enableScrollSpy />
					</span>
					+
				</h2>
				<p>Ukończonych projektów</p>
			</div>
			<div className="aximo-counter-data">
				<h2 className="aximo-counter-number">
					<span className="aximo-counter">
					<CountUp end={4.7} decimals={1} duration={3} redraw={true} enableScrollSpy />
					</span>
				
				</h2>
				<p>Google Rating</p>
			</div>
		</div>
	);
}

export default AboutCounter;

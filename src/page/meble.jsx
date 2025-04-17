
import Features from "../components/home-two/features";
import Hero from "../components/home-seven/hero";
import Projects from "../components/home-seven/projects";
import Faq from "../components/home-five/faq";
import WaveShape from "../components/home-five/WaveShape";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";

function meble() {
	return (
		<div className="aximo-all-section bg-light1">
			
			<br></br>
            <br></br>
            <br></br>
            
            <Hero />
			<WaveShape />
            <Features />
			<WaveShape />
			<Projects />
			<WaveShape />
			<TwoColumnFaq />
			
			
			
		</div>
	);
}

export default meble
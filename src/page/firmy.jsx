import About from "../components/home-three/about";
import AboutTwo from "../components/home-three/about-two";
import SeoSteps from "../components/home-three/seo-steps";
import Hero from "../components/home-two/hero";
import BrandLogo from "../components/home-seven/brand-logo";


function firmy() {
	return (
		<div className="aximo-all-section bg-light3">
			
			<br></br>
            <br></br>
            <br></br>
            
            <Hero />
			<About />
			<AboutTwo />
			<SeoSteps />
            <BrandLogo />
			
		</div>
	);
}

export default firmy
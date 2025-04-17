import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
import PricingFaq from "../components/pricing/PricingFaq";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team3Img from "../assets/images/team/team3.png";
import Team4Img from "../assets/images/team/4.gif";

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Pomiar",
		designation: "Najpierw klient robi wstępny pomiar – bez stresu, margines błędu jest wliczony, a my na jego podstawie przygotowujemy szybką wycenę. Dokładne pomiary to już zadanie naszych fachowców!",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Rozmowa i Projekt",
		designation: "Rozmawiamy o Twoich potrzebach i pomysłach, a potem tworzymy projekt, który idealnie wpasuje się w Twoją przestrzeń i oczekiwania. Wszystko dopracowujemy razem, aż będzie idealnie!",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Produkcja i dostawa",
		designation: "Po zaakceptowaniu projektu ruszamy z produkcją mebli! Złożone meble dostarczamy pod wskazany adres, gotowe do ustawienia!",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Układanie i montaż",
		designation: "Twoje zmontowane meble wystarczy ułożyć według projektu – to proste szybkie i przede wszystkim TANIE! Jeśli jednak potrzebujesz, nasi fachowcy zajmą się dokładnym dopasowaniem i finalnym montażem.",
		img: Team4Img,
	},
];

function AboutUs() {
	return (
		<>
			<BreadCrumb title="Gotowe Korpusy"/>
			
			<Teams teams={teamsData} /><br></br>
			<AutoSlider /><br></br><br></br><br></br><br></br>
            <Story />
			<AutoSlider /><br></br><br></br><br></br><br></br>
			<PricingFaq />
		</>
	);
}

export default AboutUs;
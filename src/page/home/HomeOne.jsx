import About from "../../components/home-one/about";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";



const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Materiały",
		description:
			"W naszej produkcji korzystamy z wysokiej jakości płyt Pfleiderer, które gwarantują trwałość i estetykę mebli, zapewniając satysfakcję na długie lata",
		icon: "icon-design-tools",
		link: "/materiały"
		
	},
	{
		id: crypto.randomUUID(),
		title: "Akcesoria",
		description:
			"Wiemy jak ważną rolę pełnią akcesoria ich przydatność długowieczność i praktyczność. Dlatego stawiamy tylko na najwyżej jakośći akcesoria niemieckiej firmy Hafele",
		icon: "icon-branding",link: "/Akcesoria"
		
	},
	{
		id: crypto.randomUUID(),
		title: "Realizacje",
		description:
			"Tworzymy indywidualne projekty, które odzwierciedlają unikalne potrzeby naszych klientów. Dodatkowo, na zlecenie oferujemy profesjonalne wizualizacje 3D, pozwalające zobaczyć Twoje wymarzone wnętrze jeszcze przed realizacją",
		icon: "icon-web",link: "/realizacje"
	},
	{
		id: crypto.randomUUID(),
		title: "Zrób to sam",
		description:
			"Zamów gotowe korpusy meblowe, w pełni złożone i uzbrojone w wysokiej jakości akcesoria, gotowe do łatwego montażu! Oszczędź czas i pieniądze – nawet do 5 000 zł, tworząc funkcjonalne wnętrze bez zbędnych komplikacji!",
		icon: "icon-design-thinking",link: "/zrobtosam"
	},
];


function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<WhyChooseUs />
			<Projects />
			<Testimonial />
			
		</>
	);
}

export default HomeOne;

import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png"
import Project5Img from "../../../assets/images/v1/project5.png"
import Project6Img from "../../../assets/images/v1/project6.png";
import Project7Img from "../../../assets/images/v1/project7.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "KUCHNIA Zrób to sam",
		description: "idealne rozwiązanie dla tych, którzy chcą stworzyć własne, funkcjonalne wnętrze przy minimalnym nakładzie pracy i kosztów.",
		img: Project1Img,
		link: "zrobtosam"
	},
	{
		id: crypto.randomUUID(),
		title: "Projekty iwestycyjne",
		description: "Realizujemy kompleksowe projekty meblowe dla dużych inwestycji dla biur i deweloperów.",
		img: Project4Img,
		link: "firmy"
	},
	{
		id: crypto.randomUUID(),
		title: "Wizualizacje dla klienta",
		description: "Realistyczne wizualizacje 3D pozwalają zobaczyć projekt wnętrza przed jego realizacją, gwarantując pełną satysfakcję z końcowego efektu",
		img: Project6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Ostatnie Realizacje",
		description: "Zobacz nasze najnowsze skończone projekty.",
		img: Project7Img,
		link: "realizacje"
	},
	{
		id: crypto.randomUUID(),
		title: "Kuchnie Premium",
		description: "Luksusowe kuchnie na wymiar, które łączą elegancję z najwyższą jakością i funkcjonalnością, idealnie dopasowane do Twoich potrzeb.",
		img: Project5Img,
	},
	

	{
		id: crypto.randomUUID(),
		title: "Nagrody i wyróżnienia",
		description: "Wygrane w konkursach potwierdzają zaangażowanie w jakość i innowacyjność, które doceniają zarówno klienci, jak i branżowi eksperci.",
		img: Project2Img,
		link: "/"
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						
						<span className="aximo-title-animation">
							Dowiedź sie więcej
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;

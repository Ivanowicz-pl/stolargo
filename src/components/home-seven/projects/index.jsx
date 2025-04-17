import ThumbImg1 from "../../../assets/images/portfolio/rel1.jpg";
import ThumbImg2 from "../../../assets/images/portfolio/rel2.jpg";
import ThumbImg3 from "../../../assets/images/portfolio/rel3.jpg";
import ThumbImg4 from "../../../assets/images/portfolio/rel4.jpg";
import ThumbImg5 from "../../../assets/images/portfolio/rel5.jpg";
import ThumbImg6 from "../../../assets/images/portfolio/rel6.jpg";
import ThumbImg7 from "../../../assets/images/portfolio/rel8.jpg";
import ThumbImg8 from "../../../assets/images/portfolio/rel9.jpg";
import FadeInStagger from "../../animation/FadeInStagger";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		img: ThumbImg1,
		title: "Kuchnia otwarta w domu w stylu stodoła.",
		
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg2,
		title: "Domowe Biuro COLUMBUS",
		
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg3,
		title: "Nowoczesna kuchnia z dużym oknem",
		
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg4,
		title: "#Indywidualne biuro",
		description:
			"Projekt ten wygrał nagrodę za najładniejsze biuro w konkursie 'Rehau' w 2022 roku."
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg5,
		title: "Luksusowa Lada recepcyjna, oryginalny design.",
		
			
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg6,
		title: "Budżetowa kuchnia biurowa",
		
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg7,
		title: "Pokój małego odkrywcy",
		
	},
	{
		id: crypto.randomUUID(),
		img: ThumbImg8,
		title: "Budżetowa kuchnia w niewielkim mieszkaniu.",
	
	},
];

import { useEffect, useRef } from "react";

function Projects() {
	const wrappers = useRef(null);

	useEffect(() => {
		wrappers.current = document.querySelectorAll(".aximo-image-resizing-item");
		const wrapArray = Array.from(wrappers.current);

		wrapArray.forEach((item) => {
			const text = item.childNodes[0];

			item.addEventListener("mouseover", function () {
				wrapArray.filter((others) => {
					if (others !== item) {
						others.classList.remove("expand");
					}
				});
				this.classList.add("expand");
				text.classList.add("active");
			});

			item.addEventListener("mouseout", function () {
				this.classList.remove("expand");
				text.classList.remove("active");
			});
		});
	}, []);
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center bricolage-font">
					<h2>Nasze ostatnie realizacje.</h2>
				</div>
			</div>
			<div className="img-container-wrap">
				{projectsData.map((project, index) => (
					<FadeInStagger
						key={project.id}
						className="aximo-image-resizing-item"
						style={{ backgroundImage: `url(${project.img})` }}
						index={index}
					>
						<ProjectCard project={project} />
					</FadeInStagger>
				))}
			</div>
		</div>
	);
}

export default Projects;

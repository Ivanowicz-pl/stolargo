import rel6 from "../../../assets/images/portfolio/rel6.jpg";
import rel7 from "../../../assets/images/portfolio/rel7.jpg";
import rel8 from "../../../assets/images/portfolio/rel8.jpg";
import rel9 from "../../../assets/images/portfolio/rel9.jpg";
import rel10 from "../../../assets/images/portfolio/rel10.jpg";
import rel11 from "../../../assets/images/portfolio/rel11.jpg";
import rel12 from "../../../assets/images/portfolio/rel12.jpg";
import rel13 from "../../../assets/images/portfolio/rel13.jpg";
import rel14 from "../../../assets/images/portfolio/rel14.jpg";
import rel15 from "../../../assets/images/portfolio/rel15.jpg";
import rel16 from "../../../assets/images/portfolio/rel16.jpg";
import rel17 from "../../../assets/images/portfolio/rel17.jpg";
import rel18 from "../../../assets/images/portfolio/rel18.jpg";
import rel19 from "../../../assets/images/portfolio/rel19.jpg";
import rel20 from "../../../assets/images/portfolio/rel20.jpg";
import rel21 from "../../../assets/images/portfolio/rel21.jpg";
import rel22 from "../../../assets/images/portfolio/rel22.jpg";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	{
		id: crypto.randomUUID(),
		title: "Product Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: rel6,
		link: "/about-us"
	},
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Creating or refreshing a companys logo and developing a cohesive visual identity.",
		img: rel7,
		link: "/modul"
	},
	{
		id: crypto.randomUUID(),
		title: "App UI/UX Design",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: rel8,
		link: "/coming-soon"
	},
	{
		id: crypto.randomUUID(),
		title: "Packaging Design",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: rel8,
	},
	{
		id: crypto.randomUUID(),
		title: "Environmental Design",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: rel9,
	},
	{
		id: crypto.randomUUID(),
		title: "Environmental Design",
		description:
			"Designing trade show booths, exhibition spaces, and immersive installations for events and conferences.",
		img: rel10,
	},
	{
		id: crypto.randomUUID(),
		title: "Advertising Campaigns",
		description:
			"Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
		img: rel11,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel12,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel13,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel14,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel15,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel16,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel17,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel18,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel19,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel20,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel21,
	},
	{
		id: crypto.randomUUID(),
		title: "Website Development",
		description:
			"Designing and building user-friendly websites that are visually appealing and responsive to different devices.",
		img: rel22,
	},
];
function PortfolioList() {
	return (
		<div className="section aximo-project-page aximo-section-padding5">
			<div className="container">
				<div className="row">
					{portfolioListData.map((portfolio, index) => (
						<FadeInStagger className="col-lg-6" key={portfolio.id} index={index}>
							<PortfolioCard portfolio={portfolio} />
						</FadeInStagger>
						
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;

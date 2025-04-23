import HeroThumbImg from "../../../assets/images/v1/hero-thumb.png";

function HeroThumbs() {
	return (
		<div
			className="aximo-hero-thumb jos"
			data-jos_animation="fade-right"
			style={{
				maxWidth: "600px",
				width: "100%",
				margin: "0 auto",
				padding: "0 16px", // margines wewnętrzny po bokach na mobilkach
			}}
		>
			<img
				src={HeroThumbImg}
				alt="Hero thumb"
				
			/>
		</div>
	);
}

export default HeroThumbs;

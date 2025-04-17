import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
						Zobacz, jak wyobrażamy 
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
						sobie przyszłość 
					</h2>
					<p>
					Chcemy pokazać, że każdy może stworzyć wymarzoną kuchnię bez konieczności zatrudniania drogich często mało profesjonalnych fachowców. Proste, funkcjonalne i estetyczne rozwiązania są w zasięgu ręki.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;


import Star2Img from "../../assets/images/v1/star2.png";
import FadeInRight from "../animation/FadeInRight";
import lux from "../../assets/images/v1/lux.jpg";
import rehau from "../../assets/images/v1/rehau.png";
import FadeInLeft from "../animation/FadeInLeft";
import luxlogo from "../../assets/images/v1/luxlogo.png";




const workingApprochData = [

];
function WorkingApproach() {
	return (
		<div className="row">
			<div className="col-lg-5 offset-lg-1 order-lg-1">
				<FadeInRight className="aximo-service-details-thumb2 ">
					<img src={lux} alt="service" />
				</FadeInRight>
			</div>
			<div className="col-lg-6">
				<div className="aximo-default-content">
					<h2>
						<span className="aximo-title-animation">
							Oświetlenie LED Loox!    <img src={Star2Img} alt="star" />
							<span className="aximo-title-icon">
								
							</span>
						</span>
					</h2>
					<p>
					Systemy LED Loox od Hafele to oświetlenie klasy premium, które łączy nowoczesną technologię, energooszczędność i wyjątkowy design. Oferują szeroką gamę barw i intensywności światła, idealnie podkreślając estetykę mebli i zapewniając funkcjonalność w codziennym użytkowaniu.

Dzięki trwałości i innowacyjnym rozwiązaniom, oświetlenie Loox objęte jest gwarancją nawet do 10 lat, co czyni je niezawodnym wyborem dla najbardziej wymagających użytkowników.
					</p>
					<FadeInLeft><img src={luxlogo} alt="luxlogo" style={{ width: '50%', height: 'auto' }} /></FadeInLeft>
				</div>
				<div style={{ textAlign: 'center', margin: '20px 0' }}>
      <div
        style={{
          display: 'inline-block',
          border: '5px solid #333', // Grubość i kolor ramki
          borderRadius: '10px', // Zaokrąglenie rogów ramki
          overflow: 'hidden', // Ukrycie krawędzi, aby zaokrąglenie było widoczne
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lb5XoSV_nDw?start=57"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
				<div className="aximo-our-approach">
					{workingApprochData.map((item) => (
						<div className="aximo-iconbox-wrap5" key={item.id}>
							<div className="aximo-iconbox-icon5">
								<i className={`${item.icon}`}></i>
							</div>
							<div className="aximo-iconbox-data5">
								<h3>{item.title}:</h3>
								<div className="aximo-user-interface">
									<ul>
										<li>{item.description}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WorkingApproach;

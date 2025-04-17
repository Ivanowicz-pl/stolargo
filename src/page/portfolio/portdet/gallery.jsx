
import './rel1.css'; // Upewnij się, że stylizacja galerii jest załadowana
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  console.log("Rendering Gallery component");

  const images = [
    'rel1.jpg', 'rel2.jpg', 'rel3.jpg', // Wprowadź prawdziwe ścieżki do zdjęć
    'rel4.jpg', 'rel5.jpg', 'rel6.jpg',
    'rel7.jpg', 'rel8.jpg', 'rel9.jpg'
  ];

  return (
    <>
      <Helmet>
        <title>Galeria - Rel1</title>
      </Helmet>
      <div className="container">
        <h1>Galeria</h1>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-md-6">
              <img src={`../../../assets/images/portfolio/${image}`} alt={`Galeria ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;

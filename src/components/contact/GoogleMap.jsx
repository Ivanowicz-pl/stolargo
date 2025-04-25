import React from "react";
import GoogleMapReact from "google-map-react";

// Komponent pinezki
const LocationPin = ({ text }) => (
  <div style={{ position: "relative", transform: "translate(-50%, -100%)" }}>
    <div style={{ fontSize: "2rem", color: "red" }}>📍</div>
    <div
      style={{
        position: "absolute",
        top: "-1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        fontSize: "0.75rem",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  </div>
);

const GoogleMap = () => {
  const location = {
    center: {
      lat: 49.646690991328114,
      lng: 20.678472887176852,
    },
    zoom: 17,
  };

  // Poprawiony URL - ustawiamy parametry z konkretnymi współrzędnymi!
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=49.646690991328114,20.678472887176852`;

  return (
    <section className="section pt-120 pb-120 bg-light">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2 className="text-dark">Nasza lokalizacja</h2>
          <p>Znajdziesz nas w Nowym Sączu</p>
        </div>

        <div className="row">
          {/* Mapa */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC3K1PgFc8mzUMGcSTbbKhla_hndcfXmk4" }}
                defaultCenter={location.center}
                defaultZoom={location.zoom}
              >
                <LocationPin
                  lat={location.center.lat}
                  lng={location.center.lng}
                  text="Stolargo"
                />
              </GoogleMapReact>
            </div>
          </div>

          {/* Dane kontaktowe + przycisk */}
          <div className="col-lg-4 d-flex flex-column justify-content-center">
            <div className="p-4 bg-white rounded shadow-sm text-center">
              <h4 className="text-dark mb-2">Stolargo</h4>
              <p className="mb-2">ul. Jagodowa 49</p>
              <p className="mb-2">33-300 Nowy Sącz</p>
              <p className="mb-2">📞 +48 734 705 705</p>
              <p className="mb-4">✉️ biuro@stolargo.pl</p>

              <a
  href="https://www.google.com/maps/dir/?api=1&destination=Stolargo,+Jagodowa+49,+33-300+Nowy+Sącz,+Poland&travelmode=driving"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-primary"
>
  Jak dojechać
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;

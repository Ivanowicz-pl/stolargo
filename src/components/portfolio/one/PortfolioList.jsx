import React, { useState } from "react";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

// Przykładowe dane dla portfolio
import rel1 from "../../../assets/images/portfolio/rel1.jpg";
import rel2 from "../../../assets/images/portfolio/rel2.jpg";
import rel3 from "../../../assets/images/portfolio/rel3.jpg";
import rel4 from "../../../assets/images/portfolio/rel4.jpg";
import rel5 from "../../../assets/images/portfolio/rel5.jpg";
import rel6 from "../../../assets/images/portfolio/rel6.jpg";
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
import rel23 from "../../../assets/images/portfolio/rel23.jpg";

  {/* Menu filtrów */}
  <div className="filter-menu">
    <button
      className="btn"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    ></button> </div>

// Przykładowe dane dla portfolio
const portfolioOneData = [
  { id: Math.random().toString(36).substr(2, 9), title: "Otwarta Kuchnia", img: rel1, category:  "Kuchnie", link: "/rel1" },
  { id: Math.random().toString(36).substr(2, 9), title: "Domowe biuro", img: rel2, category: ["Szafy","Biura"], link: "/rel2" },
  { id: Math.random().toString(36).substr(2, 9), title: "Kuchnia z dużą wyspą", img: rel3, category: "Kuchnie", link: "/rel3" },
  { id: Math.random().toString(36).substr(2, 9), title: "Biuro z ukrytym przejściem", img: rel4, category: ["Biura","Szafy"], link: "/rel4" },
  { id: Math.random().toString(36).substr(2, 9), title: "Rdzawa Lada", img: rel5, category: "Lady", link: "/rel5" },
  { id: Math.random().toString(36).substr(2, 9), title: "Kuchnia office", img: rel6, category: ["Kuchnie","Biura"], link: "/rel6" },
  { id: Math.random().toString(36).substr(2, 9), title: "Biurko dla nastolatka", img: rel8, category: ["Biura", "Inne"], link: "/rel7" },
  { id: Math.random().toString(36).substr(2, 9), title: "Kuchnia Akademik", img: rel9, category: "Kuchnie", link: "/rel8" },
  { id: Math.random().toString(36).substr(2, 9), title: "Kuchnia w mieszkaniu", img: rel10, category: "Kuchnie", link: "/rel9" },
  { id: Math.random().toString(36).substr(2, 9), title: "Lada Recepcyjna", img: rel11, category: "Lady", link: "/rel10" },
  { id: Math.random().toString(36).substr(2, 9), title: "Stylowa szafa biurowa", img: rel12, category: ["Szafy","Biura"], link: "/rel11" },
  { id: Math.random().toString(36).substr(2, 9), title: "Lada recepcyjna z drzwiczkami", img: rel13, category: ["Lady", "Szafy", "Biura"], link: "/rel12" },
  { id: Math.random().toString(36).substr(2, 9), title: "Szafa biurowa", img: rel14, category: ["Szafy", "Biura"], link: "/rel13" },
  { id: Math.random().toString(36).substr(2, 9), title: "Biuro", img: rel15, category: ["Szafy", "Biura"], link: "/rel14" },
  { id: Math.random().toString(36).substr(2, 9), title: "Małe Rtv", img: rel16, category: "Inne", link: "/rel15" },
  { id: Math.random().toString(36).substr(2, 9), title: "Domowa kuchnia", img: rel17, category: "Kuchnie", link: "/rel16" },
  { id: Math.random().toString(36).substr(2, 9), title: "Mała łazienka  ", img: rel18, category: "Łazienki", link: "/rel17" },
  { id: Math.random().toString(36).substr(2, 9), title: "Szafa wnękowa", img: rel19, category: "Szafy", link: "/rel18" },
  { id: Math.random().toString(36).substr(2, 9), title: "HomeOffice dla dwójki", img: rel20, category: ["Biura","Inne"], link: "/rel19" },
  { id: Math.random().toString(36).substr(2, 9), title: "Garderoba", img: rel21, category: "Szafy", link: "/rel20" },
  { id: Math.random().toString(36).substr(2, 9), title: "Szafa wolnostojąca", img: rel23, category: ["Biura", "Szafy"], link: "/rel21" },
];

function PortfolioList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false); // Zamknij menu na mniejszych ekranach
  };

  const filteredPortfolio =
  selectedCategory === "all"
    ? portfolioOneData
    : portfolioOneData.filter((item) =>
        Array.isArray(item.category)
          ? item.category.includes(selectedCategory) // Sprawdzamy, czy kategoria jest w tablicy
          : item.category === selectedCategory // Dla pojedynczego ciągu
      );

  return (
    <div className="portfolio-page">
      {/* Menu filtrów */}
      <div className={`filter-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Filtry
        </button>
        <div className={`dropdown ${isMenuOpen || window.innerWidth > 768 ? "show" : ""}`}>
          <button
            onClick={() => handleCategoryChange("all")}
            className={`dropdown-item ${selectedCategory === "all" ? "active" : ""}`}
          >
            Wszystkie
          </button>
          <button
            onClick={() => handleCategoryChange("Kuchnie")}
            className={`dropdown-item ${selectedCategory === "Kuchnie" ? "active" : ""}`}
          >
            Kuchnie
          </button>
          <button
            onClick={() => handleCategoryChange("Szafy")}
            className={`dropdown-item ${selectedCategory === "Szafy" ? "active" : ""}`}
          >
            Szafy
          </button>
          <button
            onClick={() => handleCategoryChange("Biura")}
            className={`dropdown-item ${selectedCategory === "Biura" ? "active" : ""}`}
          >
            Biura
          </button>
          <button
            onClick={() => handleCategoryChange("Łazienki")}
            className={`dropdown-item ${selectedCategory === "Łazienki" ? "active" : ""}`}
          >
            Łazienki
          </button>
          <button
            onClick={() => handleCategoryChange("Lady")}
            className={`dropdown-item ${selectedCategory === "Lady" ? "active" : ""}`}
          >
           Lady recepcyjne
          </button>
          <button
            onClick={() => handleCategoryChange("Inne")}
            className={`dropdown-item ${selectedCategory === "Inne" ? "active" : ""}`}
          >
           Inne
          </button>
        </div>
      </div>

      {/* Galeria portfolio */}
      <div className="portfolio-gallery">
        {filteredPortfolio.length > 0 ? (
          filteredPortfolio.map((portfolio, index) => (
            <FadeInStagger
              className="portfolio-card-wrapper"
              key={portfolio.id || index}
              index={index}
            >
              <PortfolioCard portfolio={portfolio} />
            </FadeInStagger>
          ))
        ) : (
          <p>Brak projektów do wyświetlenia.</p>
        )}
      </div>
    </div>
  );
}

export default PortfolioList;

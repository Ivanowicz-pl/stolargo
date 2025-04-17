import React, { useState, useEffect, useRef } from "react";


// Importowanie obrazów
import drawer1 from "../assets/images/drawer/drawer (1).png";
import drawer2 from "../assets/images/drawer/drawer (2).png";
import drawer3 from "../assets/images/drawer/drawer (3).png";
import drawer4 from "../assets/images/drawer/drawer (4).png";
import drawer5 from "../assets/images/drawer/drawer (5).png";
import drawer6 from "../assets/images/drawer/drawer (6).png";
import drawer7 from "../assets/images/drawer/drawer (7).png";
import drawer8 from "../assets/images/drawer/drawer (8).png";
import drawer9 from "../assets/images/drawer/drawer (9).png";
import drawer10 from "../assets/images/drawer/drawer (10).png";
import drawer11 from "../assets/images/drawer/drawer (11).png";
import drawer12 from "../assets/images/drawer/drawer (12).png";
import drawer13 from "../assets/images/drawer/drawer (13).png";
import drawer14 from "../assets/images/drawer/drawer (14).png";
import drawer15 from "../assets/images/drawer/drawer (15).png";
import drawer16 from "../assets/images/drawer/drawer (16).png";
import drawer17 from "../assets/images/drawer/drawer (17).png";
import drawer18 from "../assets/images/drawer/drawer (18).png";
import drawer19 from "../assets/images/drawer/drawer (19).png";
import drawer20 from "../assets/images/drawer/drawer (20).png";
import drawer21 from "../assets/images/drawer/drawer (21).png";
import drawer22 from "../assets/images/drawer/drawer (22).png";
import drawer23 from "../assets/images/drawer/drawer (23).png";
import drawer24 from "../assets/images/drawer/drawer (24).png";
import drawer25 from "../assets/images/drawer/drawer (25).png";
import drawer26 from "../assets/images/drawer/drawer (26).png";
import drawer27 from "../assets/images/drawer/drawer (27).png";
import drawer28 from "../assets/images/drawer/drawer (28).png";
import drawer29 from "../assets/images/drawer/drawer (29).png";
import drawer30 from "../assets/images/drawer/drawer (30).png";
import drawer31 from "../assets/images/drawer/drawer (31).png";
import drawer32 from "../assets/images/drawer/drawer (32).png";
import drawer33 from "../assets/images/drawer/drawer (33).png";
import drawer34 from "../assets/images/drawer/drawer (34).png";
import drawer35 from "../assets/images/drawer/drawer (35).png";
import drawer36 from "../assets/images/drawer/drawer (36).png";
import drawer37 from "../assets/images/drawer/drawer (37).png";
import drawer38 from "../assets/images/drawer/drawer (38).png";
import drawer39 from "../assets/images/drawer/drawer (39).png";
import drawer40 from "../assets/images/drawer/drawer (40).png";
import drawer41 from "../assets/images/drawer/drawer (41).png";
import drawer42 from "../assets/images/drawer/drawer (42).png";
import drawer43 from "../assets/images/drawer/drawer (43).png";
import drawer44 from "../assets/images/drawer/drawer (44).png";
import drawer45 from "../assets/images/drawer/drawer (45).png";
import drawer46 from "../assets/images/drawer/drawer (46).png";
import drawer47 from "../assets/images/drawer/drawer (47).png";
import drawer48 from "../assets/images/drawer/drawer (48).png";
import drawer49 from "../assets/images/drawer/drawer (49).png";
import drawer50 from "../assets/images/drawer/drawer (50).png";
import drawer51 from "../assets/images/drawer/drawer (51).png";
import drawer52 from "../assets/images/drawer/drawer (52).png";
import drawer53 from "../assets/images/drawer/drawer (53).png";
import drawer54 from "../assets/images/drawer/drawer (54).png";
import drawer55 from "../assets/images/drawer/drawer (55).png";
import drawer56 from "../assets/images/drawer/drawer (56).png";
import drawer57 from "../assets/images/drawer/drawer (57).png";
import drawer58 from "../assets/images/drawer/drawer (58).png";
import drawer59 from "../assets/images/drawer/drawer (59).png";
import drawer60 from "../assets/images/drawer/drawer (60).png";
import drawer61 from "../assets/images/drawer/drawer (61).png";
import drawer62 from "../assets/images/drawer/drawer (62).png";
import drawer63 from "../assets/images/drawer/drawer (63).png";
import drawer64 from "../assets/images/drawer/drawer (64).png";
import drawer65 from "../assets/images/drawer/drawer (65).png";
import drawer66 from "../assets/images/drawer/drawer (66).png";
import drawer67 from "../assets/images/drawer/drawer (67).png";
import drawer68 from "../assets/images/drawer/drawer (68).png";
import drawer69 from "../assets/images/drawer/drawer (69).png";
import drawer70 from "../assets/images/drawer/drawer (70).png";
import drawer71 from "../assets/images/drawer/drawer (71).png";
import drawer72 from "../assets/images/drawer/drawer (72).png";
import drawer73 from "../assets/images/drawer/drawer (73).png";
import drawer74 from "../assets/images/drawer/drawer (74).png";
import drawer75 from "../assets/images/drawer/drawer (75).png";
import drawer76 from "../assets/images/drawer/drawer (76).png";
import drawer77 from "../assets/images/drawer/drawer (77).png";
import drawer78 from "../assets/images/drawer/drawer (78).png";
import drawer79 from "../assets/images/drawer/drawer (79).png";
import drawer80 from "../assets/images/drawer/drawer (80).png";
import drawer81 from "../assets/images/drawer/drawer (81).png";
import drawer82 from "../assets/images/drawer/drawer (82).png";
import drawer83 from "../assets/images/drawer/drawer (83).png";
import drawer84 from "../assets/images/drawer/drawer (84).png";
import drawer85 from "../assets/images/drawer/drawer (85).png";
import drawer86 from "../assets/images/drawer/drawer (86).png";
import drawer87 from "../assets/images/drawer/drawer (87).png";
import drawer88 from "../assets/images/drawer/drawer (88).png";
import drawer89 from "../assets/images/drawer/drawer (89).png";


function AnimatedDrawer() {
  const [currentFrame, setCurrentFrame] = useState(0); // Obecny numer zdjęcia
  const [isVisible, setIsVisible] = useState(false); // Czy element jest widoczny
  const frames = [
    drawer1, drawer2, drawer3, drawer4, drawer5, drawer6, drawer7, drawer8, drawer9, drawer10,
    drawer11, drawer12, drawer13, drawer14, drawer15, drawer16, drawer17, drawer18, drawer19, drawer20,
    drawer21, drawer22, drawer23, drawer24, drawer25, drawer26, drawer27, drawer28, drawer29, drawer30,
    drawer31, drawer32, drawer33, drawer34, drawer35, drawer36, drawer37, drawer38, drawer39, drawer40,
    drawer41, drawer42, drawer43, drawer44, drawer45, drawer46, drawer47, drawer48, drawer49, drawer50,
    drawer51, drawer52, drawer53, drawer54, drawer55, drawer56, drawer57, drawer58, drawer59, drawer60,
    drawer61, drawer62, drawer63, drawer64, drawer65, drawer66, drawer67, drawer68, drawer69, drawer70,
    drawer71, drawer72, drawer73, drawer74, drawer75, drawer76, drawer77, drawer78, drawer79, drawer80,
    drawer81, drawer82, drawer83, drawer84, drawer85, drawer86, drawer87, drawer88, drawer89, 
  ]; // Tablica zaimportowanych obrazów

  const drawerRef = useRef(null); // Referencja do elementu

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Element stał się widoczny
          } else {
            setIsVisible(false); // Element przestał być widoczny
          }
        });
      },
      { threshold: 0.1 } // 50% elementu musi być widocznej, aby uznać go za "widoczny"
    );

    if (drawerRef.current) {
      observer.observe(drawerRef.current); // Obserwowanie elementu
    }

    return () => {
      if (drawerRef.current) {
        observer.unobserve(drawerRef.current); // Przestanie obserwować po odmontowaniu komponentu
      }
    };
  }, []);

  useEffect(() => {
    

    let interval;

    const startAnimation = () => {
      setCurrentFrame(0); // Resetowanie animacji do pierwszej klatki

      interval = setInterval(() => {
        setCurrentFrame((prevFrame) => {
          if (prevFrame + 1 === frames.length) {
            clearInterval(interval); // Zatrzymujemy animację po osiągnięciu ostatniej klatki
            return prevFrame;
          }
          return prevFrame + 1; // Zwiększamy numer klatki
        });
      }, 10); // Czas trwania jednej klatki (50ms = 20 klatek na sekundę)
    };

    startAnimation(); // Rozpoczynamy animację

    return () => clearInterval(interval); // Czyszczenie interval po zakończeniu animacji
  }, [isVisible, frames.length]); // Restart animacji, gdy element staje się widoczny

  return (
    <div className="animated-drawer" ref={drawerRef}>
      <img
        src={frames[currentFrame]} // Dynamicznie ładowany obraz
        alt={`Frame ${currentFrame + 1}`}
        className="drawer-animation"
      />
    </div>
  );
}

export default AnimatedDrawer;
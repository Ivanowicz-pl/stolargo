import React from "react";
import "./CallButton.css"; // Plik CSS dla stylów przycisku

function CallButton() {
  const phoneNumber = "+48734705705"; // Zmień na rzeczywisty numer telefonu

  return (
    <div className="call-button-container">
      <a href={`tel:${phoneNumber}`} className="call-button">
        Lub Zadzwoń do nas
      </a>
    </div>
  );
}

export default CallButton;

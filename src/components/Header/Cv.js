import React from "react";
import CV from "../../resources/cv.pdf";

function Cv() {
  return (
    <div className="Cv">
      <a href={CV} download className="btn">
        Download Cv
      </a>
    </div>
  );
}

export default Cv;

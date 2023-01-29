import React from "react";
import Cv from "./Cv";
import ME from "../../resources/me.jpg";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Merhaba! Ben</h5>
        <h1>Hüseyin Diyaroğlu</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Cv />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import "./button.scss";

function Btn() {

  return (
      <a href="#contact-me"><button class="btn" type="button">
        <strong>CONTACT ME</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button></a> 
  );
}

export default Btn;

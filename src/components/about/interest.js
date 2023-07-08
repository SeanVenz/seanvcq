import React from "react";
import poetry from "../../images/ink.png";
import badminton from "../../images/shuttlecock.png";
import eating from "../../images/cutlery.png";
import motorRiding from "../../images/motorbike.png";
import gaming from "../../images/gamer.png";
import volleyball from "../../images/volleyball-ball.png";

function Interests() {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h2>
          <b>Interests</b>
        </h2>
      </div>
      <div className="about-description">
        <div className="description">
          <div className="info">
            <img src={eating} alt="Eating" />
            <p>Eating</p>
          </div>
          <div className="info">
            <img src={poetry} alt="Poetry" />
            <p>Poetry</p>
          </div>
          <div className="info">
            <img src={gaming} alt="Gaming" />
            <p>Gaming</p>
          </div>
        </div>
        <div className="my-column">
          <div className="info">
            <img src={badminton} alt="Badminton" />
            <p>Badminton</p>
          </div>
          <div className="info">
            <img src={motorRiding} alt="Motorcycle Riding" />
            <p>Motorcycle Riding</p>
          </div>
          <div className="info">
            <img src={volleyball} alt="Volleyball" />
            <p>Volleyball</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;

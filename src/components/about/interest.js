import React from "react";
import poetry from "../../images/ink.png";
import badminton from "../../images/shuttlecock.png";
import eating from "../../images/cutlery.png";
import motorRiding from "../../images/motorbike.png";
import gaming from "../../images/gamer.png";
import volleyball from "../../images/volleyball-ball.png";
import "./interest.scss";

function Interests() {
  return (
    <div className="interests">
      <div className="interest-heading">
        <h2>
          <b>INTERESTS</b>
        </h2>
      </div>
      <div className="my-interests">
        <div className="indiv-interest ">
          <p className="int-desc left">EATING</p>
          <img src={eating} alt="Eating" className="int-img" />
        </div>
        <div className="indiv-interest ">
          <p className="int-desc right">POETRY</p>
          <img src={poetry} alt="Poetry" className="int-img" />
        </div>
        <div className="indiv-interest ">
          <p className="int-desc left">GAMING</p>
          <img src={gaming} alt="Gaming" className="int-img" />
        </div>
        <div className="indiv-interest ">
          <p className="int-desc right">BADMINTON</p>
          <img src={badminton} alt="Badminton" className="int-img" />
        </div>
        <div className="indiv-interest ">
          <p className="int-desc left">VOLLEYBALL</p>
          <img src={volleyball} alt="Volleyball" className="int-img" />
        </div>
        <div className="indiv-interest ">
          <p className="int-desc right">MOTORCYCLE RIDING</p>
          <img src={eating} alt="Eating" className="int-img" />
        </div>
      </div>
    </div>
  );
}

export default Interests;

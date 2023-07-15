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
          <b>- interests -</b>
        </h2>
      </div>
      <div className="my-interests">
        <div className="left indiv-interest">
          <p>EATING</p>
          <img src={eating} alt="Eating" />
        </div>
        <div className="right indiv-interest">
          <p>GAMING</p>
          <img src={gaming} alt="Gaming" />
        </div>
        <div className="left indiv-interest">
          <p>POETRY</p>
          <img src={poetry} alt="Poetry" />
        </div>
        <div className="right indiv-interest">
          <p>BADMINTON</p>
          <img src={badminton} alt="Badminton" />
        </div>
        <div className="left indiv-interest">
          <p>VOLLEYBALL</p>
          <img src={volleyball} alt="Volleyball" />
        </div>
        <div className="right indiv-interest">
          <p>MOTORCYCLE RIDING</p>
          <img src={motorRiding} alt="Motorcycle-Riding" />
        </div>
      </div>
    </div>
  );
}

export default Interests;

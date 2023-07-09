import React from "react";
import poetry from "../../images/ink.png";
import badminton from "../../images/shuttlecock.png";
import eating from "../../images/cutlery.png";
import motorRiding from "../../images/motorbike.png";
import gaming from "../../images/gamer.png";
import volleyball from "../../images/volleyball-ball.png";
import './interest.scss'

function Interests() {
  return (
    <div className="interests">
      <div className="interests-heading">
        <h2>
          <b>Interests</b>
        </h2>
      </div>
      <div className="interests-container">
        <div className="column">
          <div className="indiv-interest">
            <img src={eating} alt="Eating" className="img-hover" />
            <p className="left">EATING</p>
          </div>
          <div className="indiv-interest">
            <img src={poetry} alt="Poetry" className="img-hover"/>
            <p className="right">POETRY</p>
          </div>
          <div className="indiv-interest">
            <img src={gaming} alt="Gaming" className="img-hover"/>
            <p className="left">GAMING</p>
          </div>
        </div>
        <div className="column">
          <div className="indiv-interest">
            <img src={badminton} alt="Badminton" className="img-hover"/>
            <p className="right">BADMINTON</p>
          </div>
          <div className="indiv-interest">
            <img src={motorRiding} alt="Motorcycle Riding" className="img-hover"/>
            <p className="left">MOTORCYCLE RIDING</p>
          </div>
          <div className="indiv-interest">
            <img src={volleyball} alt="Volleyball" className="img-hover"/>
            <p className="right">VOLLEYBALL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;

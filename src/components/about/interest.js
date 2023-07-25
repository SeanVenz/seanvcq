import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.net.min";
import * as THREE from "three";import React from "react";
import poetry from "../../images/poetry.jpg";
import badminton from "../../images/badminton.jpg";
import eating from "../../images/eating.jpg";
import motorRiding from "../../images/motorcylce.jpg";
import gaming from "../../images/gaming.jpg";
import volleyball from "../../images/volleyball.jpg";
import "./interest.scss";

function Interests() {

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundAlpha: 0.00,
          points: 5.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="interests" ref={vantaRef}>
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

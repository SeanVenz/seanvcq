import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.net.min";
import * as THREE from "three";import React from "react";
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
          minHeight: 350.0,
          minWidth: 350.0,
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
          <p>PROGRAMMING</p>
        </div>
        <div className="right indiv-interest">
          <p>GAMING</p>
        </div>
        <div className="left indiv-interest">
          <p>POETRY</p>
        </div>
        <div className="right indiv-interest">
          <p>BADMINTON</p>
        </div>
        <div className="left indiv-interest">
          <p>VOLLEYBALL</p>
        </div>
        <div className="right indiv-interest">
          <p>RIDING</p>
        </div>
      </div>
    </div>
  );
}

export default Interests;

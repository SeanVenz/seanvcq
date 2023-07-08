import React, { useEffect, useState } from "react";
import "./banner.scss";
import logo from "../../images/logo.png";
import Btn from "./btn";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "Software Engineer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100); // Reduced delta value for faster typing
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); // Reset delta value for faster typing
    }
  };

  return (
    <div className="banner" id="home">
      <div className="heading">
        <div className="intro">
          <h1>
            {`Hi! I'm a Philippine based aspiring -`}
            <span className="wrap">{text}</span>
          </h1>
        </div>
        <div className="description">
          <p>
            I'm currenly a 4th year Computer Science Student from Cebu Institute
            of Technology-University
          </p>
        </div>
          <Btn></Btn>
      </div>
      <div className="my-logo">
        <img src={logo} alt="logo" className="floating-image" />
      </div>
    </div>
  );
}

export default Banner;

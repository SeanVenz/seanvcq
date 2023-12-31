import React, { useEffect, useState } from "react";
import "./banner.scss";
import banner from "../../images/banner.png";
import Btn from "./btn";
import ImagePreloader from "../preloader";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Full-Stack Developer", "ML Engineer", "Software Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
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
      setDelta(100);
    }
  };

  return (
    <div className="banner" id="home">
      <div className="heading">
        <div className="intro">
          <h1>
            {"Hi! I'm a Philippine based aspiring"}
            <span className="wrap">{" " + text}</span>
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
        <ImagePreloader src={banner} alt="logo" ></ImagePreloader>
      </div>
    </div>
  );
}

export default Banner;

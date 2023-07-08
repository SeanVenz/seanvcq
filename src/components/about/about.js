import React from "react";
import "./about.scss";
import facebook from '../../images/facebook.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'

function About() {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h2><b>- about me -</b></h2>
      </div>
      <div className="about-description">
        <div className="description">
          <p>
          Hey! I'm Sean Venz Quijano, a passionate programmer specializing in web development. 
          I thrive on collaborating with like-minded individuals to solve programming challenges. 
          Constantly seeking knowledge and staying up-to-date with industry trends.
          </p>
        </div>
        <div className="contact">
            <h3>Socials:</h3>
            <a href="https://www.facebook.com/quijano.seanvenz" target="_blank"><img src={facebook} alt="facebook"></img></a>
            <a href="https://github.com/SeanVenz" target="_blank"><img src={github} alt="facebook" className="social-circle"></img></a>
            <a href="https://www.linkedin.com/in/sean-venz-quijano/" target="_blank"><img src={linkedin} alt="facebook" className="social-circle"></img></a>
        </div>
      </div>
    </div>
  );
}

export default About;

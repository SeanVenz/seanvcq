import React from "react";
import "./about.scss";
import user from "../../images/user.png";
import telephone from "../../images/telephone-call.png";
import bday from "../../images/date-of-birth.png";
import email from "../../images/email.png";

function About() {
  const contactData = [
    { img: user, desc: "Sean Venz Quijano", alt: "user" },
    { img: bday, desc: "April 22, 2001", alt: "bday" },
    { img: telephone, desc: "+63 991 640 2975", alt: "tel" },
    { img: email, desc: "quijano.seanvenz@gmail.com", alt: "email" },
  ];

  

  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h2>
          <b>- about me -</b>
        </h2>
      </div>
      <div className="about-description">
        <div className="description">
          <p>
            Hey! I'm Sean Venz Quijano, a passionate programmer specializing in
            web development. I thrive on collaborating with like-minded
            individuals to solve programming challenges. Constantly seeking
            knowledge and staying up-to-date with industry trends.
          </p>
        </div>
        <div className="contact">
          {contactData.map((contact, index) => (
            <div className="info" key={index}>
              <img src={contact.img} alt={contact.alt}></img>
              <p>{contact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

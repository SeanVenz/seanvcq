import React from "react";
import "./footer.scss";
import github from "../../images/icons8-github.svg";
import facebook from "../../images/icons8-facebook.svg";
import linkedin from "../../images/icons8-linkedin.svg";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="my-footer">
      <div className="links">
        <a
          href="https://www.facebook.com/quijano.seanvenz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a
          href="https://github.com/SeanVenz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" />
        </a>

        <a
          href="https://www.linkedin.com/in/sean-venz-quijano"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <p>© {year} Sean Venz Quijano | All Rights Reserved</p>
    </div>
  );
}

export default Footer;

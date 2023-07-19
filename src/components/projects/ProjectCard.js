import React from "react";
import "./card.scss";
import arrow from '../../images/arrow-right-top.svg'

function ProjectCard(props) {
  const { img, title, points } = props;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={title} />
        <div className="overlay">
          <ul>
            {points.map((point, index) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="proj-title">
        <h3>{title}
        <img src={arrow} className="arrow-icon" alt="arrow"/>
        <img src={arrow} className="arrow-icon hover" alt="arrow"/>
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;
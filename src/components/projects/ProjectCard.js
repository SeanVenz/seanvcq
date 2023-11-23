import React from "react";
import "./card.scss";
import arrow from '../../images/arrow-right-top.svg'

function ProjectCard(props) {
  const { img, title, points } = props;

  const renderPoint = (point, index) => {
    if (typeof point === 'object' && point.url && point.text) {
      return (
        <a href={point.url} target="_blank" rel="noopener noreferrer" key={index}>
          {point.text}
        </a>
      );
    } else {
      return <span key={index}>{point}</span>;
    }
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={title} />
        <div className="overlay">
          <ul>
            {points.map((point, index) => (
              <li key={index}>{renderPoint(point, index)}</li>
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
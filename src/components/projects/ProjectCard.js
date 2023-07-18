import React from "react";
import "./card.scss";

function ProjectCard(props) {
  const { img, title, description } = props;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={title} />
        <div className="overlay">
          <p>{description}</p>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import "./projects.scss";
import interpreter from '../../images/interpreter.jpg'
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {name: "Interpreter", img: interpreter, description: "Contributed in a group on creating a CODE Interpreter with Language Specification set by our Professor." }
  ]

  return (
    <div className="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
      </div>
        <div className="desc">
          Since embarking on my journey in Computer Science, I've had the
          opportunity to participate in a wide variety of projects that have not
          only broadened my skill set but have also fueled my passion for this
          field. Let's dive into some of these transformative experiences.
        </div>
        <div className="my-projects">
          {projects.map((project, index) => (
            <ProjectCard
              img = {project.img}
              title = {project.name}
              description = {project.description}
            />
          ))}
        </div>
    </div>
  );
}

export default Projects;

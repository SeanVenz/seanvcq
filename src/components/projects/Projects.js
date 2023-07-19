import React from "react";
import "./projects.scss";
import interpreter from "../../images/interpreter.jpg";
import identity from '../../images/identity.jpg'
import coffeeshop from '../../images/cofee-shop.jpg'
import barangayApp from '../../images/barangay-reg.png'
import ProjectCard from "./ProjectCard";
import carRental from '../../images/car-rental.jpg'

function Projects() {
  const projects = [
    {
      name: "Interpreter",
      img: interpreter,
      points: ["Made using ANTLR and C#", "Has complete functionalities like loop, switch, and conditional statements."]
    },
    {
      name: "Family Registration App",
      img: barangayApp,
      points: ["Made using C# and React", "Can Register, Update, and Delete Family, Barangays and Family Members.", "Complete Front-End, Back-End, SQL Database, and Unit Testing"]
    },
    {
      name: "Coffee Shop API",
      img: coffeeshop,
      points: ["Made using C#", "Can Register, Update, and Delete Barista, Order, Customer, Customer Preferences.", "Complete Back-End and SQL Database"]
    },
    {
      name: "Identity API",
      img: identity,
      points: ["Made using C#", "Combines Other Free API's to generate identity", "Deployed using Azure", "Has CI/CD", "Applies SOLID Principles", "Applies Design Pattern", "Complete Back-End, Unit Testing, SQL Database"]
    },
    {
      name: "Car Rental Management System",
      img: carRental,
      points: ["Made using Java JDBC", "Can book a Car with driver", "Can see car Availability."]
    },
  ];

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
            img={project.img}
            title={project.name}
            description={project.description}
            points = {project.points}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import "./projects.scss";
import interpreter from "../../images/interpreter.jpg";
import identity from "../../images/identity.jpg";
import coffeeshop from "../../images/cofee-shop.jpg";
import barangayApp from "../../images/barangay-reg.png";
import ProjectCard from "./ProjectCard";
import carRental from "../../images/car-rental.jpg";
import careerAI from "../../images/careerAI.png";
import meanTemp from "../../images/meantemp.jpg";
import walletWise from "../../images/walletwise.png";
import wordpress from '../../images/wordpressss.png'

function Projects() {
  const projects = [
    {
      name: "WordPress Projects",
      img: wordpress,
      points: [
        "The projects i handled when i was on my OJT at Delonix Marketing Corporation",
        { text: "Pro Window Cleaning Perth", url: "https://prowindowcleaningperth.com.au" },
        { text: "Window Cleaners Brisbane", url: "https://windowcleanersbrisbane.com.au" },
        { text: "Epoxy Flooring Perth", url: "https://epoxyflooringperth.com" },
        { text: "Epoxy Flooring Adelaide", url: "https://epoxyflooringadelaide.net.au" },
        { text: "Pro Painters geelong", url: "https://propaintersgeelong.com.au" },
        { text: "Epoxy Flooring Sunshine Coast", url: "https://epoxyflooringsunshinecoast.com" },
        { text: "The Marketing Syndicate", url: "https://themarketingsyndicate.com.au/" },
      ],
    },
    {
      name: "Wallet Wise",
      img: walletWise,
      points: [
        "Made using ReactJS and Firebase",
        "Let Vendor add Foods",
        "Let students order food",
        "Let students order and deliver foods",
        "Let students converse with each other",
        "Let students view location of courier and buyer",
        { text: "Wallet Wise", url: "https://walletwise-silk.vercel.app" },
      ],
    },
    {
      name: "Interpreter",
      img: interpreter,
      points: [
        "Made using ANTLR and C#",
        "Follows CODE Interpreter guidelines set by Professor",
        "Has complete functionalities like loop, switch, and conditional statements.",
      ],
    },
    {
      name: "Family Registration App",
      img: barangayApp,
      points: [
        "Made using C# and ReactJS",
        "Can Register, Update, and Delete Family, Barangays and Family Members.",
        "Complete Front-End, Back-End, SQL Database, and Unit Testing",
      ],
    },
    {
      name: "CareerAI",
      img: careerAI,
      points: [
        "Made using C# and ReactJS",
        "Uses ML .NET",
        "Was trained using 6k rows and 20 columns of dataset",
        "Can predict your Career based on your knowledge on IT Fields",
      ],
    },
    {
      name: "Mean Temperature Prediction",
      img: meanTemp,
      points: [
        "Made using C#",
        "Uses Backpropagation Algorithm",
        "Can predict annual temperature based on Carbon Dioxide Emission",
      ],
    },
    {
      name: "Coffee Shop API",
      img: coffeeshop,
      points: [
        "Made using C#",
        "Can Register, Update, and Delete Barista, Order, Customer, Customer Preferences.",
        "Complete Back-End and SQL Database",
      ],
    },
    {
      name: "Identity API",
      img: identity,
      points: [
        "Made using C#",
        "Combines Other Free API's to generate identity",
        "Deployed using Azure",
        "Has CI/CD",
        "Applies SOLID Principles",
        "Applies Design Pattern",
        "Complete Back-End, Unit Testing, SQL Database",
      ],
    },
    {
      name: "Car Rental Management System",
      img: carRental,
      points: [
        "Made using Java JDBC",
        "Can book a Car with driver",
        "Can see car Availability.",
      ],
    },
  ];

  return (
    <div className="projects" id="projects">
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
            points={project.points}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

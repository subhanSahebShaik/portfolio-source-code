import React from "react";
import "./Projects.css";

import mp2 from "../../images/mp2-Subhan Saheb Shaik-Project.jpeg";
import tianzu from "../../images/theTianzu-Subhan Saheb Shaik-Project.jpeg";
import epms from "../../images/epms-Subhan Saheb Shaik-Project.jpg";
import name from "../../images/logo-Subhan Saheb Shaik(edited).png";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <p>I've worked on</p>
      <div className="project">
        <img src={mp2} alt="logo" />
        <div>
          <p>
            <span>Mobile Price Prediction Using Random Forest Algorithm</span>
            <br />
            An ML model, which considers the features of a mobile and suggest a
            price for it.
          </p>
          <div>
            <a
              href="https://github.com/subhanSahebShaik/mp2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repository
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div>
          <p>
            <span>The Thianzu</span>
            <br />A web application that gives an overview of cultures and
            traditions of Indian states.
          </p>
          <div>
            <a
              href="https://github.com/subhanSahebShaik/theThianzu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repository
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        </div>
        <img src={tianzu} alt="logo" />
      </div>
      <div className="project">
        <img src={epms} alt="logo" height="100px" width="100px" />
        <div>
          <p>
            <span>E-Plastic Management System</span>
            <br />A web application that resembles an idea to reduce plastic
            waste.
          </p>
          <div>
            <a
              href="https://github.com/subhanSahebShaik/epms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repository
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <div>
          <p>
            <span>Portfolio</span> <br />A website that tells about me.
          </p>
          <div>
            <a
              href="https://github.com/subhanSahebShaik/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repository
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </div>
        </div>
        <img src={name} alt="logo" />
      </div>
    </div>
  );
};

export default Projects;

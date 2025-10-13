import React from "react";
import Project1 from "../assets/fitness-hub.png";
import Project2 from "../assets/dhurata-ime.png";

const Header = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div class="project">
        <h3>Dhurata Ime</h3>
        <div class="projects-screenshot">
          <a
            href="https://github.com/ErgiBraholli/dhurata-ime"
            alt="link to github repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project2} alt="dhurata ime home page" />
          </a>
        </div>
        <p>
          A responsive e-commerce web app with clean UI. Developed using
          React.js for frontend, Express & Node.js for backend logic, and
          MongoDB for data storage.
        </p>
      </div>

      <div class="project">
        <h3>Health & Fitness Hub</h3>
        <div class="projects-screenshot">
          <a
            href="https://github.com/MarkoPapathimiu/Prozhekt"
            alt="link to github repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project1} alt="fitness hub home page" />
          </a>
        </div>
        <p>
          A multi-page fitness tracking app with a responsive layout,
          interactive workout cards, and BMI calculator.
        </p>
      </div>

      {/* To add more projects that I will create in the future. */}
    </section>
  );
};

export default Header;

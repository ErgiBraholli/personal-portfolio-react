import React from "react";
import Project1 from "../assets/fitness-hub.png";
import Project2 from "../assets/dhurata-ime.png";

const Header = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

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
          A responive website that allows users to track workouts, nutrition and
          progress.
        </p>
      </div>

      <div class="project">
        <h3>Dhurata Ime</h3>
        <div class="projects-screenshot">
          <a
            href="https://github.com/Ergi24/dhurata-ime.git"
            alt="link to github repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Project2} alt="dhurata ime home page" />
          </a>
        </div>
        <p>
          A dynamic website that allow users to make orders for Dhurata Ime
          bussines.
        </p>
      </div>
      {/* To add more projects that I will create in the future. */}
    </section>
  );
};

export default Header;

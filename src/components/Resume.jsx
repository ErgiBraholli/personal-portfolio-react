import React from "react";

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <h3>Education</h3>
      <ul>
        <li>
          BSc in Informatics and Mathematics Engineering - Universiteti i
          Tiranes (2022-2025)
        </li>
      </ul>
      {/* To fill in the future */}
      <h3>Work Experience</h3>
      <ul>
        <li>Customer Service</li>
      </ul>
      {/* To add more */}
      <h3>Skills</h3>
      <div className="skills-grid">
        <div>
          <strong>Frontend:</strong> React (Hooks, Context),
          React-Bootstrap/Bootstrap, JavaScript (ES6+), HTML5, CSS3
          (Grid/Flexbox), Responsive design
        </div>
        <div>
          <strong>Backend:</strong> Node.js, Express, REST APIs, auth &
          sessions/JWT, error handling, input validation, Data: MongoDB
          (Mongoose), SQL, (CRUD, joins basics)
        </div>
        <div>
          <strong>Tooling & Practices:</strong> Git & GitHub (branching/PRs), VS
          Code, Postman, npm/yarn, environment variables, .env workflows
        </div>
        <div>
          <strong>Other:</strong> PC troubleshooting & repairs, Photo/Video
          Editing
        </div>
      </div>
    </section>
  );
};

export default Resume;

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
        <li>-</li>
      </ul>
      {/* To add more */}
      <h3>Skills</h3>
      <div className="skills-grid">
        <div>
          <strong>Frontend:</strong> React.js (Hooks, Context),
          React-Bootstrap/Bootstrap, Tailwind CSS, JavaScript (ES6+), HTML5,
          CSS3 (Grid/Flexbox), Responsive design
        </div>
        <div>
          <strong>Backend:</strong> Node.js, Express.js, REST APIs, Auth &
          Sessions/JWT, Input validation, MongoDB (Mongoose), SQL, PostgreSQL
          CRUD
        </div>
        <div>
          <strong>Tooling & Practices:</strong> Git & GitHub (branching/PRs),
          Error handling, VS Code, Postman, npm/yarn
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

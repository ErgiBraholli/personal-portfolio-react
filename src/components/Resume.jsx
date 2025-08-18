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
          <strong>Web Dev:</strong> HTML5, CSS3, JavaScript (ES6+), Bootstrap,
          React-Bootstrap, React.js, Node.js, Express.js, REST APIs, MongoDB,
          SQL
        </div>
        <div>
          <strong>Programming:</strong> C, C#, C++, Java
        </div>
        <div>
          <strong>Tools:</strong> Git, GitHub, VS Code, Postman, npm/yarn
        </div>
        <div>
          <strong>Other:</strong> Troubleshooting, Repairs, Photo/Video Editing
        </div>
      </div>
    </section>
  );
};

export default Resume;

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

      <h3>Work Experience</h3>
      <ul>
        <li>
          MERN Full Stack Developer Internship - Dominusoft Company (October
          2025 - Present)
        </li>
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

      <h3 className="course-header">Courses & Certifications</h3>
      <div className="courses-grid">
        <a
          className="course"
          href="https://drive.google.com/file/d/1whL-Y1tcAGZbsBdzX0gKSmATLQ9uS7SZ/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="course-title">MERN Technologies</div>
          <div className="course-meta">
            Dominusoft Education · 2025 · Certificate
          </div>
        </a>

        <a
          className="course"
          href="https://www.udemy.com/certificate/UC-1f810560-c3df-4ba3-887b-795c27270bb3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="course-title">
            The Complete Full-Stack Web Development Bootcamp
          </div>
          <div className="course-meta">Udemy · 2025 · Certificate</div>
        </a>

        <a
          className="course"
          href="https://www.udemy.com/course/the-ultimate-react-course/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="course-title">
            The Ultimate React Course 2025: React, Next.js, Redux & More
          </div>
          <div className="course-meta">
            Udemy · <span className="badge">Ongoing</span>
          </div>
        </a>

        <a
          className="course"
          href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="course-title">
            Node.js, Express, MongoDB & More: The Complete Bootcamp
          </div>
          <div className="course-meta">
            Udemy · <span className="badge">Ongoing</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Resume;

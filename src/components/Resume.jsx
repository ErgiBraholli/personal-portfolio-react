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
          <strong>Frontend:</strong> React.js, JavaScript, Bootstrap, Tailwind
          CSS, HTML, CSS, Responsive and Accessible UI Design
        </div>
        <div>
          <strong>Backend:</strong> Node.js, Express.js, RESTful API, CRUD,
          Authentication & Authorization,MongoDB, SQL, PostgreSQL
        </div>
        <div>
          <strong>Tooling & Practices:</strong> Git & GitHub, Error Handling &
          Debugging, Visual Studio Code, Postman, npm & yarn
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
          href="https://portal.dominusoft.al/certification/4f3ee7e4-89bb-4fb6-8990-8d774211b790/?els=g6pQ6NFgiehBu1ZYsmDiNF/C0RXq0g/tH4KUiguS3a9U3joeRCdtpFgulEzq1uNvF4BByW4SJSY9NzLWUcCILrcLhse/NDOov6pPtED%20Q1HfuvnkXP6i4deIwX/Pzr8sEqpvWnItyhz5ze6dyLwNhzxr8M5q14oyLiyFnI/t1V/hu3c5dgser3fctWZyciUm177wcAycddM3k3UZXDmT4vYICKxcevfj3UuBS1VOnZpGK9xWiiWpjv4zyd4HntB8VWsOCxYUZA/R9NL/ZsgXlq/yoDO5Tx1g5THg30ANcdsexZsrci1c/eHnIVTMfV18Xb0E2qAZo5XjuxUrSDIPkw==&dw=0"
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

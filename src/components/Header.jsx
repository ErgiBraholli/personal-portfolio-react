import React from "react";
import Img from "../assets/ergi.jpeg";

const Header = () => {
  return (
    <section id="hero">
      <h1>Hi, I'm Ergi.</h1>
      <p>
        MERN Full Stack Developer, specialized in React.js, Node.js, Express.js,
        and MongoDB.
      </p>
      <div className="profile-pic">
        <img src={Img} alt="Portrait of Ergi" />
      </div>
    </section>
  );
};

export default Header;

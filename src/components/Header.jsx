import React from "react";
import Img from "../assets/ergi.jpeg";

const Header = () => {
  return (
    <section id="hero">
      <h1>Hi, I'm Ergi.</h1>
      <p>
        Aspiring MERN Full Stack Developer, specialising in React, Node.js,
        Express.js, and MongoDB.
      </p>
      <div className="profile-pic">
        <img src={Img} alt="ergi with a box full of cherries" />
      </div>
    </section>
  );
};

export default Header;

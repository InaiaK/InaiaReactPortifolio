import React from "react";
import PictureOfMe from "../images/inaia.jpeg";

const About = () => {
  return (
    <section className="content container">
      <div id="about" className="row">
        <img id="profile-pic" src={PictureOfMe} alt="Profile" className="col" />
        <div className="col">
          <h2>About Me</h2>
          <p className="col" id="about-text">
            I am a full stack student at University of Denver. I am trilingual
            professional ( Portuguese, English and Spanish) with background and
            experience in hospitality/tourism industry.
          </p>
          <p>
            <a
              href="https://github.com/InaiaK"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/inai%C3%A1-m-52660b16a/"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <p className="d-flex justify-content-center align-items-center"></p>
    </section>
  );
};

export default About;

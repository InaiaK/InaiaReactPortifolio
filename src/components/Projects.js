import React from "react";
import EventPicture from "../images/event.jpeg";
import NotePicture from "../images/notetaker.jpeg";
import PasswordPicture from "../images/password.jpeg";

const projectData = [
  {
    key: 1,
    id: "div1 card",
    screenshot: EventPicture,
    altText: "Event",
    title: "EventListner",
    deployed: "https://inaiak.github.io/eventListener",
    github: "https://github.com/InaiaK/eventListener",
  },
  {
    key: 2,
    id: "div2 card",
    screenshot: NotePicture,
    altText: "Note Taker",
    title: "Note Taker",
    deployed: "https://tranquil-dawn-45157.herokuapp.com/",
    github: "https://github.com/InaiaK/Note-Taker",
  },
  {
    key: 3,
    id: "div3 card",
    screenshot: PasswordPicture,
    altText: "Password",
    title: "Password Generator",
    deployed: "https://inaiak.github.io/Password-generator/",
    github: "https://github.com/InaiaK/Password-generator",
  },
  
];

const Projects = () => {
  return (
    <main>
      <section className="gridRow">
        {projectData.map(
          ({
            key,
            id,
            screenshot,
            altText,
            title,
            deployed,
            github,
          }) => {
            return (
              <div key={key} className="card">
                <img className="card-img-top" src={screenshot} alt={altText} />
                <div className="card-body">
                  <h5 className="text-center">
                    <a
                      className="card-title text-white"
                      href={deployed}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {title}
                    </a>
                  </h5>
                  <a
                    href={github}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Github Page
                  </a>
                </div>
              </div>
            );
          }
        )}
      </section>
    </main>
  );
};

export default Projects;
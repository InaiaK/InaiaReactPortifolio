import React from 'react';
import EventPic from '../images/event.jpeg';
import NotePic from '../images/notetaker.jpeg';



const styles = {
  div:{
    backgroundColor: `#ffb6c1`,
    margin:0,
  },
  heading: {
    margin:0,
    background: "black",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.5rem",
    fontStyle:"italic",
    color: "pink",
    padding: "0 20px",
    alignItems: "center",
  },
    card1: {
    fontFamily: " Gotham ",
    backgroundColor: `#ffb6c1`,
    fontSize: "1.5rem",
    height: "20rem",
    width: "25rem",
    borderStyle:"line",
    color: "black",
    padding: "3rem",
    float: "flex",
  },
  card2: {
    fontFamily: " Gotham ",
    backgroundColor: `#ffb6c1`,
    fontSize: "1.5rem",
    height: "20rem",
    width: "25rem",
    borderStyle:"line",
    color: "black",
    padding: "3rem",
    float: "flex",
  },

  img:{
    height: "15rem",
    width: "20rem",
  },
};



const portifolioData = [
  {
    id:"project1",
    image: "EventPic",
    title:"EventListner",
    link:"https://inaiak.github.io/eventListener/",
    github:"https://github.com/InaiaK/eventListener",
    alt:"eventpic"
  },
  {
    id:"project2",
    image: "NotePic",
    title:"NoteTaker",
    link:"https://tranquil-dawn-45157.herokuapp.com/",
    github:"https://github.com/InaiaK/Note-Taker",
    alt:"notepic"
  },
  {
    id:"project3",
    image: "PasswordPic",
    title:"Password",
    link:"https://inaiak.github.io/Password-generator/",
    github:"https://github.com/InaiaK/Password-generator",
    alt:"passwordpic"
  }
]

const Portifolio = () => {
  return (
    <main style={styles.card1}Portifolio>
      <section className="gridRow">
        {portifolioData.map(
          ({
            id,
            image,
            title,
            link,
            github,
            alt,
          }) => {
            return (
              <div id={id} className="card">
                <img style={styles.img}src={EventPic}  alt={alt}/>
                <div className="card-body">
                  <h5 className="text-center">
                    <a
                      className="card-title text-white"
                      href={link}
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

export default Portifolio;


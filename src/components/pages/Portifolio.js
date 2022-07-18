import React from 'react';
import Event from "../images/event.jpeg";


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
};



const portifolioData = [
  {
    id:"project1",
    image: "Event",
    title:"EventListner",
    link:"https://inaiak.github.io/eventListener/",
    github:"https://github.com/InaiaK/eventListener",
    alt:"eventpic"
  }
]

const Portifolio = () => {
  return (
    <main>
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
                <img className="card-img-top" src={image} alt={alt}/>
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

{/* export default function Portifolio() { 
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>Portifolio</h1>
    </div>
    <section className='row'>
       {projectData.map(
          ({
            id,
            image,
            title,
            link,
            github,
          }) => {
            <div id={id} className='card-img-center' src={image}/>
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
            <p className="card-text text-center">{title}</p>
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

  );
}
*/}
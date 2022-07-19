import React from "react";
import Profile from "../images/inaia.jpeg";
import '../utils/style.css';

const styles = {
  div: {
    backgroundColor: `#ffb6c1`,
    margin:0,
  },
  heading: {
    margin:0,
    background: "black",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.5rem",
    fontStyle: "italic",
    color: "pink",
    padding: "0 20px",
    alignItems: "center",
  },
  img: {
    borderRadius: 150,
    height: "20rem",
    width: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin:20,
  },
  card1: {
    fontSize: "1.5rem",
    height: "15rem",
    width: "15rem",
    borderStyle:"line",
    color: "black",
    padding: "3rem",
    float: "flex",
  },
  card2: {
    fontSize: "1.5rem",
    height: "15rem",
    width: "15rem",
    color: "black",
    padding: "3rem",
    marginLeft: 355,
    marginTop: -335,
  },
  card3: {
    fontSize: "1.5rem",
    fontFamily: "Gotham",
    height: "20rem",
    width: "30rem",
    color: "black",
    padding: "1rem",
    marginLeft: 720,
    marginTop: -305,
  },
    p: {
      fontSize: "2rem",
      fontFamily: "Gotham",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
    },
};

export default function About() {
  return (
    <div style={styles.div}>
      <h1 style={styles.heading}>About </h1> 
  
      <p style={styles.p}>    
      <img style={styles.img} src={Profile} alt="Inaia" />
               Hey there! I'm Inaia Martin. I Am A Full Stack Student At University Of
        Denver. I Am Trilingual Professional ( Portuguese, English And Spanish)
        With Background And Experience In Hospitality/Tourism Industry.
      </p>

      <div className="card1" style={styles.card1}>
        <h2 style={styles.h2}>6 Months</h2>
        <p>Fullstack Bootcamp At University Of Denver.</p>
      </div>
      <div className="card2" style={styles.card2}>
        <h2>9 Months</h2>
        <p>Codeacademy</p>
      </div>

      <div className="card3" style={styles.card3}>
        <h2 style={styles.h2}>Skills</h2>
        <p style={styles.p}>
          HTML , CSS , JavaScript , API , React.Js
          MongoDB, MySQL,
          ,Heroku, Insomnia & GitHub
          </p>
      </div>
    </div>
  );
}

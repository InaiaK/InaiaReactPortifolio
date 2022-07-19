import React from "react";
import '../utils/style.css';

const styles = {
  div:{
    backgroundColor: `#ffb6c1`,
    lineHeight: 2.5,

  },
  heading: {
    background: "black",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.5rem",
    fontStyle:"italic",
    color: "pink",
    padding: "0 20px",
    alignItems: "center",
  },
  h1: {
    fontSize: "8rem",
    fontFamily: " Gotham ",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    fontSize: "3.5rem",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:0,
  },
  img: {
    borderRadius: 150,
    height: "20rem",
    width: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function Home() {
  return (
    <div style={styles.div}>
      <div style={styles.heading}>Home</div>
      <h1 style={styles.h1}>Inaia Martin </h1>
      <p style={styles.p}>FullStack Dev.</p>
    </div>
  );
}

export default Home;

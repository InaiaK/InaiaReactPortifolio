import React from "react";


const styles = {
  div:{
    backgroundColor: `#ffb6c1`,
    display:'flex',
    flex:'wrap',
  },
  heading: {
    background: "black",
    lineHeight: 4.5,
    fontSize: "2.5rem",
    fontStyle:"italic",
    color: "pink",
    padding: "0 20px",
    alignItems: "center",
    flex:'wrap',
  },
  h1: {
    fontSize: "8rem",
    fontFamily: " Gotham ",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:120,
    flex:'wrap',
  },
  p: {
    fontSize: "3.5rem",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:65,
    flex:'wrap',
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

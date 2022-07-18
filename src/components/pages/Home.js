import React from 'react';
import Profile from "../images/inaia.jpeg";


const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '2.5rem',
    color: 'white',
    padding: '0 20px',
  },
};


function Home() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home</div>
      <h1>Inaia Martin </h1>
      <p>FullStack Dev.</p>
      <div>
      <img src={Profile} alt="Inaia"/>
    </div>
    </div>
  );
}

export default Home;


import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  p:{
    background: '#9a74db',
    fontSize: '1.2rem',
     },
     h2:{

     },
     ul:{

     },
};


export default function About() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>About </h1>
      <p style={styles.p}>
     Hey there! I'm Inaia Martin.
      I Am A Full Stack Student At University Of Denver. I Am Trilingual Professional ( Portuguese, English And Spanish) 
      With Background And Experience In Hospitality/Tourism Industry.</p>
      <h2 style={styles.h2}>6 Months</h2>
      <p>Fullstack Bootcamp At University Of Denver.</p>
      <h2>9 Months</h2>
      <p>Codeacademy</p>
      <h2>Skills</h2>
      <ul style={styles.ul}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>API</li>
        <li>React.Js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Heroku</li>
        <li>Insomnia</li>
        <li>GitHub</li>
      </ul>
    </div>
  );
}

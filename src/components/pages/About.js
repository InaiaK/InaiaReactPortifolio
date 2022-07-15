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
    

  }
};
export default function About() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>About </h1>
      <p style={styles.p}>
     Hey there! I'm Inaia Martin.
      I Am A Full Stack Student At University Of Denver. I Am Trilingual Professional ( Portuguese, English And Spanish) 
      With Background And Experience In Hospitality/Tourism Industry.
      6 Months
Fullstack Bootcamp At University Of Denver.

9 Months
Codeacademy.

FrontEnd
HTML

CSS

JavaScript

BackEnd
MySQL

MongoDB
      </p>
    </div>
  );
}

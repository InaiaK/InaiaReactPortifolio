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
};

export default function Contact() {
  return (
    <div style={styles.card}>
      
      <h1 style={styles.heading}>Contact Page</h1>
      <div class="share">
        <p>inaia5martin@gmail.com</p>
    <a href="https://github.com/InaiaK" target="_blank" class="fab fa-github">GitHub</a>
    <a href="https://www.linkedin.com/in/inai%C3%A1-m-52660b16a/" target="_blank" class="fab fa-linkedin">linkedin</a>
</div>

      
    </div>
  );
}

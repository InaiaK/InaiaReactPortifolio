import React from 'react';
import '../styles/Footer.css';



const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <header style={styles.headerStyle} className="footer">
      <h1 style={styles.headingStyle}>Footer</h1>
    </header>
  );
}

export default Footer;
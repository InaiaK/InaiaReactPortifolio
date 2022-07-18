import React from 'react';

const styles = {
  card: {
    background: "black",
    cursor:"point",
    minHeight: 20,
    lineHeight: 1.5,
    fontSize: "1.5rem",
    color: "white",
    margin:0
},
a:{
  float: "center",
  textAlign: "center",
  color: "white",
  textDecoration: "none",
}
  }
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.card}>
      <li className="nav-item">
        <a style={styles.a}
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.a}
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.a}
          href="#portifolio"
          onClick={() => handlePageChange('Portifolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portifolio' ? 'nav-link active' : 'nav-link'}
        >
          Portifolio
        </a>
      </li>
      <li className="nav-item">
        <a style={styles.a}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

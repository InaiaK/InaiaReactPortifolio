import React from "react";


function Navbar({ currentPage, changePage }) {
  return (
    <header>
      <h1 id="myName">Inaia Martin</h1>
      <h3>Full Stack Dev.</h3>
      <div className="header-right">
              <a
          className={
            currentPage === "About"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#About"
          onClick={function () {
            changePage("About");
          }}
        >
          About Me
        </a>
        <a
          className={
            currentPage === "Projects"
          }
          href="#Projects"
          onClick={function () {
            changePage("Projects");
          }}
        >
          Portfolio
        </a>
        <a
          className={
            currentPage === "Contact"
              ? "hover:opacity-75 focus:border-b"
              : "hover:opacity-75"
          }
          href="#Contact"
          onClick={function () {
            changePage("Contact");
          }}
        >
          Contact
        </a>
       
      </div>
    </header>
  );
}

export default Navbar;
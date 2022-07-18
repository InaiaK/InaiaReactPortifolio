import React, { useState } from 'react';

const styles = {
  div:{
    backgroundColor: `#ffb6c1`,
    margin:0,
  },
  heading: {
    margin:0,
    background: "black",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.5rem",
    fontStyle:"italic",
    color: "pink",
    padding: "0 20px",
    alignItems: "center",
  },
  form:{
    fontSize: "2.5rem",
    fontStyle:"italic",
    alignItems: "center",
    lineHeight: 10.5,
  }
};


function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [messageMe, setMessageMe] = useState('');

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`${firstName} ${lastName} ${messageMe}`);
    setFirstName('');
    setLastName('');
    setMessageMe('');
  };

  return (
    <div  style={styles.div}>
      <h1 style={styles.heading}>Contact </h1>
      <p>
        Hello {firstName} {lastName} {messageMe}
      </p>
      <form className="form" style={styles.form}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
          <input
          value={messageMe}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;





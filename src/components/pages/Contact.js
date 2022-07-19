import React, { useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';
import '../utils/style.css';

const styles = {
  div:{
    backgroundColor: `#ffb6c1`,
    margin:0,
  },
  heading: {
    margin:0,
    background: "black",
    minHeight: 50,
    lineHeight: 5.5,
    fontSize: "2.5rem",
    fontStyle:"italic",
    color: "pink",
    padding: "0 20px",
    alignItems: "center",
  },
  p:{
    margin:0,
    padding:0,
  },
  form:{
    background: "black",
    color: "pink",
    margin:30,
    padding:10,
    fontSize: "1.5rem",
    fontStyle:"italic",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  }
};


function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div style={styles.heading}> Contact
      <p style={styles.p}>Nice to meet you,{userName}</p>
      <form className="form" style={styles.form}>
       <input style={styles.form}
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        /> 
        <input style={styles.form}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        
        <input style={styles.form}
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button style={styles.form} type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;

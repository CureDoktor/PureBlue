import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import styles from "./SecureForm.styles.module.scss";
const SecureForm = () => {
  return (
    <div className={styles.secureInfoForm}>
      <h2>Welcome</h2>
      <h3>Let's secure your information</h3>
      <p>Create a password your medical information safe. </p>
      <div className={styles.group}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Legal First Name" />
          <input type="text" placeholder="Legal Last Name" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Email Address" />
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Phone" />
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Create Password" />
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Repeat Password" />
        </div>

        <div className={styles.checkbox}>
          <input type="radio" id="terms" />
          <label htmlFor="terms">
            I agree to terms and privacy policy and consent to telehealth
          </label>
        </div>

        <div className={styles.btnContainer}>
          <button>
            <span>Continue my visit</span>
            <img src="/assets/registerPage/share.png" alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecureForm;

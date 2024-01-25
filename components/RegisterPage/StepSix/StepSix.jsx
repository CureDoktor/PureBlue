import React, { useState } from "react";
import styles from "./StepSix.styles.module.scss";
import { Form } from "react-bootstrap";

const StepSix = ({ handleChange, formData }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible((prev) => !prev);
  };

  const handleTermsChange = () => {
    setTermsChecked((prev) => !prev);
  };

  return (
    <>
      <h1 className={styles.h1}>Create your password</h1>
      <div className={styles.inputContainer}>
        <Form.Group controlId="password" className={styles.group}>
          <Form.Control
            required
            name="password"
            type={passwordVisible ? "text" : "password"}
            onChange={handleChange}
            value={formData.password}
            placeholder="password"
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Password
          </Form.Control.Feedback>
        </Form.Group>
        <button onClick={togglePasswordVisibility}>
          {passwordVisible ? "HIDE" : "SHOW"}
        </button>
      </div>
      <h1 className={styles.h1}>Repeat your password</h1>
      <div className={styles.inputContainer}>
        <Form.Group controlId="Password-retype" className={styles.group}>
          <Form.Control
            required
            name="password_repeat"
            placeholder="password repeat"
            type={passwordVisible ? "text" : "password"}
            onChange={handleChange}
            value={formData.password_repeat}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Password Retype
          </Form.Control.Feedback>
        </Form.Group>
        <button onClick={togglePasswordVisibility}>
          {passwordVisible ? "HIDE" : "SHOW"}
        </button>
      </div>

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="termsCheckbox"
          checked={termsChecked}
          required
          onChange={handleTermsChange}
        />
        <label htmlFor="termsCheckbox">
          I agree to the terms and conditions, privacy policy, and consent to
          telehealth policy
        </label>
      </div>
    </>
  );
};

export default StepSix;

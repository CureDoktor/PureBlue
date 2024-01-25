import React from "react";
import styles from "./StepFour.styles.module.scss";
import { Form } from "react-bootstrap";
const StepFour = ({ handleChange, formData }) => {
  return (
    <>
      <h1 className={styles.h1}>What's your email address?</h1>
      <div className={styles.inputContainer}>
        <Form.Group controlId="email" className={styles.group}>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Email
          </Form.Control.Feedback>
        </Form.Group>
      </div>
    </>
  );
};

export default StepFour;

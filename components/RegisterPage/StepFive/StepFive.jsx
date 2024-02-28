import React from "react";
import styles from "./StepFive.styles.module.scss";
import { Form } from "react-bootstrap";
const StepFive = ({ handleChange, formData }) => {
  return (
    <>
      <h1 className={styles.h1}>What's your phone number?</h1>
      <div className={styles.inputContainer}>
        <Form.Group controlId="phone">
          <Form.Control
            required
            name="phone"
            type="text"
            onChange={handleChange}
            placeholder="Enter Phone Number"
            value={formData.phone}
            className={styles.formControl}
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Phone Number
          </Form.Control.Feedback>
        </Form.Group>
        <small>Just one more step!</small>
      </div>
    </>
  );
};

export default StepFive;

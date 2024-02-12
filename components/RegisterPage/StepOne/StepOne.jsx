import React from "react";
import styles from "./StepOne.styles.module.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
const StepOne = ({ handleChange, formData }) => {
  return (
    <>
      <h1 className={styles.h1}>What's your first and last name?</h1>
      <div className={styles.inputContainer}>
        <Form.Group controlId="firstName" className={styles.group}>
          <Form.Control
            required
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="First Name"
          />
          <Form.Control.Feedback type="invalid">
            Incorrect First Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="lastName" className={styles.group}>
          <Form.Control
            required
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Last Name"
          />
          <Form.Control.Feedback type="invalid">
            Incorrect Last Name
          </Form.Control.Feedback>
        </Form.Group>
      </div>
    </>
  );
};

export default StepOne;

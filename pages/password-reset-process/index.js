import React from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import { Col, Container, Button, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function PasswordResetProcess() {
  const [disabled, isDisabled] = useState(false);

  const onChange = () => {
    isDisabled(true);
  };

  const buttonChange = () => {
    if (disabled == true) {
      return <Button>Confirm</Button>;
    } else {
      return <Button disabled>Confirm</Button>;
    }
  };

  return (
    <>
      <Container className={styles.container}>
        <h2 className="text-center">Password Reset</h2>
        <Form>
          <div className={styles.reset}>
            <Form.Group as={Col} controlId="formGridFirstname">
              <p>Enter password:</p>
              <Form.Control
                type="name"
                className={styles.formControl}
                placeholder="Password"
              />
            </Form.Group>
          </div>
          <div className={styles.resetCaptcha}>
            <Form.Group as={Col} controlId="formGridFirstname">
              <p>Repeat Password</p>
              <Form.Control
                type="name"
                className={styles.formControl}
                placeholder="Email"
              />
            </Form.Group>
          </div>
          {buttonChange()}
        </Form>
      </Container>
    </>
  );
}

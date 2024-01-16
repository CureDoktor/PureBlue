import React from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import { Col, Container, Button, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

export default function PasswordReset() {
  const [disabled, isDisabled] = useState(false);

  const onChange = () => {
    isDisabled(true);
  };

  return (
    <>
      <Container className={styles.container}>
        <h2 className="text-center">Password Reset</h2>
        <Form>
          <div className={styles.reset}>
            <Form.Group as={Col} controlId="formGridFirstname">
              <p>Enter email for password recovery:</p>
              <Form.Control
                type="name"
                className={styles.formControl}
                placeholder="Email"
              />
            </Form.Group>
          </div>
          <div className={styles.resetCaptcha}>
            <Form.Group as={Col} controlId="formGridFirstname">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </Form.Group>
          </div>
          {disabled ? (
            <Button>Confirm</Button>
          ) : (
            <Button disabled>Confirm</Button>
          )}
        </Form>
      </Container>
    </>
  );
}

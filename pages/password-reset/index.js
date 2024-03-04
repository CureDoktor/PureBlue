import React from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import { Col, Container, Button, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Axios from "axios";

export default function PasswordReset(props) {
  const [disabled, isDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const router = useRouter();
  const onChange = () => {
    isDisabled(true);
  };

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const route = "/api/auth/reset-password-link";
    const payload = {
      email: formData.email,
      reset_password_url:
        "http://localhost:3000/password-reset-process?token={reset_password_token}&email={email}",
    };
    try {
      const rese = await Axios.post(route, payload)
        .then((res) => {
          setEmailSent(true);
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Email is not good!");
    }
  };

  return (
    <>
      <Container className={styles.container}>
        <h2 className="text-center">Password Reset</h2>
        {emailSent ? (
          <div className="text-center pb-5">
            <h1 className="font-bold">Email with reset link sent!</h1>
            <h4>Check your email!</h4>
            <Image src="/assets/registerPage/like.png" width={77} height={77} />
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <div className={styles.reset}>
              <Form.Group as={Col} controlId="formGridFirstname">
                <p>Enter email for password recovery:</p>
                <Form.Control
                  onChange={handleChange}
                  type="name"
                  name="email"
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
              <Button type="submit">Confirm</Button>
            ) : (
              <Button disabled>Confirm</Button>
            )}
          </Form>
        )}
      </Container>
    </>
  );
}

import React from "react";
import styles from "./styles.module.scss";
import Form from "react-bootstrap/Form";
import { Col, Container, Button, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
import Axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth-context";
import Link from "next/link";

export default function PasswordResetProcess(props) {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_repeat: "",
    password_reset_token: "",
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
    const reset_password_token = searchParams.get("token");
    const reset_password_email = searchParams.get("email");

    const route = "/api/auth/reset-password";
    const payload = {
      password: formData.password,
      password_repeat: formData.password_repeat,
      password_reset_token: reset_password_token,
      email: reset_password_email,
    };
    try {
      const rese = await Axios.post(route, payload)
        .then((res) => {
          authCtx.settingToken(res.data.data.access_token);
          props.isLoggedIn();
          router.push("/account");
        })
        .catch((error) => {
          props.handleShow(error.response.data);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Container className={styles.container}>
        <h2 className="text-center">Password Reset</h2>
        <Form onSubmit={handleSubmit}>
          <div className={styles.reset}>
            <Form.Group as={Col} controlId="formGridFirstname">
              <p>Enter password:</p>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                className={styles.formControl}
                placeholder="Password"
              />
            </Form.Group>
          </div>
          <div className={styles.resetCaptcha}>
            <Form.Group as={Col} controlId="formGridFirstname">
              <p>Repeat Password</p>
              <Form.Control
                type="password"
                name="password_repeat"
                onChange={handleChange}
                className={styles.formControl}
                placeholder="Password repeat"
              />
            </Form.Group>
          </div>
          <p>
            Not working?{" "}
            <Link
              style={{ color: "#0077f0" }}
              className={" fw-bold" + " " + styles.cursorPointer}
              href="/password-reset"
            >
              {" "}
              Try again!
            </Link>
          </p>
          <Button type="submit">Confirm</Button>
        </Form>
      </Container>
    </>
  );
}

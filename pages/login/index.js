import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import Axios from "axios";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { AccordionContext, Form } from "react-bootstrap";
export default function Home() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    passwordRetype: "",
    state: "",
    yearOfBirth: "",
  });

  // let loginInfo = [
  //   { id: 1, email: "test@test.com", password: "test" },
  //   { id: 2, email: "test2@test.com", password: "test2" },
  //   { id: 3, email: "test3@test.com", password: "test3" },
  // ];

  // const checkIfExists = async () => {
  //   // let loginUsernames = loginInfo.find((o, i) => {
  //   //   if (o.email === formData.email && o.password === formData.password) {
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  //   // });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Cure");
    const route = "/api/auth/login";
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const rese = await Axios.post(route, payload)
        .then((res) => {
          console.log(res.data.access_token);
          alert("Podaci su iznad");
        })
        .catch((error) => {
          console.log(error);
          alert("Username or password are not good!");
        });
    } catch (err) {
      alert("Username or password are not good!" + err);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.loginPage}>
        <Container>
          <div className={styles.fieldOne}>
            <Col md={{ span: 7, offset: 5 }}>
              <div className={styles.callUs}>
                <Link href="tel: 1-888-534-8977">
                  <a>
                    Call toll free to order:{" "}
                    <span className={styles.blueText}>1-888-534-8977</span>
                  </a>
                </Link>
              </div>
            </Col>
            <div className="text-center">
              <h2>Login</h2>
              <p className={styles.grayText}>
                Please fill out the following fields to login.
              </p>
              <br />
              <Link href="/register">
                <a>
                  You don't have account?
                  <span className={styles.blueText}> Register Now</span>
                </a>
              </Link>
              <br />
              <br />
            </div>
            <Col md={{ span: 6, offset: 3 }}>
              <div className={styles.formField}>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Enter email"
                        value={formData.email}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        Incorrect Email
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <br />
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="password">
                      <Form.Label className={styles.label}>Password</Form.Label>
                      <Form.Control
                        required
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={formData.password}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        Incorrect Password
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <br />
                  <br />
                  <Button
                    variant="primary"
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Login
                  </Button>
                  <p className="text-center pt-4 pb-4">OR</p>
                  <Button
                    variant="primary"
                    className={styles.continueWithGoogle}
                    type="submit"
                  >
                    Continue with Google
                  </Button>
                </Form>
              </div>
            </Col>
          </div>
        </Container>
      </main>
    </div>
  );
}

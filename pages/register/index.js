import Head from "next/head";
import Link from "next/link";
import { useContext, useState, React } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Check, PatchCheck } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { Form } from "react-bootstrap";
import Axios from "axios";
import AuthContext from "../../store/auth-context";
import Router, { useRouter } from "next/router";

export default function Register(props) {
  const router = useRouter();
  const authCtx = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_repeat: "",
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

    const route = "/api/auth/register";
    const payload = {
      email: formData.email,
      password: formData.password,
      password_repeat: formData.password_repeat,
    };
    if (formData.password === formData.password_repeat) {
      try {
        const rese = await Axios.post(route, payload)
          .then((res) => {
            props.isLoggedIn();
            authCtx.settingToken(res.data.access_token);
            router.push("/visit-form");
          })
          .catch((error) => {
            const cure = error.response.data.errors;
            const rest = Object.values(cure);
            var values = "";
            rest.map((element) => {
              values = values + element + " ";
            });
            alert(values);
          });
      } catch (err) {
        alert("Username or password are not good!" + err);
      }
    } else {
      alert("Passwords doesn't match!");
    }

    event.preventDefault();
  };

  const gender = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Pure Blue - Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.registerPage}>
        <Container>
          <div className={styles.fieldOne}>
            <Col md={{ span: 7, offset: 5 }}>
              <div className={styles.callUs}>
                <Link href="tel: 1-866-453-6143">
                  <a>
                    Call toll free to order:{" "}
                    <span className={styles.blueText}>1-866-453-6143</span>
                  </a>
                </Link>
              </div>
            </Col>
            <div className="text-center">
              <h2>Welcome to PureBlue!</h2>
              <p className={styles.grayText}>
                No waiting rooms. No expensive doctors visits. Prescription
                treatments sent to your door, discreetly. This is the future of
                tele-medicine.
              </p>
              <p className={styles.member}>
                Already a member?{" "}
                <Link href="/login">
                  <a>
                    <span className={styles.blueText}>Log in</span>
                  </a>
                </Link>
              </p>
            </div>
            <Col md={{ span: 7, offset: 5 }}>
              <div className={styles.formField}>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group controlId="email" className={styles.group}>
                      <Form.Label className={styles.label}>Email</Form.Label>
                      <Form.Control
                        required
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={formData.email}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        Incorrect Email
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      controlId="password"
                      className={styles.group}
                    >
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
                    <Form.Group
                      as={Col}
                      controlId="Password-retype"
                      className={styles.group}
                    >
                      <Form.Label className={styles.label}>
                        Password Retype
                      </Form.Label>
                      <Form.Control
                        required
                        name="password_repeat"
                        type="password"
                        onChange={handleChange}
                        value={formData.passwordRetype}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        Incorrect Password Retype
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        className={styles.formControl}
                        value={formData.state}
                        name="state"
                        onChange={handleChange}
                      >
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="Year-of-birth"
                      className={styles.group}
                    >
                      <Form.Label className={styles.label}>
                        Year of Birth
                      </Form.Label>
                      <Form.Control
                        required
                        name="yearOfBirth"
                        type="number"
                        onChange={handleChange}
                        value={formData.yearOfBirth}
                        className={styles.formControl}
                      />
                      <Form.Control.Feedback type="invalid">
                        Incorrect Year of Birth
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row> */}
                  {/* <Form.Label>Gender</Form.Label>
                  <Row>
                    {gender.map((radio, idx) => (
                      <Col key={idx} xs={3}>
                        <ToggleButton
                          id={`radio-${idx}`}
                          type="radio"
                          name="radio"
                          className={styles.buttons}
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                          {radio.name}
                        </ToggleButton>
                      </Col>
                    ))}
                  </Row> */}
                  <br />
                  <br />
                  <br />
                  <br />

                  <Button
                    variant="primary"
                    className={styles.submitBtn}
                    type="submit"
                  >
                    Sign Up
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

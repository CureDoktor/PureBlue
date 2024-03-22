import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import { ClockFill, Check } from "react-bootstrap-icons";

import Link from "next/router";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function FirstLastName({ setContent }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function containsNumbers(inputString) {
    return /\d/.test(inputString);
  }

  const submitForm = (event) => {
    event.preventDefault();
    if (formData.firstName !== "" && formData.lastName !== "") {
      if (
        containsNumbers(formData.firstName) ||
        containsNumbers(formData.lastName)
      ) {
        alert("Fields cannot contain numbers!");
      } else {
        localStorage.setItem("firstName", formData.firstName);
        localStorage.setItem("lastName", formData.lastName);
        setContent(3);
      }
    } else {
      alert("Please fill out the fields!");
    }
  };
  return (
    <div className={styles.container}>
      <Form onSubmit={submitForm}>
        <div>
          <h3 className={styles.h3}>What’s your first name and last name?</h3>
          <br />
          <Row>
            <Col md={6}>
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
            </Col>
            <Col md={6}>
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
            </Col>
          </Row>
          <br />
          <Button type="submit" className={styles.button}>
            {" "}
            Next <Check />
          </Button>
        </div>
      </Form>
    </div>
  );
}

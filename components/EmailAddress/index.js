import styles from "./styles.module.scss";
import LegitScriptCertificate from "../LegitScriptCertificate";
import { Container, Image, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { ClockFill, Check } from "react-bootstrap-icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Link from "next/router";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";

export default function EmailAddress({ props, setContent }) {
  console.log(props);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
  });

  const checkingEmail = async (event) => {
    var email = event.email;
    const route = "/api/auth/validate-email";
    try {
      const rese = await Axios.post(route, { email: email })
        .then((res) => {
          localStorage.setItem("email", email);
          setContent(2);
        })
        .catch((error) => {
          props.props.handleShow(error.response.data);
        });
    } catch (err) {
      alert("Something went wrong!" + err);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.h3}>What’s your email address?</h3>
        <p>We need this to provide more personalized treatment options</p>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={checkingEmail}
        >
          {({ isSubmitting }) => (
            <Form style={{ width: "100%" }}>
              <Field
                type="email"
                name="email"
                className={styles.email}
                placeholder="Email Address"
              />
              <div name="email" className={styles.ErrorMessage}>
                <ErrorMessage name="email" />
              </div>
              <br />
              <Button type="submit" className={styles.button}>
                {" "}
                Next <Check />
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

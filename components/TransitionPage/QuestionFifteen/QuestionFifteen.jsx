import React from "react";
import styles from "./QuestionFifteen.styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { searchParamsUrl } from "../../searchParams";

const QuestionFifteen = ({ onNext, handleChange }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
  });

  return (
    <div className={styles.container}>
      <h6>Time to celebrate!</h6>
      <p>
        You are eligible for <br /> telehealth treatment
      </p>
      <span>
        Now, we just need you to complete a super quick 3-minute <br /> health
        questionnaire about your symptoms and medical history.
      </span>
      <p className={styles.promise}>
        (We promise - It’s seriously only 3 minutes)
      </p>
      <Formik
        initialValues={{
          email: localStorage.getItem("email")
            ? localStorage.getItem("email")
            : "",
        }}
        validationSchema={validationSchema}
        onSubmit={onNext}
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
            <button className={styles.continue} type="submit">
              Continue
            </button>
          </Form>
        )}
      </Formik>
      <p className={styles.signIn}>
        Already have an account?{" "}
        <Link href={"/login" + searchParamsUrl()} style={{ color: "blue" }}>
          Sign In
        </Link>
      </p>
      <p className={styles.privacy}>
        We take your privacy very seriously.
        <br /> All your data is 256 bit SSL/TLS encrypted.
        <span>
          <img
            src="/assets/transitionPage/log/log.png"
            className={styles.logButton}
          />
        </span>
      </p>
    </div>
  );
};

export default QuestionFifteen;

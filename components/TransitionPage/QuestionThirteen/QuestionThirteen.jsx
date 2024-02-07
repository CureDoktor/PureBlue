import React, { useState } from "react";
import styles from "./QuestionThirteen.styles.module.scss";
import { thirteenQuestionDropDown } from "../data";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const QuestionThirteen = ({ onNext }) => {
  const validationSchema = Yup.object().shape({
    state: Yup.string().required("Please select a state"),
    checkbox: Yup.bool().oneOf(
      [true],
      "You must acknowledge the Terms and Conditions"
    ),
  });

  const Continue = (values) => {
    console.log("Validated successfully");
    onNext();
  };

  return (
    <div className={styles.container}>
      <button>Your $30 off promo code has been applied!</button>
      <p className={styles.heading}>
        Let’s make sure telehealth treatments are <br /> allowed in your state
      </p>
      <p className={styles.subHeading}>Select your state</p>
      <Formik
        initialValues={{ state: "", checkbox: false }}
        validationSchema={validationSchema}
        onSubmit={Continue}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.selectContainer}>
              <Field as="select" name="state" className={styles.select}>
                <option value="" disabled selected>
                  Select a state
                </option>
                {thirteenQuestionDropDown.map((items) => {
                  const { name } = items;
                  return <option key={name}>{name}</option>;
                })}
              </Field>

              <span name="state" className={styles.ErrorMessage}>
                <ErrorMessage name="state" />
              </span>
            </div>
            <div className={styles.checkBox}>
              <label>
                <Field type="checkbox" name="checkbox" />
                <span>
                  I acknowledge the Terms and Conditions, Privacy Policy, and
                  Telehealth Consent.
                </span>
              </label>
              <span name="checkbox" className={styles.ErrorMessage}>
                <ErrorMessage name="checkbox" />
              </span>
            </div>
            <button className={styles.continue} type="submit">
              Continue
            </button>
            <p className={styles.signIn}>
              Already have an account? <span>Sign In</span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuestionThirteen;

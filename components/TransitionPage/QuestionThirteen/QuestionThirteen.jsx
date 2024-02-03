import React, { useState } from "react";
import styles from "./QuestionThirteen.styles.module.scss";
import { thirteenQuestionDropDown } from "../data";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const QuestionThirteen = ({ onNext }) => {
  const validationSchema = Yup.object().shape({
    state: Yup.string().required("Please select a state"),
  });

  const Continue = (values) => {
    console.log("Validated successfully");
    onNext();
  };

  return (
    <div className={styles.container}>
      <button>Your $30 off promo code has been applied!</button>
      <h6>Let’s make sure telehealth treatments are allowed in your state</h6>
      <p>Select your state</p>
      <Formik
        initialValues={{ state: "" }}
        validationSchema={validationSchema}
        onSubmit={Continue}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <Field as="select" name="state">
              {thirteenQuestionDropDown.map((items) => {
                const { name } = items;
                return <option key={name}>{name}</option>;
              })}
            </Field>
            <span name="state" className={styles.ErrorMessage}>
              <ErrorMessage name="state" />
            </span>
            <div className={styles.checkBox}>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <p htmlFor="vehicle1">
                I acknowledge the Terms and Conditions, Privacy Policy, and
                Telehealth Consent.
              </p>
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

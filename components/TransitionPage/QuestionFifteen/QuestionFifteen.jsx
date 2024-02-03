import React from "react";
import styles from "./QuestionFifteen.styles.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const QuestionFifteen = ({ onNext }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  return (
    <div className={styles.container}>
      <h6>Time to celebrate!</h6>
      <p>You are eligible for telehealth treatment</p>
      <h5>
        Now, we just need you to complete a super quick 3-minute health
        questionnaire about your symptoms and medical history.
      </h5>
      <p className={styles.promise}>
        (We promise - It’s seriously only 3 minutes)
      </p>
      <Formik
        initialValues={{ email: "" }}
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
            <span name="email" className={styles.ErrorMessage}>
              <ErrorMessage name="email" />
            </span>
            <button className={styles.continue} type="submit">
              Continue
            </button>
          </Form>
        )}
      </Formik>
      <p className={styles.signIn}>
        Already have an account? <span>Sign In</span>
      </p>
      <p className={styles.privacy}>
        We take your privacy very seriously.
        <br /> All your data is 256 bit SSL/TLS encrypted.
      </p>
    </div>
  );
};

export default QuestionFifteen;

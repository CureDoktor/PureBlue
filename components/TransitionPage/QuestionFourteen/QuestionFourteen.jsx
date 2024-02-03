import React from "react";
import styles from "./QuestionFourteen.styles.module.scss";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const QuestionFourteen = ({ onNext }) => {
  const validationSchema = Yup.object().shape({
    dob: Yup.date().required("Date of Birth is required"),
  });

  return (
    <div className={styles.container}>
      <h6>Great news! Telehealth treatment is available in (your state)!</h6>
      <p>Let’s confirm your date of birth</p>
      <Formik
        initialValues={{ dob: "" }}
        validationSchema={validationSchema}
        onSubmit={onNext}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <Field type="date" name="dob" className={styles.date} />
            <span name="dob" className={styles.ErrorMessage}>
              <ErrorMessage name="dob" />
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
    </div>
  );
};

export default QuestionFourteen;

import React from "react";
import styles from "./QuestionFourteen.styles.module.scss";
import { Formik, Field, ErrorMessage, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const QuestionFourteen = ({ onNext, handleChange }) => {
  const validationSchema = Yup.object().shape({
    date_of_birth: Yup.date().required("Date of Birth is required"),
  });

  return (
    <div className={styles.container}>
      <h6>
        Great news! Telehealth treatment is available <br />
        in (your state)!
      </h6>
      <p>
        Let’s confirm your <br /> date of birth
      </p>
      <Formik
        initialValues={{ date_of_birth: "" }}
        validationSchema={validationSchema}
        onSubmit={onNext}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%" }}>
            <Field type="date" name="date_of_birth" className={styles.date} />
            <div name="date_of_birth" className={styles.ErrorMessage}>
              <ErrorMessage name="date_of_birth" />
            </div>
            <button className={styles.continue} type="submit">
              Continue
            </button>
          </Form>
        )}
      </Formik>
      <p className={styles.signIn}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "blue" }}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default QuestionFourteen;

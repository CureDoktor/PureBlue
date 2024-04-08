import React from "react";
import styles from "./QuestionFourteen.styles.module.scss";
import { Formik, Field, ErrorMessage, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { searchParamsUrl } from "../../searchParams";

const QuestionFourteen = ({ onNext, handleChange, preferredState }) => {
  const validationSchema = Yup.object().shape({
    date_of_birth: Yup.date().required("Date of Birth is required"),
  });

  const validate = (value) => {
    let errorMessage;

    // Check if the input follows the date format MM/DD/YYYY or YYYY-MM-DD
    if (
      !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(value) &&
      !/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(value)
    ) {
      errorMessage = "Invalid date format. Please use or MM/DD/YYYY";
    } else {
      // Extract the year part from the input
      const year = value.split("/")[2] || value.split("-")[0];
      // Check if the year is more than 4 digits
      if (year.length > 4) {
        errorMessage = "Invalid year. Please input a valid 4-digit year";
      }
    }

    const [year, month, day] = value.split("-").map(Number);

    const userDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    // Check if the user is at least 18 years old
    if (
      currentDate.getFullYear() - userDate.getFullYear() < 18 ||
      (currentDate.getFullYear() - userDate.getFullYear() === 18 &&
        (currentDate.getMonth() < userDate.getMonth() ||
          (currentDate.getMonth() === userDate.getMonth() &&
            currentDate.getDate() < userDate.getDate())))
    ) {
      errorMessage = "You must be at least 18 years old";
    }

    // Check if the year is more than 4 digits
    if (year.toString().length > 4) {
      errorMessage = "Invalid year. Please input a valid 4-digit year";
    }
    return errorMessage;
  };

  return (
    <div className={styles.container}>
      <h6>
        Great news! Telehealth treatment is available <br />
        in {preferredState}!
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
            <Field
              type="date"
              name="date_of_birth"
              //onChange={validate}
              validate={validate}
              className={styles.date}
            />
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
        <Link href={"/login" + searchParamsUrl()} style={{ color: "blue" }}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default QuestionFourteen;

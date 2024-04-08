import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./QuestionSixteen.styles.module.scss";
import Link from "next/link";
import * as Yup from "yup";
import { searchParamsUrl } from "../../searchParams";

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is Required"),
});

const QuestionSixteen = ({ onNext, submitForm }) => {
  return (
    <Formik
      initialValues={{ password: "", password_repeat: "" }}
      validationSchema={PasswordSchema}
      onSubmit={submitForm}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container}>
          <h6>One last step!</h6>
          <p>Create password</p>
          <Field
            type="password"
            name="password"
            className={styles.password}
            placeholder="Password"
          />
          <span name="password" className={styles.ErrorMessage}>
            <ErrorMessage name="password" />
          </span>
          <Field
            type="password"
            name="password_repeat"
            className={styles.password}
            placeholder="Password Repeat"
          />
          <span name="password_repeat" className={styles.ErrorMessage}>
            <ErrorMessage name="password_repeat" />
          </span>
          <p className={styles.account}>
            Creating an account allows you to keep track of your orders, <br />
            payment information, and medical profile (or if you need to make{" "}
            <br />
            changes in the future).
          </p>
          <button type="submit" className={styles.continue}>
            Continue
          </button>
          <p className={styles.signIn}>
            Already have an account?{" "}
            <Link href={"/login" + searchParamsUrl()} style={{ color: "blue" }}>
              Sign In
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionSixteen;

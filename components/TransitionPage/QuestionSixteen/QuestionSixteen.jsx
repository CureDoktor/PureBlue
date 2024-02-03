import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./QuestionSixteen.styles.module.scss";
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const QuestionSixteen = ({ onNext }) => {
  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={PasswordSchema}
      onSubmit={onNext}
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
          <p className={styles.account}>
            Creating an account allows you to keep track of your orders, payment
            information, and medical profile (or if you need to make changes in
            the future).
          </p>
          <button type="submit" className={styles.continue}>
            Continue
          </button>
          <p className={styles.signIn}>
            Already have an account? <span>Sign In</span>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default QuestionSixteen;

import React from "react";
import styles from "./QuestionSixteen.styles.module.scss";

const QuestionSixteen = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <h6>One last step!</h6>
      <p>Create password</p>
      <input type="password" className={styles.email} placeholder="Password" />
      <p className={styles.account}>
        Creating an account allows you to keep track of your orders, payment
        information, and medical profile (or if you need to make changes in the
        future).
      </p>
      <button className={styles.continue} onClick={onNext}>
        Continue
      </button>
      <p className={styles.signIn}>
        Already have an account? <span>Sign In</span>
      </p>
    </div>
  );
};

export default QuestionSixteen;

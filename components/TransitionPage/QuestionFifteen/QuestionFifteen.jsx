import React from "react";
import styles from "./QuestionFifteen.styles.module.scss";

const QuestionFifteen = ({ onNext }) => {
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
      <input
        type="email"
        className={styles.email}
        placeholder="Email Address"
      />
      <button className={styles.continue} onClick={onNext}>
        Continue
      </button>
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

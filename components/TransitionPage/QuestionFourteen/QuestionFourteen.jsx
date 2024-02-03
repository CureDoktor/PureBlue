import React from "react";
import styles from "./QuestionFourteen.styles.module.scss";
import { thirteenQuestionDropDown } from "../data";

const QuestionFourteen = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <h6>Great news! Telehealth treatment is available in (your state)!</h6>
      <p>Let’s confirm your date of birth</p>
      <input type="date" className={styles.date} />
      <button className={styles.continue} onClick={onNext}>
        Continue
      </button>
      <p className={styles.signIn}>
        Already have an account? <span>Sign In</span>
      </p>
    </div>
  );
};

export default QuestionFourteen;

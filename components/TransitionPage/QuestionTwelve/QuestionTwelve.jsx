import React from "react";
import styles from "./QuestionTwelve.styles.module.scss";

const QuestionTwelve = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <p>We're on it</p>
      <h4>Let's help you find the right treatment</h4>
      <img
        src="/assets/transitionPage/Treatment/Treatment.png"
        className={styles.image}
        onClick={onNext}
      />
    </div>
  );
};

export default QuestionTwelve;

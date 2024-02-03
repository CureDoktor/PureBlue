import React from "react";
import styles from "./QuestionNine.styles.module.scss";

const QuestionNine = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <p>You're not alone</p>
      <h4>40% of men experience Symptoms like this by age 40</h4>
      <img
        src="/assets/transitionPage/tablet.svg"
        className={styles.image}
        onClick={onNext}
      />
    </div>
  );
};

export default QuestionNine;

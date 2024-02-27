import React from "react";
import styles from "./QuestionNine.styles.module.scss";

const QuestionNine = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <p>You're not alone</p>
      <p className={styles.heading}>
        40% of men experience <br /> Symptoms like this by age 40
      </p>
      <img
        src="/assets/transitionPage/tablet.svg"
        className={styles.image}
        onClick={onNext}
      />
    </div>
  );
};

export default QuestionNine;

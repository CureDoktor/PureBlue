import React from "react";
import styles from "./QuestionTen.styles.module.scss";

const QuestionTen = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <p>The good news</p>
      <h4>PureBlue can help</h4>
      <img
        src="/assets/transitionPage/heart/Help.png"
        className={styles.image}
        onClick={onNext}
      />
    </div>
  );
};

export default QuestionTen;

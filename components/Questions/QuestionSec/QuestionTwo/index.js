import React, { useState } from "react";
import styles from "./styles.module.scss";
const QuestionTwo = ({ para }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.questionTwo}>
      <p>{para}</p>
      <div className={styles.radioSection}>
        <div
          className={`${styles.customRadioButton} ${
            isChecked ? styles.checked : ""
          }`}
          onClick={handleButtonClick}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>Yes</span>
        </div>
        <div
          className={`${styles.customRadioButton} ${
            isChecked ? styles.checked : ""
          }`}
          onClick={handleButtonClick}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>No</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionTwo;

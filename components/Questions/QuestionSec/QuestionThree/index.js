import React, { useState } from "react";
import styles from "./styles.module.scss";
const QuestionThree = ({ para, btn1, btn2, btn3 }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.questionThree}>
      <p>{para}</p>
      <div className={styles.radioSection}>
        <div
          className={`${styles.customRadioButton} ${
            isChecked ? styles.checked : ""
          }`}
          onClick={handleButtonClick}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>{btn1}</span>
        </div>
        <div
          className={`${styles.customRadioButton} ${
            isChecked ? styles.checked : ""
          }`}
          onClick={handleButtonClick}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>{btn2}</span>
        </div>
        <div
          className={`${styles.customRadioButton} ${
            isChecked ? styles.checked : ""
          }`}
          onClick={handleButtonClick}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>{btn3}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionThree;

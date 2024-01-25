import React, { useState } from "react";
import styles from "./styles.module.scss";

const QuestionThree = ({ para, btn1, btn2, btn3 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (index) => {
    // If the clicked button is already selected, deselect it
    if (index === selectedOption) {
      setSelectedOption(null);
    } else {
      // Otherwise, select the clicked button
      setSelectedOption(index);
    }
  };

  return (
    <div className={styles.questionThree}>
      <p>{para}</p>
      <div className={styles.radioSection}>
        <div
          className={`${styles.customRadioButton} ${
            selectedOption === 0 ? styles.checked : ""
          }`}
          onClick={() => handleButtonClick(0)}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>{btn1}</span>
        </div>
        <div
          className={`${styles.customRadioButton} ${
            selectedOption === 1 ? styles.checked : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>{btn2}</span>
        </div>
        <div
          className={`${styles.customRadioButton} ${
            selectedOption === 2 ? styles.checked : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>{btn3}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionThree;

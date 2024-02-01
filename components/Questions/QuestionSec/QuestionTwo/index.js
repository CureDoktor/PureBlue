import React, { useState } from "react";
import styles from "./styles.module.scss";

const QuestionTwo = ({ para, handleNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = (index) => {
    if (index === selectedOption) {
      setSelectedOption(null);
    } else {
      setSelectedOption(index);
    }
  };

  return (
    <div className={styles.questionTwo}>
      <p>{para}</p>
      <div className={styles.radioSection}>
        <div
          className={`${styles.customRadioButton} ${
            selectedOption === 0 ? styles.checked : ""
          }`}
          onClick={() => handleNext()}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>Yes</span>
        </div>
        <div
          className={`${styles.customRadioButton} ${
            selectedOption === 1 ? styles.checked : ""
          }`}
          onClick={() => handleNext()}
        >
          <span className={styles.radioButton}></span>
          <span className={styles.buttonLabel}>No</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionTwo;

import React, { useState } from "react";
import styles from "./styles.module.scss";

const QuestionSix = ({ para, btnArray, type, handleNext }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = (index) => {
    if (type === "textAreaTwo") {
      // Toggle the selected options for textAreaTwo section
      const updatedOptions = [...selectedOptions];

      if (updatedOptions.includes(index)) {
        // If the option is already selected, deselect it
        updatedOptions.splice(updatedOptions.indexOf(index), 1);
      } else {
        // If the option is not selected, select it
        updatedOptions.push(index);
      }

      setSelectedOptions(updatedOptions);
    } else {
      // Toggle the selected option for other sections
      const updatedOptions = selectedOptions.includes(index)
        ? [] // Deselect if already selected
        : [index]; // Select if not selected

      setSelectedOptions(updatedOptions);
    }
  };

  return (
    <div className={styles.questionSix}>
      <p>{para}</p>
      {type === "textArea" ? (
        <div className={styles.textArea}>
          <div
            className={`${styles.questionSec} ${
              selectedOptions.includes(0) && styles.checked
            }`}
            onClick={() => handleNext()}
          >
            <span className={styles.radio}></span>
            <span className={styles.option}>If none, click here</span>
          </div>

          <textarea></textarea>
        </div>
      ) : type === "textAreaTwo" ? (
        <div className={styles.textArea}>
          <div
            className={`${styles.questionSec} ${
              selectedOptions.includes(0) && styles.checked
            }`}
            onClick={() => handleNext()}
          >
            <span className={styles.radio}></span>
            <span className={styles.option}>If none, click here</span>
          </div>

          <textarea></textarea>

          <div
            className={`${styles.questionSec} ${
              selectedOptions.includes(1) && styles.checked
            }`}
            onClick={() => handleNext()}
          >
            <span className={styles.radio}></span>
            <span className={styles.option}>
              I agree to the <span>Terms & Conditions</span>,
              <span>Privacy</span>, and I consent to a Telehealth visit.
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.radioSection}>
          {btnArray.map(({ id, btn }, index) => (
            <div
              key={id}
              className={`${styles.customRadioButton} ${
                selectedOptions.includes(index) && styles.checked
              }`}
              onClick={() => handleNext()}
            >
              <span className={styles.radioButton}></span>
              <span
                className={styles.buttonLabel}
                style={{
                  fontWeight:
                    (btn === "None of the above" ||
                      btn === "None" ||
                      btn === "I have NOT had any of the above") &&
                    "bold",
                }}
              >
                {btn}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionSix;

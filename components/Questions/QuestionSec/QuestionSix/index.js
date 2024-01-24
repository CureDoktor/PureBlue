import React, { useState } from "react";
import styles from "./styles.module.scss";
const QuestionSix = ({ para, btnArray }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleButtonClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={styles.questionSix}>
      <p>{para}</p>
      <div className={styles.radioSection}>
        {btnArray.map(({ id, btn }) => (
          <div
            key={id}
            className={`${styles.customRadioButton} ${
              isChecked ? styles.checked : ""
            }`}
            onClick={handleButtonClick}
          >
            <span className={styles.radioButton}></span>
            <span
              className={styles.buttonLabel}
              style={{
                fontWeight:
                  (btn == "None of the above" ||
                    btn == "None" ||
                    btn == "I have NOT had any of the above") &&
                  "bold",
              }}
            >
              {btn}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSix;

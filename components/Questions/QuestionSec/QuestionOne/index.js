import React, { useState } from "react";
import styles from "./styles.module.scss";
import InputMask from "react-input-mask";

const QuestionOne = ({ value, setValue, setIsEmpty, isEmpty }) => {
  // const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const handleInput = (event) => {
    let val = event.target.value;

    if (val.length === 2 || val.length === 5) {
      val += "-";
    }

    setValue(val);
    setIsEmpty(!val);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  return (
    <div className={styles.questionOne}>
      <p>
        <span>Birthday* </span>
        (ID verified after checkout)
      </p>
      <div className={styles.inputContainer}>
        <label
          htmlFor="birthday"
          className={isFocus ? styles.smallVisibleLabel : styles.visibleLabel}
        >
          MM-DD-YYYY
        </label>
        <InputMask
          mask="99-99-9999"
          value={value}
          onChange={handleInput}
          placeholder="__-__-____"
          className={styles.hiddenInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {(inputProps) => <input {...inputProps} />}
        </InputMask>
      </div>
      {isEmpty && <p style={{ color: "red" }}>Please fill the date</p>}
    </div>
  );
};

export default QuestionOne;

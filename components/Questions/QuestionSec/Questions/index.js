import React, { useState } from "react";
import styles from "./styles.module.scss";
import InputMask from "react-input-mask";
const Questions = ({
  question,
  options,
  handleNext,
  type,
  value,
  setValue,
  setIsEmpty,
  isEmpty,
  title,
  alert,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const handleButtonClick = (index) => {
    if (index === selectedOption) {
      setSelectedOption(null);
    } else {
      setSelectedOption(index);
    }
  };

  const handleButtonClick2 = (index) => {
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

  const RadioButton = ({ selected, handleNext, option }) => (
    <div
      className={`${styles.customRadioButton} ${
        selected === 0 && styles.checked
      }`}
      onClick={handleNext}
    >
      <span className={styles.radioButton}></span>
      <span className={styles.buttonLabel}>{option}</span>
    </div>
  );

  return (
    <>
      <div className={styles.mainContainer}>
        {type == "row" && (
          <div className={styles.questionTwo}>
            <p>{question}</p>
            <div className={styles.radioSection}>
              {options.map((option, index) => (
                <RadioButton
                  key={index}
                  selected={selectedOption}
                  handleNext={handleNext}
                  option={option.option}
                />
              ))}
            </div>
          </div>
        )}
        {type == "column" && (
          <div className={styles.questionThree}>
            <p>{question}</p>
            <div className={styles.radioSection}>
              {options.map((option, index) => (
                <RadioButton
                  key={index}
                  selected={selectedOption}
                  handleNext={handleNext}
                  option={option.option}
                />
              ))}
            </div>
          </div>
        )}

        {type === "textArea" && (
          <div className={styles.questionSix}>
            <p>{question}</p>
            <div className={styles.textArea}>
              <div
                className={`${styles.questionSec} ${
                  selectedOptions.includes(0) && styles.checked
                }`}
                onClick={() => handleNext()}
              >
                <span className={styles.radioButton}></span>
                <span className={styles.option}>If none, click here</span>
              </div>

              <textarea></textarea>
            </div>
          </div>
        )}
        {type === "textAreaTwo" && (
          <div className={styles.questionSix}>
            <p>{question}</p>
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
          </div>
        )}

        {type === "multiple" && (
          <div className={styles.questionSix}>
            <p>{question}</p>
            <div className={styles.radioSection}>
              {options.map(({ id, option }, index) => (
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
                        (option === "None of the above" ||
                          option === "None" ||
                          option === "I have NOT had any of the above") &&
                        "bold",
                    }}
                  >
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "input" && (
          <div className={styles.questionOne}>
            <p>
              <span>{title}* </span>
              {alert && `(${alert})`}
            </p>
            <div className={styles.inputContainer}>
              <label
                htmlFor="birthday"
                className={
                  isFocus ? styles.smallVisibleLabel : styles.visibleLabel
                }
              >
                {label}
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
        )}
      </div>
    </>
  );
};

export default Questions;

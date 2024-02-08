import React, { useState } from "react";
import styles from "./styles.module.scss";
import InputMask from "react-input-mask";
const Questions = ({
  questionId,
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
  let obj = {};
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  if (options) {
    for (const i of options) {
      obj = { ...obj, [i]: "" };
    }
  }
  const [formData, setFormData] = useState(obj);

  const handleBtn = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleButtonClick2 = (index) => {
    if (type === "textAreaTwo") {
      const updatedOptions = [...selectedOptions];
      if (updatedOptions.includes(index)) {
        updatedOptions.splice(updatedOptions.indexOf(index), 1);
      } else {
        updatedOptions.push(index);
      }

      setSelectedOptions(updatedOptions);
    } else {
    }
    const updatedOptions = selectedOptions.includes(index) ? [] : [index];
    setSelectedOptions(updatedOptions);
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

  const RadioButton = ({ option: o, index }) => {
    return (
      <div
        className={`${styles.customRadioButton} ${
          (selectedOption === index ||
            (selectedOption === null && formData[o] === 1)) &&
          styles.checked
        }`}
        onClick={() => {
          if (
            selectedOption === index ||
            (selectedOption === null && formData[o] === 1)
          ) {
            handleBtn(o, null);
            setSelectedOption(null);
          } else {
            const newValue = formData[o] === 1 ? 0 : 1;
            handleBtn(o, newValue);
            setSelectedOption(index);
          }
        }}
      >
        <span className={styles.radioButton}></span>
        <span className={styles.buttonLabel}>{o}</span>
      </div>
    );
  };
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
                  handleButtonClick={handleBtn}
                  handleNext={handleNext}
                  option={option.option}
                  index={index}
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
                  handleButtonClick={handleBtn}
                  handleNext={handleNext}
                  option={option.option}
                  index={index}
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
                  selectedOptions.includes(1) && styles.checked
                }`}
                onClick={() => {
                  handleButtonClick2(1);
                }}
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
                onClick={() => {
                  handleButtonClick2(0);
                }}
              >
                <span className={styles.radio}></span>
                <span className={styles.option}>If none, click here</span>
              </div>

              <textarea></textarea>

              <div
                className={`${styles.questionSec} ${
                  selectedOptions.includes(1) && styles.checked
                }`}
                onClick={() => {
                  handleButtonClick2(1);
                }}
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
                    formData[option] && styles.checked
                  }`}
                  onClick={() => {
                    handleBtn(option, id);
                  }}
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

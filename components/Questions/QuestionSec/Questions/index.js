import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import InputMask from "react-input-mask";
const Questions = ({
  questionId,
  value,
  setValue,
  setIsEmpty,
  isEmpty,
  setIsValid,
  isValid,
  handleFormData,
  formData,
  currentQuestion,
  handleNext,
  setIsNextDisabled,
}) => {
  const { question, options, type, title, alert, label } = currentQuestion;

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const handleToggle = (index) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(index)
        ? prevOptions.filter((item) => item !== index)
        : [...prevOptions, index]
    );
  };
  const handleInput = (event) => {
    let val = event.target.value;
    if (val.length === 2 || val.length === 5) {
      val += "-";
    }

    const currentDate = new Date();
    const inputDate = new Date(val);

    if (inputDate.toString() === "Invalid Date" || inputDate > currentDate) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setValue(val);
    setIsEmpty(!val);

    handleFormData(`q${questionId + 1}`, val);
  };

  const handleBlur = () => setIsFocus(false);
  const handleFocus = () => setIsFocus(true);

  useEffect(() => {
    if (!value) {
      setIsValid(false);
    }
  }, [isValid]);

  const RadioButton = ({ option: o }) => {
    return (
      <div
        className={`${styles.customRadioButton} ${
          Array.isArray(formData[`q${questionId + 1}`]) &&
          formData[`q${questionId + 1}`].some((opt) => opt.id === o.id) &&
          styles.checked
        }`}
        onClick={() => {
          handleFormData(`q${questionId + 1}`, o);
          handleNext();
        }}
      >
        <span className={styles.radioButton}></span>
        <span className={styles.buttonLabel}>{o.option}</span>
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
                <RadioButton key={index} option={option} />
              ))}
            </div>
          </div>
        )}
        {type == "column" && (
          <div className={styles.questionThree}>
            <p>{question}</p>
            <div className={styles.radioSection}>
              {options.map((option, index) => (
                <RadioButton key={index} option={option} />
              ))}
            </div>
          </div>
        )}

        {type === "textArea" && (
          <div className={styles.questionSix}>
            <p>{question}</p>
            <div className={styles.textArea}>
              {options.map((option) => {
                return (
                  <div>
                    <div
                      className={`${styles.questionSec} ${
                        Array.isArray(formData[`q${questionId + 1}`]) &&
                        formData[`q${questionId + 1}`].some(
                          (o) => o.id === option.id
                        ) &&
                        styles.checked
                      }`}
                      onClick={() => {
                        handleFormData(`q${questionId + 1}`, option);
                        handleNext();
                      }}
                    >
                      <span className={styles.radioButton}></span>
                      <span className={styles.option}>{option.option}</span>
                    </div>

                    <textarea></textarea>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {type === "textAreaTwo" && (
          <div className={styles.questionSix}>
            <p>{question}</p>

            <div className={styles.textArea}>
              {options.map((option) => {
                return (
                  <div>
                    <div
                      className={`${styles.questionSec} ${
                        Array.isArray(formData[`q${questionId + 1}`]) &&
                        formData[`q${questionId + 1}`].some(
                          (o) => o.id === option.id
                        ) &&
                        styles.checked
                      }`}
                      onClick={() => {
                        handleFormData(`q${questionId + 1}`, option);
                      }}
                    >
                      <span className={styles.radio}></span>
                      <span className={styles.option}>{option.option}</span>
                    </div>

                    <textarea></textarea>

                    <div
                      className={`${styles.questionSec} ${
                        selectedOptions.includes(1) && styles.checked
                      }`}
                      onClick={() => handleToggle(1)}
                    >
                      <span className={styles.radio}></span>
                      <span className={styles.option}>
                        I agree to the <span>Terms & Conditions</span>,
                        <span>Privacy</span>, and I consent to a Telehealth
                        visit.
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {type === "multiple" && (
          <div className={styles.questionSix}>
            <p>{question}</p>
            <div className={styles.radioSection}>
              {options.map(({ id, option }) => (
                <div
                  key={id}
                  className={`${styles.customRadioButton} ${
                    Array.isArray(formData[`q${questionId + 1}`]) &&
                    formData[`q${questionId + 1}`].some((o) => o.id === id) &&
                    styles.checked
                  }`}
                  onClick={() => {
                    const updatedOptions = Array.isArray(
                      formData[`q${questionId + 1}`]
                    )
                      ? [...formData[`q${questionId + 1}`]]
                      : [];

                    const existingOption = updatedOptions.find(
                      (o) => o.id === id
                    );

                    if (existingOption) {
                      updatedOptions.splice(
                        updatedOptions.indexOf(existingOption),
                        1
                      );
                    } else {
                      updatedOptions.push({ id, option });
                    }

                    handleFormData(`q${questionId + 1}`, updatedOptions);
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
            {isValid && <p style={{ color: "red" }}>Invalid Date</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default Questions;

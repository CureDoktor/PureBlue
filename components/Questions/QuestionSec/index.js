import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Questions from "./Questions";
import { questions } from "./mockdata/questionsArray";
const QuestionSec = ({
  totalSteps,
  setProgress,
  currentStep,
  setCurrentStep,
}) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem("value");
      return savedValue || "";
    }
    return "";
  });
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", currentStep);
      localStorage.setItem("value", value);
    }
  }, [currentStep, value]);

  useEffect(() => {
    const calculatedProgress = (currentStep / totalSteps) * 100;
    setProgress(calculatedProgress);
  }, [currentStep, totalSteps]);

  const handleNext = () => {
    if (value.length == "") {
      setIsEmpty(true);
      return;
    }

    if (currentStep === totalSteps - 1) {
      setCurrentStep(0);
      if (typeof window !== "undefined") {
        localStorage.setItem("currentStep", 0);
      }
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };
  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderQuestion = () => {
    const currentQuestion = questions.find((q) => q.id === currentStep);
    if (currentQuestion) {
      if (currentQuestion.question) {
        return (
          <Questions
            question={currentQuestion.question.question}
            questionId={currentQuestion.id}
            options={currentQuestion.question.options}
            handleNext={handleNext}
            type={currentQuestion.question.type}
            title={currentQuestion.question.title}
            alert={currentQuestion.question.alert}
            label={currentQuestion.question.label}
            value={value}
            setValue={setValue}
            setIsEmpty={setIsEmpty}
            isEmpty={isEmpty}
          />
        );
      }
    }
    return null;
  };

  return (
    <div className={styles.mainContainer}>
      {renderQuestion()}
      <div
        className={`
          ${styles.btnContainer}
          ${currentStep === totalSteps - 1 && styles.submitBtn}
        `}
      >
        {currentStep > 0 && currentStep !== totalSteps - 1 && (
          <button onClick={handleBack}>
            <img src="/assets/questions/backArrow.png" alt="back" />
            <span>Back</span>
          </button>
        )}
        {(currentStep == 0 || currentStep == 14 || currentStep == 15) && (
          <button className={styles.nextBtn} onClick={handleNext}>
            <span>Next</span>
            <img src="/assets/questions/forwardArrow.png" alt="next" />
          </button>
        )}
        <div style={{ margin: "auto" }}>
          {currentStep === totalSteps - 1 && (
            <button className={styles.submitBtn} onClick={handleNext}>
              <span>Submit</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionSec;

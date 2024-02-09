import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Questions from "./Questions";
import { questions } from "./mockdata/questionsArray";
import { useRouter } from "next/navigation";
const QuestionSec = ({
  totalSteps,
  setProgress,
  currentStep,
  setCurrentStep,
}) => {
  const router = useRouter();
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem("value");
      return savedValue || "";
    }
    return "";
  });
  const [isEmpty, setIsEmpty] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

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
  const [formData, setFormData] = useState(() => {
    const obj = {};
    for (let i = 0; i < questions.length; i++) {
      const key = `q${i + 1}`;
      if (questions[i].question.type === "multiple") {
        obj[key] = [];
      } else {
        obj[key] = "";
      }
    }
    return obj;
  });

  const handleFormData = (key, value) => {
    setFormData((prev) => {
      if (Array.isArray(prev[key])) {
        const updatedValue = Array.isArray(value)
          ? value.filter((item) => Object.keys(item).length > 0)
          : value;
        const newFormData = { ...prev, [key]: updatedValue };

        const isDisabled =
          newFormData[key] === "" ||
          (Array.isArray(newFormData[key]) && newFormData[key].length === 0);

        setIsNextDisabled(isDisabled);

        return newFormData;
      } else {
        const newFormData = { ...prev, [key]: [value] };

        const isDisabled = newFormData[key] === "";

        setIsNextDisabled(isDisabled);

        return newFormData;
      }
    });
  };

  const handleNext = () => {
    const currentDate = new Date();
    const inputDate = new Date(value);

    if (value.length === "") {
      setIsEmpty(true);
      return;
    } else if (
      inputDate.toString() === "Invalid Date" ||
      inputDate > currentDate
    ) {
      setIsValid(true);
      return;
    }
    setIsValid(false);

    const currentQuestion = questions.find((q) => q.id === currentStep);
    const { type } = currentQuestion.question;

    if (type === "multiple" || type === "input") {
      const formDataForCurrentQuestion = formData[`q${currentStep + 1}`];
      if (
        formDataForCurrentQuestion === "" ||
        (Array.isArray(formDataForCurrentQuestion) &&
          formDataForCurrentQuestion.length === 0)
      ) {
        setIsNextDisabled(true);
        return;
      }
    }

    if (!isNextDisabled) {
      if (currentStep === totalSteps - 1) {
        setCurrentStep(0);
        if (typeof window !== "undefined") {
          localStorage.setItem("currentStep", 0);
        }
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  useEffect(() => {
    if (!isNextDisabled) {
      handleNext();
    }
  }, [isNextDisabled]);

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleClose = () => {
    router.push("/");
    setCurrentStep(0);
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", 0);
      localStorage.setItem("value", "");
    }
  };
  const renderNextButton = () => {
    const currentQuestion = questions.find((q) => q.id === currentStep);
    if (currentQuestion && currentQuestion.question) {
      const { type } = currentQuestion.question;
      if (type == "multiple" || type === "input") {
        return (
          <button
            className={styles.nextBtn}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <span>Next</span>
            <img src="/assets/questions/forwardArrow.png" alt="next" />
          </button>
        );
      }
    }
    return null;
  };

  const renderQuestion = () => {
    const currentQuestion = questions.find((q) => q.id === currentStep);
    if (currentQuestion) {
      if (currentQuestion.question) {
        return (
          <Questions
            currentQuestion={currentQuestion.question}
            questionId={currentQuestion.id}
            handleNext={handleNext}
            value={value}
            setValue={setValue}
            setIsEmpty={setIsEmpty}
            handleFormData={handleFormData}
            formData={formData}
            isEmpty={isEmpty}
            setIsValid={setIsValid}
            isValid={isValid}
            setIsNextDisabled={setIsNextDisabled}
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
        {renderNextButton()}
        <div style={{ margin: "auto" }}>
          {currentStep === totalSteps - 1 && (
            <button className={styles.submitBtn} onClick={handleClose}>
              <span>Submit</span>
            </button>
          )}
        </div>
      </div>
      {currentStep < totalSteps - 1 && isNextDisabled && (
        <p style={{ color: "red" }} className="my-5">
          Please make a selection before proceeding
        </p>
      )}
    </div>
  );
};

export default QuestionSec;

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Questions from "./Questions";
import { questions } from "./mockdata/questionsArray";

import styles from "./styles.module.scss";

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
  const [terms, setTerms] = useState(false);
  const [termError, setTermsError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(false);

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

  useEffect(() => {
    if (selectedOptions) {
      setTerms(true);
      setTermsError(false);
    }
  }, [selectedOptions]);

  const handleToggle = () => {
    setSelectedOptions((prevSelectedOptions) => !prevSelectedOptions);
  };

  const handleFormData = (key, value) => {
    setFormData((prev) => {
      const isArray = Array.isArray(prev[key]);
      const updatedValue = isArray
        ? Array.isArray(value)
          ? value.filter((item) => Object.keys(item).length > 0)
          : value
        : value;

      const newFormData = { ...prev, [key]: updatedValue };
      const isDisabled =
        newFormData[key] === "" || (isArray && newFormData[key].length === 0);

      setIsNextDisabled(isDisabled);

      if (!isArray && prev[key] === value) {
        setIsNextDisabled(true);
        newFormData[key] = "";
      }

      return newFormData;
    });
  };

  const handleNext = () => {
    if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
      setIsEmpty(true);
      return;
    } else if (isValid) {
      return;
    }
    const { type } = currentQuestion.question;
    if (type === "multiple") {
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
    if (!isNextDisabled && value !== "") {
      if (currentStep === totalSteps - 1) {
        setCurrentStep(0);
        if (typeof window !== "undefined") {
          localStorage.setItem("currentStep", 0);
        }
      } else {
        localStorage.setItem("currentStep", currentStep + 1);
        localStorage.setItem("value", value);
        setCurrentStep((prevStep) => prevStep + 1);
        const calculatedProgress = (currentStep / totalSteps) * 100;
        setProgress(calculatedProgress);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleClose = () => {
    if (!terms) {
      setTermsError(true);
    } else {
      setTermsError(false);
      setCurrentStep(0);
      localStorage.setItem("currentStep", 0);
      localStorage.setItem("value", "");
      router.push("/");
    }
  };

  const renderNextButton = () => {
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
            setTerms={setTerms}
            setTermsError={setTermsError}
          />
        );
      }
    }
    return null;
  };

  const currentQuestion = questions.find((q) => q.id === currentStep);

  return (
    <div className={styles.mainContainer}>
      {renderQuestion()}
      {currentStep < totalSteps - 1 &&
        isNextDisabled &&
        currentQuestion &&
        currentQuestion.question &&
        currentQuestion.question.type === "multiple" && (
          <p className={`${styles.red} my-5`}>
            Please make a selection before proceeding
          </p>
        )}
      <div
        className={`${styles.btnContainer} ${
          currentStep === totalSteps - 1 && styles.submitBtn
        }
        `}
      >
        {currentStep > 0 && currentStep !== totalSteps - 1 && (
          <button onClick={handleBack}>
            <img src="/assets/questions/backArrow.png" alt="back" />
            <span>Back</span>
          </button>
        )}
        {renderNextButton()}
        {currentStep === totalSteps - 1 && (
          <div className="">
            <div
              className={`${styles.terms} ${selectedOptions && styles.checked}`}
              onClick={handleToggle}
            >
              <span className={styles.radio}></span>
              <span className={styles.option}>
                I agree to the <span>Terms & Conditions</span>,
                <span>Privacy</span>, and I consent to a Telehealth visit.
              </span>
            </div>
            {currentStep === totalSteps - 1 && termError && (
              <p className={`${styles.red} my-2`}>
                Kindly accept our Terms and Conditions before proceeding.
              </p>
            )}
          </div>
        )}
        <div style={{ margin: "auto" }}>
          {currentStep === totalSteps - 1 && (
            <button className={styles.submitBtn} onClick={handleClose}>
              <span>Submit</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionSec;

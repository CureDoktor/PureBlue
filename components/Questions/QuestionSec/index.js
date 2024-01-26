import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import QuestionOne from "./QuestionOne";
import QuestionTwo from "./QuestionTwo";
import QuestionThree from "./QuestionThree";
import QuestionSix from "./QuestionSix";
import {
  btnSixArr,
  btnSixArr2,
  btnSixArr3,
  btnSixArr4,
  btnSixArr5,
  btnSixArr6,
  btnSixArr7,
  btnSixArr8,
} from "./questionArrays";
const QuestionSec = ({
  totalSteps,
  setProgress,
  currentStep,
  setCurrentStep,
}) => {
  const [value, setValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", currentStep);
    }
  }, [currentStep]);

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
    switch (currentStep) {
      case 0:
        return (
          <QuestionOne
            value={value}
            setValue={setValue}
            setIsEmpty={setIsEmpty}
            isEmpty={isEmpty}
          />
        );
      case 1:
        return (
          <QuestionTwo para="Are you seeking treatment to help obtain or maintain an erection?" />
        );
      case 2:
        return (
          <QuestionThree
            para="How concerned are you about this problem?"
            btn1="Very"
            btn2="Somewhat"
            btn3="Not at all"
          />
        );
      case 3:
        return (
          <QuestionThree
            para="How concerned are you about this problem?"
            btn1="0-6 months"
            btn2="6-12 months"
            btn3="More than 1 year"
          />
        );
      case 4:
        return (
          <QuestionTwo
            para="Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, 
        blood pressure, and heart rate."
          />
        );
      case 5:
        return (
          <QuestionSix
            para="Do you have any of the following HIGH RISK criteria:"
            btnArray={btnSixArr}
          />
        );
      case 6:
        return (
          <QuestionSix
            para="How concerned are you about this problem?"
            btnArray={btnSixArr2}
          />
        );
      case 7:
        return (
          <QuestionSix
            para="Do you have any of the following HIGH RISK criteria:"
            btnArray={btnSixArr3}
          />
        );
      case 8:
        return (
          <QuestionSix
            para="What is your blood pressure on an average day (even when taking medication)?"
            btnArray={btnSixArr4}
          />
        );
      case 9:
        return (
          <QuestionTwo para="Within the past 6 months, have you had a heart attack or cardiac surgery?" />
        );
      case 10:
        return (
          <QuestionSix
            para="Have you ever had any physical abnormalities with your genitals?"
            btnArray={btnSixArr5}
          />
        );
      case 11:
        return (
          <QuestionSix
            para="Do you have any of the following?"
            btnArray={btnSixArr6}
          />
        );
      case 12:
        return (
          <QuestionSix
            para="Have you done any of the following recreational drugs in the past 3 months? Please note: death can result if ED meds are used in conjunction with recreational drugs."
            btnArray={btnSixArr7}
          />
        );
      case 13:
        return (
          <QuestionSix
            para={`Do you take any of the following medications?
           Please note: death can result if ED medications are used in conjunction with nitrates (often prescribed for chest pain/angina) or other medications. Please be accurate.`}
            btnArray={btnSixArr8}
          />
        );
      case 14:
        return (
          <QuestionSix
            para={`Please list ALL prescription medications you are taking or are currently prescribed. Include all over the counter medications, vitamins, minerals, or supplements:`}
            type="textArea"
          />
        );
      case 15:
        return (
          <QuestionSix
            para={`Please list all allergies to medications, dyes, or anything else. If none, write “NONE”`}
            type="textArea"
          />
        );
      case 16:
        return (
          <QuestionTwo para="Are you seeking treatment to help obtain or maintain an erection?" />
        );
      case 17:
        return (
          <QuestionSix
            para={`Is there anything else you would like us to know? Please include any questions, comments, or concerns.`}
            type="textAreaTwo"
          />
        );

      default:
        return null;
    }
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
        {currentStep < totalSteps - 1 && (
          <button className={styles.nextBtn} onClick={handleNext}>
            <span>Next</span>
            <img src="/assets/questions/forwardArrow.png" alt="next" />
          </button>
        )}

        {currentStep === totalSteps - 1 && (
          <button className={styles.submitBtn} onClick={handleNext}>
            <span>Submit</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionSec;

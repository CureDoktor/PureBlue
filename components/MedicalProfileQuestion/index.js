import React, { useEffect, useState } from "react";

import Stepper from "./stepper";
import ProgressBar from "./ProgressBar";
import QuestionSec from "./QuestionSec";
import { questions } from "./QuestionSec/mockdata/questionsArray";

import styles from "./styles.module.scss";

const MedicalProfileQuestion = () => {
  const totalSteps = questions.length;

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const savedStep = localStorage.getItem("currentStepTwo");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Stepper completedSteps={currentStep} />
      {currentStep === 17 && (
        <div className={styles.headingContainer}>
          <p>
            <span>STEP 2: </span>Complete Health Questionnaire
          </p>
          <h5>
            Your order WILL NOT ship without completing health questionnaire
          </h5>
        </div>
      )}
      <ProgressBar
        totalSteps={totalSteps}
        currentStep={currentStep}
        progress={progress}
      />
      <QuestionSec
        totalSteps={totalSteps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        setProgress={setProgress}
      />
    </div>
  );
};

export default MedicalProfileQuestion;

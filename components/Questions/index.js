import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Stepper from "./stepper";
import ProgressBar from "./ProgressBar";
import QuestionSec from "./QuestionSec";

const Question = () => {
  const totalSteps = 18;
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      return savedStep ? parseInt(savedStep, 10) : 0;
    }
    return 1;
  });
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      if (savedStep) {
        setCurrentStep(parseInt(savedStep, 10));
      }
    }
  }, []);

  if (!hasMounted) {
    return null;
  }
  console.log(currentStep);

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

export default Question;

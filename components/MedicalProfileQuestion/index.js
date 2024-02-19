import React, { useEffect, useState } from "react";
import Consultation from "../../pages/consultation/Consultation";
import Stepper from "./stepper";
import ProgressBar from "./ProgressBar";
import QuestionSec from "./QuestionSec";
import { questions } from "./QuestionSec/mockdata/questionsArray";
import { useRouter } from "next/router";
import { useConsultationContext } from "../../store/consultation-context";
import styles from "./styles.module.scss";

const MedicalProfileQuestion = (props) => {
  const { questions } = useConsultationContext() || {};
  const { main, total } = questions;
  const router = useRouter();
  const questionId = parseInt(router.query?.question) || "";
  const [totalSteps, setTotalSteps] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const savedStep = localStorage.getItem("currentStepTwo");
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <Stepper total={total} completedSteps={questionId} />
        {currentStep === total && (
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
          totalSteps={total}
          currentStep={questionId}
          progress={progress}
        />
        {/* <QuestionSec
          totalSteps={totalSteps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setProgress={setProgress}
        /> */}
      </div>
      <Consultation
        props={props}
        setTotalSteps={setTotalSteps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalSteps={totalSteps}
        setProgress={setProgress}
        progress={progress}
      />
    </div>
  );
};

export default MedicalProfileQuestion;

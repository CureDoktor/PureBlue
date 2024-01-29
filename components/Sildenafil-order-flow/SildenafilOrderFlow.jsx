import React, { useState, useEffect } from "react";
import styles from "./SildenafilOrderFlow.styles.module.scss";
import StepOne from "../Sildenafil-order-flow/StepOne";
import StepTwo from "../Sildenafil-order-flow/StepTwo";
import StepThree from "../Sildenafil-order-flow/StepThree";
import StepFour from "../Sildenafil-order-flow/StepFour";
import StepFive from "../Sildenafil-order-flow/StepFive";
import StepSix from "../Sildenafil-order-flow/StepSix";
import StepSeven from "../Sildenafil-order-flow/StepSeven";
import StepEight from "../Sildenafil-order-flow/StepEight";
import StepSeventeen from "../Sildenafil-order-flow/StepSeventeen";
import Thankyou from "../Thankyou/Thankyou";
// import StepEighteen from "./StepEighteen";

const SildenafilOrderFlow = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      return savedStep ? parseInt(savedStep, 10) : 1;
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", currentStep);
    }
  }, [currentStep]);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={goToNextStep} />;
      case 2:
        return <StepTwo onNext={goToNextStep} />;
      case 3:
        return <StepThree onNext={goToNextStep} />;
      case 4:
        return <StepFour onNext={goToNextStep} />;
      case 5:
        return <StepFive onNext={goToNextStep} />;
      case 6:
        return <StepSix onNext={goToNextStep} />;
      case 7:
        return <StepSeven onNext={goToNextStep} />;
      case 8:
        return <StepEight onNext={goToNextStep} />;
      case 9:
        return <StepSeventeen onNext={goToNextStep} />;
      case 10:
        return <Thankyou onNext={goToNextStep} />;
      default:
        return <div>Process Completed</div>;
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.mainContainer}>
      {currentStep !== 1 && currentStep !== 10 && (
        <div className={styles.imageContainer} onClick={goToPreviousStep}>
          <img
            src="/assets/sildenafilOrderFlow/Back2/Back2.png"
            alt="Go back"
            width={40}
          />
        </div>
      )}
      <section className={styles.content}>
        <div className={styles.txtContainer}>{renderStep()}</div>
      </section>
    </div>
  );
};

export default SildenafilOrderFlow;

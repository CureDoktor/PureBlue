import React, { useState, useEffect } from "react";
import styles from "./SildenafilOrderFlow.styles.module.scss";
import StepOne from "../Sildenafil-order-flow/StepOne";
import StepTwo from "../Sildenafil-order-flow/StepTwo";
import StepFour from "../Sildenafil-order-flow/StepFour";
import StepFive from "../Sildenafil-order-flow/StepFive";
import StepSeventeen from "../Sildenafil-order-flow/StepSeventeen";
// import StepEighteen from "./StepEighteen";

const SildenafilOrderFlow = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("currentStep");
      return savedStep ? parseInt(savedStep, 10) : 1;
    }
    return 1;
  });
  const [hasMounted, setHasMounted] = useState(false); // New state to track mounting

  useEffect(() => {
    setHasMounted(true); // Set to true once component mounts
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
        return <div onClick={goToNextStep}>Loading</div>;
      case 4:
        return <StepFour onNext={goToNextStep} />;
      case 5:
        return <StepFive onNext={goToNextStep} />;
      // ... add other cases for steps 3, 4, ..., 17
      case 17:
        return <StepSeventeen onNext={goToNextStep} />;
      // Add additional cases as needed
      default:
        return <div>Process Completed</div>;
    }
  };

  // Only render the component once it has mounted to ensure client-side execution
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer} onClick={goToPreviousStep}>
        <img src="/assets/sildenafilOrderFlow/Back2/Back2.png" />
      </div>
      <section className={styles.content}>
        <div className={styles.txtContainer}>{renderStep()}</div>
      </section>
    </div>
  );
};

export default SildenafilOrderFlow;

{
  /* <StepSeventeen /> */
}
{
  /* <StepEighteen /> */
}
{
  /* {progress >= 0 && progress <= 16.67 && <StepOne />} */
}
{
  /* {progress > 16.67 && progress <= 33.34 && <StepTwo />}
{progress > 33.34 && progress <= 50.01005 && <StepThree />}
{progress > 50.01005 && progress <= 66.68 && <StepFour />}
{progress > 66.68 && progress <= 83.35001 && <StepFive />}
{progress > 83.35001 && <StepSix />} */
}

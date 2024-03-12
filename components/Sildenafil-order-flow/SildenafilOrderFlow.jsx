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

const SildenafilOrderFlow = (props) => {
  const [initialRender, setInitialRender] = useState(true);
  const [product, setProduct] = useState({
    daily: false,
    viagra: false,
    times_per_month: 4,
  });
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

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return; // Skip the effect on initial render
    }
    goToNextStep();
  }, [product]);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const goToPreviousStep = () => {
    if (currentStep == 6 && localStorage.getItem("daily") == "true") {
      setCurrentStep((prevStep) => prevStep - 2);
    } else {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            product={product}
            onNext={goToNextStep}
            setProduct={setProduct}
          />
        );
      case 2:
        return (
          <StepTwo
            product={product}
            setProduct={setProduct}
            onNext={goToNextStep}
          />
        );
      case 3:
        return <StepThree onNext={goToNextStep} />;
      case 4:
        return <StepFour product={product} onNext={goToNextStep} />;
      case 5:
        if (localStorage.getItem("viagra") == "true") {
          return (
            <StepFive
              onNext={goToNextStep}
              product={product}
              setProduct={setProduct}
            />
          );
        } else {
          return (
            <StepSix
              onNext={goToNextStep}
              product={product}
              setProduct={setProduct}
            />
          );
        }
      case 6:
        return <StepSeven props={props} onNext={goToNextStep} />;
      case 7:
        return (
          <StepEight props={props} product={product} onNext={goToNextStep} />
        );
      case 8:
        return <StepSeventeen onNext={goToNextStep} />;
      case 9:
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
      <div className={styles.subMainContainer}>
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
    </div>
  );
};

export default SildenafilOrderFlow;

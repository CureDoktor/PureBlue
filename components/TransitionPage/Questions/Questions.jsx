import { useState, useEffect } from "react";
import styles from "./Questions.styles.module.scss";
import QuestionEight from "../QuestionEight/QuestionEight";
import QuestionNine from "../QuestionNine";
import QuestionTen from "../QuestionTen";
import QuestionEleven from "../QuestionEleven";
import QuestionTwelve from "../QuestionTwelve";
import QuestionThirteen from "../QuestionThirteen/QuestionThirteen";
import QuestionFourteen from "../QuestionFourteen/QuestionFourteen";
import QuestionFifteen from "../QuestionFifteen";
import QuestionSixteen from "../QuestionSixteen";

const Questions = () => {
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <QuestionEight onNext={goToNextStep} />;
      case 2:
        return <QuestionNine onNext={goToNextStep} />;
      case 3:
        return <QuestionTen onNext={goToNextStep} />;
      case 4:
        return <QuestionEleven onNext={goToNextStep} />;
      case 5:
        return <QuestionTwelve onNext={goToNextStep} />;
      case 6:
        return <QuestionThirteen onNext={goToNextStep} />;
      case 7:
        return <QuestionFourteen onNext={goToNextStep} />;
      case 8:
        return <QuestionFifteen onNext={goToNextStep} />;
      case 9:
        return <QuestionSixteen onNext={goToNextStep} />;
      default:
        return <div>Process Completed</div>;
    }
  };

  // if (!hasMounted) {
  //   return null;
  // }
  return <div className={styles.mainContainer}>{renderStep()}</div>;
};

export default Questions;

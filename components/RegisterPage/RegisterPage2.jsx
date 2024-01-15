import { useState } from "react";
import styles from "./RegisterPage2.styles.module.scss";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

const RegisterPage2 = () => {
  const [progress, setProgress] = useState(16.67);
  const handleProgress = () => {
    const newProgress = progress + 16.67;
    setProgress(Math.min(newProgress, 100));
  };
  return (
    <div className={styles.mainContainer}>
      <section className={styles.content}>
        <div className={styles.progressBarContainer}>
          <div
            className={`${styles.progressBar} ${
              progress === 100 && styles.completed
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.txtContainer}>
          {progress >= 0 && progress <= 16.67 && <StepOne />}
          {progress > 16.67 && progress <= 33.34 && <StepTwo />}
          {progress > 33.34 && progress <= 50.01005 && <StepThree />}
          {progress > 50.01005 && progress <= 66.68 && <StepFour />}
          {progress > 66.68 && progress <= 83.35001 && <StepFive />}
          {progress > 83.35001 && <StepSix />}

          <div className={styles.btnContainer}>
            <button onClick={handleProgress}>
              Continue
              <img src="/assets/right-arrow.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage2;

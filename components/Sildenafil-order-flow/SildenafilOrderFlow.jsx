import { useState } from "react";
import styles from "./SildenafilOrderFlow.styles.module.scss";
import StepOne from "../Sildenafil-order-flow/StepOne";
import StepSeventeen from "../Sildenafil-order-flow/StepSeventeen";

const SildenafilOrderFlow = () => {
  const [progress, setProgress] = useState(16.67);
  const handleProgress = () => {
    const newProgress = progress + 16.67;
    setProgress(Math.min(newProgress, 100));
  };
  return (
    <div className={styles.mainContainer}>
      <section className={styles.content}>
        <div className={styles.txtContainer}>
          <StepOne />
          {/* <StepSeventeen /> */}
        </div>
      </section>
    </div>
  );
};

export default SildenafilOrderFlow;

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

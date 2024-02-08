import React from "react";
import styles from "./styles.module.scss";

const ProgressBar = ({ currentStep, totalSteps, progress }) => {
  return (
    <div className={styles.container}>
      <h1>Please Complete your Medical Profile</h1>
      <div className={styles.progressBarContainer}>
        <div
          className={`${styles.progressBar} ${
            progress === 100 && styles.completed
          }`}
          style={{ width: `${progress}%`, fontSize: "9px", paddingTop: "2px" }}
        >
          {currentStep} of {totalSteps}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

import React from "react";
import styles from "./StepFour.styles.module.scss";
const StepFour = () => {
  return (
    <>
      <h1 className={styles.h1}>What's your email address?</h1>
      <div className={styles.inputContainer}>
        <input type="text" />
      </div>
    </>
  );
};

export default StepFour;

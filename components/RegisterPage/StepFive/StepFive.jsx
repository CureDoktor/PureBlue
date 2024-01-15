import React from "react";
import styles from "./StepFive.styles.module.scss";
const StepFive = () => {
  return (
    <>
      <h1 className={styles.h1}>What's your phone number?</h1>
      <div className={styles.inputContainer}>
        <input type="text" />
        <small>Just one more step!</small>
      </div>
    </>
  );
};

export default StepFive;

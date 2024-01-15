import React from "react";
import styles from "./StepOne.styles.module.scss";
const StepOne = () => {
  return (
    <>
      <h1 className={styles.h1}>What's your first and last name?</h1>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
    </>
  );
};

export default StepOne;

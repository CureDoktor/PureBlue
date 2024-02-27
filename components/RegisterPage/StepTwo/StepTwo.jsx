import React from "react";
import styles from "./StepTwo.styles.module.scss";
const StepTwo = ({ handleChange, formData }) => {
  return (
    <>
      <h1 className={styles.h1}>Which state do you live in?</h1>
      <div className={styles.inputContainer}>
        <input type="text" />
        <small>
          (to see if your state qualifies for telehealth medication)
        </small>
      </div>
    </>
  );
};

export default StepTwo;

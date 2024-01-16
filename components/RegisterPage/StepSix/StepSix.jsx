import React, { useState } from "react";
import styles from "./StepSix.styles.module.scss";

const StepSix = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleTermsChange = () => {
    setTermsChecked((prev) => !prev);
  };

  return (
    <>
      <h1 className={styles.h1}>Create your password</h1>
      <div className={styles.inputContainer}>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
        />
        <button onClick={togglePasswordVisibility}>
          {passwordVisible ? "HIDE" : "SHOW"}
        </button>
      </div>
      <h1 className={styles.h1}>Repeat your password</h1>
      <div className={styles.inputContainer}>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
        />
        <button onClick={togglePasswordVisibility}>
          {passwordVisible ? "HIDE" : "SHOW"}
        </button>
      </div>

      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id="termsCheckbox"
          checked={termsChecked}
          onChange={handleTermsChange}
        />
        <label htmlFor="termsCheckbox">
          I agree to the terms and conditions, privacy policy, and consent to
          telehealth policy
        </label>
      </div>
    </>
  );
};

export default StepSix;

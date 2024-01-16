import React, { useState } from "react";
import styles from "./StepThree.styles.module.scss";
const StepThree = () => {
  const [val, setVal] = useState("New York");
  return (
    <>
      <h1 className={styles.h1}>Which state do you live in?</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <img src="/assets/registerPage/checkMark.png" alt="check" />
      </div>
      <div className={styles.news}>
        <img src="/assets/registerPage/like.png" alt="" />
        <h4>Great news!</h4>
        <h6>Your state qualifies for telehealth treatment!</h6>
      </div>
    </>
  );
};

export default StepThree;

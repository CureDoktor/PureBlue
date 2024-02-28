import React from "react";
import styles from "./StepFour.styles.module.scss";

const StepFour = ({ onNext, product }) => {
  return (
    <div className={styles.mainContainer}>
      <h6>
        Based on your selection, a daily{" "}
        {!product.viagra ? "tadalafil" : "sildenafil"} <br />
        treatment sounds like the most
        <br /> appropriate option for you:
      </h6>
      <div className={styles.mainBigCard}>
        <div className={styles.bigCardContainer}>
          <div className={styles.bigCardTextContainer}>
            <span className={styles.tablet}>Tablet</span>
            <span className={styles.bigCardMainHeading}>
              {!product.viagra ? "Generic Cialis®" : "Generic Viagra"}
            </span>
            <span className={styles.bigCardSubHeading}>
              {!product.viagra ? "Tadalafil" : "Sildenafil"}
            </span>
          </div>
          <img
            src={
              !product.viagra
                ? "/assets/sildenafilOrderFlow/Group289/Group289.png"
                : "/assets/sildenafilOrderFlow/PureBlue1.png"
            }
            alt="groupImage"
            className={styles.bigCardImage}
          />
        </div>
      </div>
      <p>
        *Tadalafil is the active ingredient in medications like Cialis, and it
        works by inhibiting the enzyme phosphodiesterase type 5 (PDE5)
      </p>
      <p>
        *Its effects can last for up to 36 hours. This extended duration of
        action is one of the key features that differentiate tadalafil from some
        other erectile dysfunction (ED) medications
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.takePhoto} onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFour;

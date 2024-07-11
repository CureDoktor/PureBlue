import React from "react";
import styles from "./StepFour.styles.module.scss";
import { useState, useEffect } from "react";

const StepFour = ({ onNext }) => {
  const [product, setProduct] = useState({ viagra: false });
  useEffect(() => {
    setProduct({ viagra: localStorage.getItem("viagra") });
  }, []);

  const onContinue = () => {
    if (localStorage.getItem("times") == 30) {
      onNext();
      onNext();
    } else {
      onNext();
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h6>
        Based on your selection, the following <br />
        treatment sounds like the most
        <br /> appropriate option for you:
      </h6>
      <div className={styles.mainBigCard}>
        <div className={styles.bigCardContainer}>
          <div className={styles.bigCardTextContainer}>
            <span className={styles.tablet}>Tablet</span>
            <span className={styles.bigCardMainHeading}>
              {product.viagra == "false" ? "Generic Cialis®" : "Generic Viagra"}
            </span>
            <span className={styles.bigCardSubHeading}>
              {product.viagra == "false" ? "Tadalafil" : "Sildenafil"}
            </span>
          </div>
          <img
            src={
              product.viagra == "false"
                ? "/assets/sildenafilOrderFlow/Group289/Group289.png"
                : "/assets/sildenafilOrderFlow/PureBlue1.png"
            }
            alt="groupImage"
            className={styles.bigCardImage}
          />
        </div>
      </div>
      <p>
        {product.viagra == "false" ? "*Tadalafil" : "*Sildenafil"} is the active
        ingredient in medications like{" "}
        {product.viagra == "false" ? "Cialis" : "Viagra"}, and it works by
        inhibiting the enzyme phosphodiesterase type 5 (PDE5)
      </p>
      <p>
        *Its effects can last for{" "}
        {product.viagra == "false" ? "36 hours" : "4 to 6 hours"}. This extended
        duration of action is one of the key features that differentiate{" "}
        {product.viagra == "false" ? "tadalafil" : "sildenafil"} from some other
        erectile dysfunction (ED) medications
      </p>
      <div className={styles.buttonContainer}>
        <button className={styles.takePhoto} onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFour;

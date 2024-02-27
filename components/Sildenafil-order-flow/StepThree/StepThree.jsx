import React from "react";
import Loader from "../Loader";
import styles from "./StepThree.styles.module.scss";

const StepThree = ({ onNext }) => {
  return (
    <div className={styles.mainContainer} onClick={onNext}>
      <img src="/assets/sildenafilOrderFlow/loader/loader.png" width={150} />
      <Loader />
    </div>
  );
};

export default StepThree;

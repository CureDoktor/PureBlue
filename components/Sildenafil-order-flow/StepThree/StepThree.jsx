import React from "react";
import Loader from "../Loader";
import styles from "./StepThree.styles.module.scss";
import { useEffect } from "react";

const StepThree = ({ onNext }) => {
  useEffect(() => {
    setTimeout(onNext,3000);
  }, []);
  return (
    
    <div className={styles.mainContainer}>
      <img src="/assets/sildenafilOrderFlow/loader/loader.png" width={150} />
      <Loader />
    </div>
  );
};

export default StepThree;

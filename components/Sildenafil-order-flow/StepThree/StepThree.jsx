import React from "react";
import Loader from "../Loader";
import styles from "./StepThree.styles.module.scss";
import { useEffect } from "react";

const StepThree = ({ onNext }) => {
  useEffect(() => {
    const timeoutId = setTimeout(onNext, 3000);
    
    return () => {
      // Clear the timeout when the component unmounts or when it's no longer shown
      clearTimeout(timeoutId);
    };

  }, []);
  return (
    
    <div className={styles.mainContainer}>
      <img src="/assets/sildenafilOrderFlow/loader/loader.png" width={150} />
      <Loader />
    </div>
  );
};

export default StepThree;

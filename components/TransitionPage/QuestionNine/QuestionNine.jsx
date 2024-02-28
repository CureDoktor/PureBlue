import React, { useEffect } from "react";
import styles from "./QuestionNine.styles.module.scss";
import { Spinner } from "react-bootstrap";

const QuestionNine = ({ onNext }) => {
  useEffect(() => {
    setTimeout(onNext,3000);
  }, []);

  return (
    <div className={styles.container}>
      <Spinner animation="border" variant="primary" /> 
      <p>You're not alone</p>
      <p className={styles.heading}>
        40% of men experience <br /> Symptoms like this by age 40
      </p>
      <img
        src="/assets/transitionPage/tablet.svg"
        className={styles.image}
      
      />
    </div>
  );
};

export default QuestionNine;

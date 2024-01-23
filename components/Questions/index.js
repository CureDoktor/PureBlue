import React from "react";
import styles from "./styles.module.scss";
import Stepper from "./stepper";
import ProgressBar from "./ProgressBar";
import QuestionSec from "./QuestionSec";

const Question = () => {
  return (
    <div className={styles.container}>
      <Stepper></Stepper>
      <ProgressBar></ProgressBar>
      <QuestionSec></QuestionSec>
    </div>
  );
};

export default Question;

import React from "react";
import styles from "./QuestionEleven.styles.module.scss";
import RadioButton from "../RadioButton";
import { elevenQuestionLabels } from "../data";

const QuestionEleven = ({ onNext }) => {
  return (
    <div className={styles.mainContainer}>
      <p>What resuts are you looking for?</p>
      <div className={styles.list}>
        {elevenQuestionLabels.map((items) => {
          const { label } = items;
          return <RadioButton label={label} onNext={onNext} />;
        })}
      </div>
      <p className={styles.signIn}>
        Already have an account? <span>Sign In</span>
      </p>
    </div>
  );
};

export default QuestionEleven;

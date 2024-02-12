import React from "react";
import styles from "./QuestionEight.styles.module.scss";
import RadioButton from "../RadioButton";
import { eightQuestionLabels } from "../data";
import Link from "next/link";

const QuestionEight = ({ onNext }) => {
  return (
    <div className={styles.mainContainer}>
      <p>
        How often do you <br /> have trouble getting <br />
        or keeping an <br /> erection during sex?
      </p>
      <div className={styles.list}>
        {eightQuestionLabels.map((items) => {
          const { label } = items;
          return <RadioButton key={label} label={label} onNext={onNext} />;
        })}
      </div>
      <p className={styles.signIn}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "blue" }}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default QuestionEight;

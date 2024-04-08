import React from "react";
import styles from "./QuestionEleven.styles.module.scss";
import RadioButton from "../RadioButton";
import { elevenQuestionLabels } from "../data";
import Link from "next/link";
import { searchParamsUrl } from "../../searchParams";

const QuestionEleven = ({ onNext }) => {
  return (
    <div className={styles.mainContainer}>
      <p>
        What results are you <br /> looking for?
      </p>
      <div className={styles.list}>
        {elevenQuestionLabels.map((items) => {
          const { label } = items;
          return <RadioButton key={label} label={label} onNext={onNext} />;
        })}
      </div>
      <p className={styles.signIn}>
        Already have an account?{" "}
        <Link href={"/login" + searchParamsUrl()} style={{ color: "blue" }}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default QuestionEleven;

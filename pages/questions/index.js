import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Questions from "../../components/TransitionPage/Questions/Questions";

const QuestionsPage = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <Questions props={props} />
      </div>
    </div>
  );
};

export default QuestionsPage;

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Questions from "../../components/TransitionPage/Questions/Questions";

const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <Questions />
      </div>
    </div>
  );
};

export default index;

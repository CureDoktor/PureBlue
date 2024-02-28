import React from "react";
import styles from "./Loader.styles.module.scss";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {

  return (
    <div className={styles.mainContainer}>
      <p className={styles.loading}>Loading...</p>
      <div className={styles.progress}></div>
      <div className={styles.reviewingContainer}>
        <p className={styles.reviewing}>
          Reviewing your responses
          <img
            src="/assets/sildenafilOrderFlow/tick/tick.png"
            className={styles.image}
          />
        </p>
      </div>
    </div>
  );
};

export default Loader;

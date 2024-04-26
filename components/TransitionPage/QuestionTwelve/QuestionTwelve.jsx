import React from "react";
import styles from "./QuestionTwelve.styles.module.scss";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const QuestionTwelve = ({ onNext }) => {
  useEffect(() => {
    const timeoutId = setTimeout(onNext, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={styles.container}>
      {/* <Spinner animation="border" variant="primary" /> */}
      <p>We're on it</p>
      <h4>
        Let's help you find the right <br /> treatment
      </h4>
      <img
        src="/assets/transitionPage/Treatment/Treatment.png"
        className={styles.image}
      />
    </div>
  );
};

export default QuestionTwelve;

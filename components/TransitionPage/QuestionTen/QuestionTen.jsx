import React from "react";
import styles from "./QuestionTen.styles.module.scss";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
const QuestionTen = ({ onNext }) => {
  useEffect(() => {
    const timeoutId = setTimeout(onNext, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={styles.container}>
      {/* <Spinner animation="border" variant="primary" /> */}
      <p>The good news</p>
      <h4>PureBlue can help</h4>
      <img
        src="/assets/transitionPage/heart/Help.png"
        className={styles.image}
      />
    </div>
  );
};

export default QuestionTen;

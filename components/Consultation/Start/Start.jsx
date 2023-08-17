import React from "react";
import styles from "./Start.styles.module.scss";

const Start = () => {
  return (
    <div className={styles.container}>
      <h1>Start your consultation</h1>
      <p>In three simple steps, your order will be on the way.</p>
      <ul>
        <li>
          <span>1</span>
          <p>Answer a few quick health questions.</p>
        </li>
        <li>
          <span>2</span>
          <p>Choose your treatment and confirm your ID.</p>
        </li>
        <li>
          <span>3</span>
          <p>Review and pay for your order.</p>
        </li>
      </ul>
    </div>
  );
};

export default Start;

import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
const ProgressBar = () => {
  const [progress, setProgress] = useState(20);
  const handleProgress = () => {
    const newProgress = progress + 16.67;
    setProgress(Math.min(newProgress, 100));
  };
  return (
    <div className={styles.container}>
      <h1>Please Complete your Medical Profile</h1>
      <div className={styles.progressBarContainer}>
        <div
          className={`${styles.progressBar} ${
            progress === 100 && styles.completed
          }`}
          style={{ width: `${progress}%` }}
        >
          {" "}
          {progress} %{" "}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

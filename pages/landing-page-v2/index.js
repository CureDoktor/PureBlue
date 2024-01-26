import React from "react";
import styles from "./styles.module.scss";

const index = () => {
  const headerDescription = [
    "FDA-approved medication",
    "Prescribed by board-certified physicians ",
    "Process takes as little as 3 minutes!",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headerImageContainer}>
        <img src="/assets/landingPageV2/viagra/viagra.png" />
      </div>
      <div className={styles.headerTextContainer}>
        <p className={styles.mainHeading}>Generic Viagra®</p>
        <p className={styles.mainHeading2}>Generic Viagra® (Sildenafil) 50mg</p>
        <p className={styles.description}>
          Sildenafil is the same active ingredient in branded Viagra.
        </p>
        {headerDescription.map((items) => {
          return (
            <p className={styles.details}>
              <img src="/assets/landingPageV2/tick/tick.png" />
              <span>{items}</span>
            </p>
          );
        })}
        <input placeholder="One month price" />
      </div>
    </div>
  );
};

export default index;

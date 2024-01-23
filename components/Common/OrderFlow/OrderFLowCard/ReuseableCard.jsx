import React from "react";
import styles from "../OrderFLowCard/OrderFlowCard.styles.module.scss";

const ReuseableCard = ({ imageSrc, onlyText, bulkMedicines, bigCard }) => {
  return (
    <>
      {imageSrc ? (
        <div className={styles.mainCard}>
          <div className={styles.imageMainContainer}>
            <img src={imageSrc} alt="Card" className={styles.cardImage} />
            <div className={styles.imageParaDiv}>
              <h4>Viagra</h4>
              <span>Sildenafil | Oral tablet</span>
            </div>
          </div>
        </div>
      ) : onlyText ? (
        <>
          <div className={styles.mainCard}>
            <div className={styles.onlyTextContainer}>{onlyText}</div>
          </div>
        </>
      ) : bigCard ? (
        <>
          <div className={styles.mainBigCard}>
            <div className={styles.bigCardContainer}>
              <div className={styles.bigCardTextContainer}>
                <span className={styles.tablet}>Tablet</span>
                <span className={styles.bigCardMainHeading}>
                  Generic Cialis®
                </span>
                <span className={styles.bigCardSubHeading}>Tadalafil</span>
              </div>
              <img
                src="/assets/sildenafilOrderFlow/Group289/Group289.png"
                alt="groupImage"
                className={styles.bigCardImage}
              />
            </div>
          </div>
        </>
      ) : bulkMedicines ? (
        <>
          <div className={styles.mainCard}>
            <div className={styles.bulkMedicinesContainer}>
              <span>Use 4 times per month</span>
              <img
                src="/assets/sildenafilOrderFlow/group/Group1.png"
                alt="groupImage"
                className={styles.groupImage}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.mainCard}>
            <div className={styles.headingContainer}>
              <h4>Take daily</h4>
              <span>$1.80 per dose</span>
            </div>
            <span>To maintain peak sexual readiness at all times</span>
          </div>
        </>
      )}
    </>
  );
};

export default ReuseableCard;

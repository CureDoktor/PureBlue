import React from "react";
import styles from "../OrderFLowCard/OrderFlowCard.styles.module.scss";

const ReuseableCard = ({ content, onClick }) => {
  const {
    title,
    description,
    pricePerDose,
    imageSrc,
    onlyText,
    bigCard,
    bulkMedicines,
  } = content;
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
          <div className={styles.mainCard} onClick={onClick}>
            <div className={styles.headingContainer}>
              <h4>{title}</h4>
              <span>${pricePerDose} per Dose</span>
            </div>
            <span>{description}</span>
          </div>
        </>
      )}
    </>
  );
};

export default ReuseableCard;

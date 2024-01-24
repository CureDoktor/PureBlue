import React from "react";
import styles from "../OrderFLowCard/OrderFlowCard.styles.module.scss";

const ReuseableCard = ({ content, onClick, bulkMedicines, SingleImage }) => {
  const { title, description, pricePerDose, imageSrc } = content;
  return (
    <>
      {SingleImage ? (
        <div className={styles.mainCard}>
          <div className={styles.imageMainContainer}>
            <img src={imageSrc} alt="Card" className={styles.cardImage} />
            <div className={styles.imageParaDiv}>
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </div>
      ) : bulkMedicines ? (
        <>
          <div className={styles.mainCard}>
            <div className={styles.bulkMedicinesContainer}>
              <span>{title}</span>
              <img
                src={imageSrc}
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

import React from "react";
import styles from "./StepTwo.styles.module.scss";
import OrderFlowCard from "../../Common/OrderFlow/OrderFLowCard";

const StepTwo = ({ onNext }) => {
  const medicationOptions = [
    {
      title: "Viagra",
      description: "Sildenafil | Oral tablet",
      imageSrc:
        "/assets/sildenafilOrderFlow/PureBluePrescriptionBottleSILDENAFIL/PureBlue1.png",
    },
    {
      title: "Cialis",
      description: "Tadalafil | Oral tablet",
      imageSrc:
        "/assets/sildenafilOrderFlow/PureBluePrescriptionBottleSILDENAFIL/PureBlue2.png",
    },
  ];
  return (
    <>
      <div className={styles.Container}>
        <h2 className={styles.heading}>
          Which treatment option best fits your needs?
        </h2>

        <p className={styles.subHeading}>
          Your preference will be shared with a provider who will <br />
          determine the best treatment for you.
        </p>
        <div className={styles.mainCardContainer}>
          {medicationOptions.map((items) => {
            return (
              <div className={styles.card} key={items} onClick={onNext}>
                <OrderFlowCard content={items} SingleImage />
              </div>
            );
          })}
        </div>
        <div className={styles.mainCard}>
          <div className={styles.onlyTextContainer}>
            Please choose for me based on my health questionnaire
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;

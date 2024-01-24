import React from "react";
import styles from "./StepSix.styles.module.scss";
import OrderFlowCard from "../../Common/OrderFlow/OrderFLowCard";

const StepSix = ({ onNext }) => {
  const medicationOptions = [
    {
      title: "Use 4 times per month",
      imageSrc: "/assets/sildenafilOrderFlow/group2/1.png",
    },
    {
      title: "Use 8 times per month",
      imageSrc: "/assets/sildenafilOrderFlow/group2/2.png",
    },
    {
      title: "Use 12 times per month",
      imageSrc: "/assets/sildenafilOrderFlow/group2/3.png",
    },
    {
      title: "Use 16 times per month",
      imageSrc: "/assets/sildenafilOrderFlow/group2/4.png",
    },
  ];
  return (
    <div>
      <h2 className={styles.heading}>
        How often do you think you'll use your <br /> medication?
      </h2>
      <div className={styles.mainCardContainer}>
        {medicationOptions.map((items) => {
          return (
            <div className={styles.card} key={items} onClick={onNext}>
              <OrderFlowCard content={items} bulkMedicines />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepSix;

import React from "react";
import styles from "./StepTwo.styles.module.scss";
import { useEffect, useState } from "react";
import OrderFlowCard from "../../Common/OrderFlow/OrderFLowCard";

const StepTwo = ({ onNext, setProduct, product }) => {
  const [daily, setDaily] = useState(false);
  useEffect(() => {
    setDaily(localStorage.getItem("daily"));
  }, []);
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
            if (daily === "true") {
              if (items.title === "Viagra") {
                return <div key={items.title}></div>;
              } else {
                return (
                  <div key={items.title}>
                    <div
                      className={styles.card}
                      onClick={() => {
                        localStorage.setItem("viagra", false);
                        localStorage.setItem("times", 30);
                        onNext();
                      }}
                    >
                      <OrderFlowCard content={items} SingleImage />
                    </div>
                    <div
                      onClick={() => {
                        localStorage.setItem("viagra", false);
                        localStorage.setItem("times", 30);
                        onNext();
                      }}
                      className={styles.mainCard}
                    >
                      <div className={styles.onlyTextContainer}>
                        Please choose for me based on my health questionnaire
                    </div>
                      </div>
                  </div>
                );
              }
            } else {
              if (items.title === "Viagra") {
                return (
                  <div
                    className={styles.card}
                    key={items.title}
                    onClick={() => {
                      localStorage.setItem("viagra", true);
                      onNext();
                    }}
                  >
                    <OrderFlowCard content={items} SingleImage />
                  </div>
                );
              } else {
                return (
                  <div
                    className={styles.card}
                    key={items.title}
                    onClick={() => {
                      localStorage.setItem("viagra", false);
                      onNext();
                    }}
                  >
                    <OrderFlowCard content={items} SingleImage />
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </>
  );
};

export default StepTwo;

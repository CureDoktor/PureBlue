import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const Stepper = ({ completedSteps }) => {
  const steps = [4, 8, 12, 17];

  return (
    <div>
      <div className={styles.stepperWrapper}>
        {steps.map((step, index) => (
          <div
            key={index + 1}
            className={`${styles.stepperItem} ${
              completedSteps >= step ? styles.completed : styles.active
            }`}
          >
            <div
              className={styles.stepCounter}
              style={{
                background:
                  completedSteps < 4 && index === 0
                    ? "#0077f0"
                    : completedSteps > 3 && completedSteps < 8 && index === 1
                    ? "#0077f0"
                    : completedSteps > 7 && completedSteps < 12 && index === 2
                    ? "#0077f0"
                    : completedSteps > 11 && completedSteps < 18 && index === 3
                    ? "#0077f0"
                    : "",
                color:
                  completedSteps < 4 && index === 0
                    ? "white"
                    : completedSteps > 3 && completedSteps < 8 && index === 1
                    ? "white"
                    : completedSteps > 7 && completedSteps < 12 && index === 2
                    ? "white"
                    : completedSteps > 11 && completedSteps < 18 && index === 3
                    ? "white"
                    : "",
              }}
            >
              {completedSteps >= step ? (
                <Image
                  src="/assets/questions/completedGreenTick.svg"
                  layout="fill"
                  // width={40}
                  // height={40}
                />
              ) : (
                index + 1
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

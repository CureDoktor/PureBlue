import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import imgage from "../../../public/assets/questions/completedGreenTick.svg";
const Stepper = () => {
  return (
    <div>
      <div class={styles.stepperWrapper}>
        <div class={`${styles.stepperItem} ${styles.completed}`}>
          <div class={styles.stepCounter}>
            {true ? (
              <Image
                src="/assets/questions/completedGreenTick.svg"
                layout="fill"
                width={10}
                height={10}
              ></Image>
            ) : (
              1
            )}
          </div>
        </div>
        <div class={`${styles.stepperItem} ${styles.active}`}>
          <div class={styles.stepCounter}>
            {false ? (
              <Image
                src="/assets/questions/completedGreenTick.svg"
                layout="fill"
                width={10}
                height={10}
              ></Image>
            ) : (
              2
            )}
          </div>
        </div>
        <div class={`${styles.stepperItem} ${styles.active}`}>
          <div class={styles.stepCounter}>
            {false ? (
              <Image
                src="/assets/questions/completedGreenTick.svg"
                layout="fill"
                width={10}
                height={10}
              ></Image>
            ) : (
              3
            )}
          </div>
        </div>
        <div class={`${styles.stepperItem} ${styles.active}`}>
          <div class={styles.stepCounter}>
            {false ? (
              <Image
                src="/assets/questions/completedGreenTick.svg"
                layout="fill"
                width={10}
                height={10}
              ></Image>
            ) : (
              4
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

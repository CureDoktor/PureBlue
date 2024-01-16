import React from "react";
import styles from "./Started.styles.module.scss";
import Image from "next/image";
const Started = () => {
  let icon = "/assets/homeRemain/BannerThree/check.png";
  const featureList = [
    { text: " No in-person visits to the doctor", icon },
    { text: "There is no waiting in line", icon },
    { text: "No More Awkward Situations", icon },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <img src={"/assets/homeRemain/BannerThree/medicine.png"} />
        </div>

        <div className={styles.textContent}>
          <div className={styles.buttonContainer}>
            <p>Let's get started</p>
          </div>
          <div className={styles.box}>
            <ul className={styles.featuresList}>
              {featureList.map((feature, index) => (
                <li key={index}>
                  <img
                    src={feature.icon}
                    alt=""
                    className={styles.featureIcon}
                  />
                  <span> {feature.text}</span>
                </li>
              ))}
            </ul>
            <img src="/assets/homeRemain/BannerThree/arrow.png" />
          </div>
          <div className={styles.medication}>
            <p>First, choose a medication that works for you.</p>
            <div className={styles.tablets}>
              <img src="/assets/homeRemain/Banner/tablet1.png" />
              <img src="/assets/homeRemain/Banner/tablet2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;

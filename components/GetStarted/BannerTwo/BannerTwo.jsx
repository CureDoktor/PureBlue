import React from "react";
import styles from "./BannerTwo.styles.module.scss";
import Image from "next/image";
const BannerTwo = () => {
  let icon = "/assets/homeRemain/Banner/check.png";
  const featureList = [
    { text: "100% Online", icon },
    { text: "Brand-name and generic E.D. medication available", icon },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.textContent}>
          <div className={styles.buttonContainer}>
            <p>
              <span>Start Now</span>
              <img src="/assets/homeRemain/Banner/arrow.png" />
            </p>
          </div>
          <div className={styles.medication}>
            <p>
              Step 1:
              <span> Select your medication</span>
            </p>
            <div className={styles.tablets}>
              <img src="/assets/homeRemain/Banner/tablet1.png" />
              <img src="/assets/homeRemain/Banner/tablet2.png" />
            </div>
          </div>
          <ul className={styles.featuresList}>
            {featureList.map((feature, index) => (
              <li key={index}>
                <img src={feature.icon} alt="" className={styles.featureIcon} />
                <span> {feature.text}</span>
              </li>
            ))}
            <small>
              For important safety information, please click
              <span>here.</span>
            </small>
          </ul>
        </div>
        {/* second container  */}
        <div className={styles.imgContainer}>
          <img src={"/assets/homeRemain/BannerTwo/medicine.png"} />
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;

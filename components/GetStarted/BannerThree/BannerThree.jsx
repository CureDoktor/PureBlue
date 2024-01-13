import React from "react";
import styles from "./BannerThree.styles.module.scss";
import Image from "next/image";
const BannerThree = () => {
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
            <div className="d-flex gap-2">
              <Image
                width={200}
                height={100}
                src="/assets/homeRemain/Banner/tablet1.png"
              />
              <Image
                width={200}
                height={100}
                src="/assets/homeRemain/Banner/tablet2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerThree;

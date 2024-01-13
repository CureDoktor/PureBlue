import React from "react";
import styles from "./Lists.styles.module.scss";
const Lists = () => {
  const listArr = [
    {
      text: "FREE online consultations with US-licensed physicians! Answer a quick 3-minute health assessment and get approval results within the day!",
      icon: "/assets/homeRemain/Lists/icon1.png",
    },
    {
      text: "Pay only for your medication. No doctors’ fees, processing fees, or pharmacy fees. You will not be charged until your prescription is approved!",
      icon: "/assets/homeRemain/Lists/icon2.png",
    },
    {
      text: "7-Day dedicated customer support ensures that you get top-tier support when you need it!",
      icon: "/assets/homeRemain/Lists/icon3.png",
    },
    {
      text: "For your peace of mind, all purchases are covered by our 30-day money-back guarantee!",
      icon: "/assets/homeRemain/Lists/icon4.png",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <section className={styles.mainBox}>
        <div className={styles.listBox}>
          <ul className={styles.featuresList}>
            {listArr.map((feature, index) => (
              <li key={index}>
                <div className={styles.featureIcon}>
                  <img src={feature.icon} alt="icon" />
                </div>
                <span> {feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imgBox}>
          <img src="/assets/homeRemain/Lists/medicine.png" alt="medicine" />
        </div>
      </section>
    </div>
  );
};

export default Lists;

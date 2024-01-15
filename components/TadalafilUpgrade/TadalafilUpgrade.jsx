import React from "react";
import styles from "./TadalafilUpgrade.styles.module.scss";
import Order from "../Common/Order";
import Details from "./Details";
import UpgradePkg from "../Common/UpgradePkg/UpgradePkg";
const TadalafilUpgrade = () => {
  const upgradeArray = [
    {
      id: 1,
      title: "3 Month Package",
      tBox: "/assets/pageThree/upgradePkg/light.svg",
      doses: `12 doses of 25.0mg Tadalafil (oral - tablet)`,
      savings: "10% Savings ($9.6 discount)",
      additional: "Only pay an additional $86.40",
    },
    {
      id: 2,
      title: "6 Month Package",
      tBox: "/assets/pageThree/upgradePkg/brown.svg",
      doses: "24 doses of 25.0mg Tadalafil (oral - tablet)",
      savings: "20% Savings ($48 discount)",
      additional: "Only pay an additional $192.00",
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: "48 doses of 25.0mg  Tadalafil (oral - tablet)",
      savings: "30% Savings ($158.4 discount)",
      additional: "Only pay an additional $369.60",
      tBox: "/assets/pageThree/upgradePkg/light.svg",
    },
  ];
  return (
    <>
      <div className={styles.mainContainer}>
        <Order />
      </div>
      <div className={styles.details}>
        <Details />
      </div>

      <div className={styles.upgrade}>
        <UpgradePkg upgradeArray={upgradeArray} />
      </div>
    </>
  );
};

export default TadalafilUpgrade;

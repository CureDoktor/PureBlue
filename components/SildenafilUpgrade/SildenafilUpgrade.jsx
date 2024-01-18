import React from "react";
import styles from "./SildenafilUpgrade.styles.module.scss";
import Order from "../Common/Order";
import UpgradePkg from "../Common/UpgradePkg/UpgradePkg";
import Details from "./Details";
const SildenafilUpgrade = () => {
  const upgradeArray = [
    {
      id: 1,
      title: "3 Month Package",
      tBox: "/assets/pageThree/upgradePkg/light.png",
      doses: `<strong>12 doses</strong> of 25.0mg Sildenafil (oral - tablet)`,
      savings: `10% Savings <br/><strong>($9.6 discount)</strong>`,
      additional: `Only pay an additional <br/><strong>$86.40</strong>`,
    },
    {
      id: 2,
      title: "6 Month Package",
      tBox: "/assets/pageThree/upgradePkg/brown.png",
      doses: `<strong >24 doses</strong> of 25.0mg Sildenafil (oral - tablet)`,
      savings: `20% Savings <br/><strong>($48 discount)</strong>`,
      additional: `Only pay an additional <br/><strong>$192.00</strong>`,
    },
    {
      id: 3,
      title: "12 Month Package",
      doses: `<strong>48 doses</strong> of 25.0mg Sildenafil (oral - tablet)`,
      savings: `30% Savings <br/><strong>($158.4 discount)</strong>`,
      additional: `Only pay an additional <strong>$369.60</strong>`,
      tBox: "/assets/pageThree/upgradePkg/light.png",
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

export default SildenafilUpgrade;

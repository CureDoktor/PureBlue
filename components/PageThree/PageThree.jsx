import React from "react";
import styles from "./PageThree.styles.module.scss";
import Order from "./Order";
import UpgradePkg from "./UpgradePkg";
const PageThree = () => {
  return (
    <div className={styles.mainContainer}>
      <Order />
      <UpgradePkg />
    </div>
  );
};

export default PageThree;

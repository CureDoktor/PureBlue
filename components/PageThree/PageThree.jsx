import React from "react";
import styles from "./PageThree.styles.module.scss";
import Order from "./Order";
import UpgradePkg from "./UpgradePkg";
import Details from "./Details";
const PageThree = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Order />
      </div>
      <div className={styles.details}>
        <Details />
      </div>

      <div className={styles.upgrade}>
        <UpgradePkg />
      </div>
    </>
  );
};

export default PageThree;

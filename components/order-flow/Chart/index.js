import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import chart from "../../../public/assets/order/chart.png";
import chartMobile from "../../../public/assets/order/chartMobile.png";
const Chart = () => {
  return (
    <div className={styles.main}>
      <h1>Dare to Compare</h1>
      <h3>
        See why PureBlue is the #1 Choice for Online ED Treatments in the US!
      </h3>
      <div className={styles.chart}>
        <Image src={chart}></Image>
      </div>
      <div className={styles.chartMobile}>
        <Image src={chartMobile}></Image>
      </div>
    </div>
  );
};

export default Chart;

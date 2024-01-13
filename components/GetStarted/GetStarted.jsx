import React from "react";

import styles from "./GetStarted.styles.module.scss";
import Banner from "./Banner";
import { Container } from "react-bootstrap";
import Mark from "./Mark";
import Lists from "./Lists";
import ListTwo from "./ListTwo";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";
import Work from "./Work";
import Frequently from "./FrequentlyAsked";

const GetStarted = () => {
  return (
    <div>
      <Banner />
      <Mark />
      <Lists />
      <div className={styles.ps}>
        <ListTwo />
        <BannerTwo />
      </div>
      <Work />
      <div style={{ background: "#F7F7F7" }}>
        <Frequently />
      </div>
      <BannerThree />
    </div>
  );
};

export default GetStarted;

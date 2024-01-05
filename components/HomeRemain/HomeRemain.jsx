import React from "react";

import styles from "./HomeRemain.styles.module.scss";
import Banner from "./Banner";
import { Container } from "react-bootstrap";

const HomeRemain = () => {
  return (
    <div
    // className={styles.mainContainer}
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Banner />
      {/* <Container className={styles.mainContainer}></Container> */}
    </div>
  );
};

export default HomeRemain;

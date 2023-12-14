import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import styles from "./Navigation.styles.module.scss";

const Navigation = ({ handleSlideNext, handleSlidePrev }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={handleSlidePrev} className={styles.button}>
        <ChevronLeft />
      </button>
      <button onClick={handleSlideNext} className={styles.button}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default Navigation;
